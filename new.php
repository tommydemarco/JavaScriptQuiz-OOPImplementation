<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    
    <!-- including the head -->
    <?php include 'head.php' ?>
    
    <div class="row pt-5">
      <div class="col-12 text-center">
        <h1 class="text-light pt-3">Question 1</h1>
        <h4 class="text-light">Object Oriented JavaScript</h4>
      </div>
      <div class="col-lg-11 mx-auto">
          <div class="row py-5">
              <div class="col-lg-12 mx-auto">
                  <div class="card rounded-0 border-0 shadow">
                      <div class="card-body p-5">
                          
                          <!-- form to add a new recipe -->
                          <div class="table-responsive">
                            <!-- fill in question -->
                            <div class="question hidden-question" id="fill-in">
                              <div>
                                  <h2 class="question-text"></h2>
                                  <textarea class="fill-in" id="q01_ans"></textarea>
                                  <button class="fill-in-submit btn btn-primary"> Submit </button>
                              </div>
                              <div class="feedback no-answer">
                                  <p></p>
                              </div>
                              <div class="feedback correct">
                                  
                              </div>
                              <div class="feedback incorrect">
                                  
                              </div>
                            </div>
                            <!-- multiple choice question -->
                            <div class="question hidden-question" id="multi-choice">
                                <div>
                                    <h2 class="question-text"></h2>
                                    <div>
                                        <input type="radio" name="q4" id="q4_1"/>
                                        <label for="q4_1" id="q4_1_label"></label>
                                        <!-- Option 2 -->
                                        <input type="radio" name="q4" id="q4_2"/>
                                        <label for="q4_2" id="q4_2_label"></label>
                                        <!-- Option 3 -->
                                        <input type="radio" name="q4" id="q4_3"/>
                                        <label for="q4_3" id="q4_3_label"></label>
                                        <!-- Option 3 -->
                                        <input type="radio" name="q4" id="q4_4"/>
                                        <label for="q4_4" id="q4_4_label"></label>
                                    </div>
                                    <button class="fill-in-submit btn btn-primary"> Submit </button>
                                </div>
                                <div class="feedback no-answer">
                                    
                                </div>
                                <div class="feedback correct">
                                    
                                </div>
                                <div class="feedback incorrect">
                                    
                                </div>
                            </div>

                            <a class="navigation btn-prev btn btn-custom-1 mr-2">Previous</a>
                            <a class="navigation btn-next btn btn-custom-2">Next</a>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
    <!-- main row -->
    </div>

    <!--including the footer -->
    <?php include 'footer.php' ?>