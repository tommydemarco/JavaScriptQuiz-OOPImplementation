<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript quiz</title>
    
    <!-- including the head -->
    <?php include 'head.php' ?>
    
    <div class="row pt-5">
      <div class="col-12 text-center">
        <h1 class="text-light pt-4">Test your JavaScript Knowledge</h1>
        <h4 class="text-light">Pick a topic to start the quiz</h4>
      </div>
        <div class="col-lg-11 mt-2 mx-auto">
            <div class="row py-5">
                <div class="col-lg-4">
                  <!-- Item -->
                  <figure class="caption-3 mb-0 shadow-sm p-3 bg-white">
                    <img src="./img/oop.jpg" alt="" class="w-100">
                    <figcaption class="px-4 py-3 bg-white shadow-sm">
                      <h3 class="h5 mb-1 font-weight-bold font-italic">OOP approaches</h3>
                      <a href="object-oriented-quiz.php" class="navigation btn-next btn btn-custom-2 mt-2 test-button">Take quiz</a>
                    </figcaption>
                  </figure>
                </div>
        
                <div class="col-lg-4">
                  <!-- Item -->
                  <figure class="caption-3 mb-0 shadow-sm p-3 bg-white">
                    <img src="./img/dom.jpg" alt="" class="w-100">
                    <figcaption class="px-4 py-3 bg-white shadow-sm">
                      <h2 class="h5 mb-1 font-weight-bold font-italic">DOM Interactions</h2>
                      <a href="#" class="navigation btn-next btn btn-custom-2 mt-2 test-button">Take quiz</a>
                    </figcaption>
                  </figure>
        
                </div>
                <div class="col-lg-4">
                  <!-- Item -->
                  <figure class="caption-3 mb-0 shadow-sm p-3 bg-white">
                    <img src="./img/fundamentals.jpg" alt="" class="w-100">
                    <figcaption class="px-4 py-3 bg-white shadow-sm">
                      <h2 class="h5 mb-1 font-weight-bold font-italic">JS Fundamentals</h2>
                      <a href="#" class="navigation btn-next btn btn-custom-2 mt-2 test-button">Take quiz</a>
                    </figcaption>
                  </figure>
        
                </div>
            </div>
        </div>

        <!--main column -->
      </div>
    <!-- main row -->
    </div>

    <!--including the footer -->
    <?php include 'footer.php' ?>