

var MAINAPP = (function(nsp, $, domU, strU) {

    
    //Quiz Functionality
    var contentObj = {},
        questionsArray = [],
        navigationProto = {}, //Setup in setUpNavigation()
        prevBtn, 
        nextBtn;

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                contentObj = JSON.parse(xobj.responseText);
                //console.log(contentObj);
                parseData(contentObj);
            }
        };
        xobj.send(null);
    },
    parseData = function(cObj) {
        questionsArray = cObj.questions;
        //set button text
        domU.setHTML($('.fill-in-submit'), cObj.buttonText);
        
        //for each element of the questionsArray object that has been parsed from JSON
        //we create another object with the Question constructor
        for (let i = 0; i < questionsArray.length; i++) {
            questionsArray[i] = new Question(questionsArray[i]);
        }
        console.log(questionsArray);
        //calling the setup navigation function
        setUpNavigation();

    },

    initQuiz = function() {
        if (document.title !== "JavaScript Quiz") {
            var quizN = document.getElementById('titolo-quiz').innerText
            console.log(quizN)
            if (quizN === "OOP approaches Quiz"){
                loadJSON("./JSON/first-quiz.json");
            } else if (quizN === "DOM Interactions Quiz") {
                loadJSON("./JSON/second-quiz.json");
            } else {
                loadJSON("./JSON/third-quiz.json");
            } 
        }
        
    };

    
    //setting up the constructor for the questions
    var Question = function(obj){
        var htmlDiv;
        this.questionDiv = (obj.type === 'true-false') ? 'multi-choice' : obj.type;
        //setting to the instance object all the property of the parameter object
        this.type = obj.type;
        this.id = obj.id;
        this.questionText = obj.questionText;
        this.distractorText = obj.distractors;
        this.correctResp = obj.correctResp;
        this.feedback = obj.feedback;
        this.weight = obj.weight;
        this.result = "no-answer";
        this.studentResp = "";
        this.correct = false;

        //addinging DOM references to the object for quick reference
        htmlDiv = $('#'+this.questionDiv)[0];
        this.questionField = htmlDiv.querySelector(".question-text");
        this.noAnswerFeed = htmlDiv.querySelector(".feedback.no-answer");
        this.correctFeed = htmlDiv.querySelector(".feedback.correct");
        this.inccorrectFeed = htmlDiv.querySelector(".feedback.incorrect");
        this.htmlDiv = htmlDiv;

        //populatinf the question with the multiple choice items
        switch (this.questionDiv) {
            case "fill-in":
                this.populateTheQuestion = function() { 
                    this.populateQuestion(); 
                    //removing the previouply entered text in the text area
                    htmlDiv.querySelector('textarea').value = "";            
                };
                this.checkTheAnswer = function() {
                    //chacking the question for fill in
                    var ans,
                        value = htmlDiv.querySelector('textarea').value;

                    if (value !== "") {
                        ans = strU.breakOut(this.correctResp, ",");
                        this.correct = ans.every(function(val) {
                            return (value.indexOf(val) > -1);
                        });
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();    
                };
                break;
            case "multi-choice":
                //getting all the labels in the apporopriate div
                var distractors = htmlDiv.querySelectorAll('label');   
                //now getting the actual input field 
                var distractorsRadio = htmlDiv.querySelectorAll('input'); 

                this.populateTheQuestion = function() { 
                    
                    this.populateQuestion();
                    domU.addClass(distractors, 'remove');
                    for (let i = 0; i < distractors.length; i++) {
                        if (this.distractorText[i] !== undefined) {
                            distractors[i].innerHTML = this.distractorText[i];
                            domU.removeClass([distractors[i]],'remove');
                        }
                    }
                    for (let i = 0; i < distractorsRadio.length; i++) {
                        distractorsRadio[i].checked = false;
                    }            
                };
                this.checkTheAnswer = function() {  
                    //check the answer for the multiple choice questions
                    for (let i = 0; i < distractors.length; i++) {
                        if (distractorsRadio[i].checked) {
                            this.studentResp = $('#' + distractorsRadio[i].id + '_label')[0].innerHTML;
                        }
                    }
                    if (this.studentResp !== "") {
                        this.correct = this.studentResp === this.correctResp;
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();               
                };
                break;
            default:
                this.populateTheQuestion = function() {
                    this.populateQuestion();
                };
                break;
        }
    }

    //setting all the methods to the prototype of the Question constructor
    Question.prototype.displayQuestion = function() {
        //binding the value of this to the checkTheAnswer method
        //cause the value of this will be the button otherwise when the function is called by it
        var checkTheAnswer = this.checkTheAnswer.bind(this);
        domU.removeClass([this.htmlDiv],'hidden-question');
        domU.assignEvent(this.htmlDiv.querySelectorAll('.fill-in-submit'), 
            'click', function(){
                checkTheAnswer();
            });
    };
    Question.prototype.hideQuestion = function() {
        domU.addClass([this.htmlDiv], 'hidden-question');
    };
    Question.prototype.populateQuestion = function() {
        //Set Question text
        this.questionField.innerHTML = this.questionText;
        this.noAnswerFeed.innerHTML = '<p><span>X </span>' + this.feedback.noAnswer + '</p>';
        this.correctFeed.innerHTML = '<p><span>&#10003 </span>' + this.feedback.correctAnswer + '</p>';
        this.inccorrectFeed.innerHTML = '<p><span>X </span>' + this.feedback.wrongAnswer + '</p>';
    };
    Question.prototype.hideFeedback = function() {
        var feedback = this.htmlDiv.querySelectorAll('.feedback.visible');
        domU.removeClass(feedback, 'visible');
    };
    Question.prototype.displayFeedback = function() {
        var feedback = $('.feedback.' + this.result);
        domU.addClass(feedback, 'visible');
    };
    Question.prototype.checkAnswer = function() {

    };

    //navigation button functionality 
    var setUpNavigation = function(){
        let cQuestion = 0;
        navigationProto = {
            questionsArray: questionsArray,
            totalQuestions: questionsArray.length,
            hideQuestion: function() {
                var curQuestion = this.questionsArray[this.currentQuestion];
                curQuestion.hideQuestion();
            },
            showQuestion: function() {
                var newQuestion = this.questionsArray[this.currentQuestion];
                newQuestion.hideFeedback();
                newQuestion.populateTheQuestion();
                newQuestion.displayQuestion();
            },
            //setting a getter and a setter for the cQuestion variable
            get currentQuestion(){
                return cQuestion;
            },
            set currentQuestion(value){
                cQuestion = value;
            }
        };
        //creating the next button object
        nextBtn = Object.create(navigationProto);
        nextBtn.goNext = function(e){
            if (this.currentQuestion < this.totalQuestions -2){
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion +1;
                this.showQuestion();
                document.getElementsByClassName('btn-next')[0].innerHTML = "Next";
                document.getElementById('results-interface').style.display = "none";
            } else if (this.currentQuestion == this.totalQuestions - 2) {
                console.log("Show results")
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion +1;
                this.showQuestion();
                document.getElementsByClassName('btn-next')[0].innerHTML = "Show results";
                document.getElementById('results-interface').style.display = "none";
                document.getElementsByClassName('btn-next')[0].style.display = "inline-block";
            } else {
                this.hideQuestion();
                document.getElementById('results-interface').style.display = "block";
                document.getElementsByClassName('btn-next')[0].innerHTML = "Home page";
                document.getElementsByClassName('btn-next')[0].style.display = "none";
                document.getElementsByClassName('btn-prev')[0].style.display = "none";
                document.getElementById('btn-again').style.display = "block";
                let esits = document.getElementsByClassName('esit-results');
                let resultsArray = [];
                for (i = 0; i < questionsArray.length; i++){
                    resultsArray.push(questionsArray[i].result)
                }
                for (i = 0; i < esits.length; i++){
                    let not_answered = "Not answered";
                    let correct = "Correct answer";
                    let incorrect = "Incorrect answer";
                    if (questionsArray[i].result == "no-answer"){
                        esits[i].innerHTML = not_answered;
                        esits[i].classList.add('warning');
                    } else if (questionsArray[i].result == "correct") {
                        esits[i].innerHTML = correct;
                        esits[i].classList.add('success');
                    } else {
                        esits[i].innerHTML = incorrect;
                        esits[i].classList.add('error');
                    }
                }

            }
        };
        //previous question button
        prevBtn = Object.create(navigationProto);
        prevBtn.goPrev = function(e) {
            if (this.currentQuestion > 0){
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion - 1;
                this.showQuestion();
                document.getElementsByClassName('btn-next')[0].innerHTML = "Next";
                document.getElementById('results-interface').style.display = "none";
                document.getElementsByClassName('btn-next')[0].style.display = "inline-block";
            }
        };
        //using the shortcut method to add an event listener 
        $('.btn-prev')[0].addEventListener('click', 
            function(e){
                prevBtn.goPrev(e);
            });
        $('.btn-next')[0].addEventListener('click', 
        function(e){
            nextBtn.goNext(e);
            console.log(questionsArray[1].result)
        }); 

        //showing the first question on page load
        navigationProto.showQuestion();  
        
        //making the button objects available to the main app
        nsp.prevBtn = prevBtn;
        nsp.nextBtn = nextBtn;
    };

    

    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });

    //Public Methods and Properties
    nsp.initQuiz = initQuiz;
    nsp.parseData = parseData;
    nsp.questionsArray = questionsArray
    
    return nsp;
    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);


//reloading the quiz
function reloadTheQuiz(){
    location.reload()
}