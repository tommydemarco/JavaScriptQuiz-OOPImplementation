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
                <div class="col-lg-7 mx-auto">
                    <div class="card rounded-0 border-0 shadow">
                        <div class="card-body p-5">
                            
                            <!-- form to add a new recipe -->
                            <div class="table-responsive">
                              <form action="/recipes" method="POST">
                                <!-- submit button-->
                                <button class="btn btn-primary rounded-0 btn-block mt-4" type="submit">Submit new recipe</button>
                                <a class="btn btn-secondary rounded-0 btn-block text-light mt-2" href="/">Cancel</a>
                              </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      <!--main column -->
      </div>
    <!-- main row -->
    </div>

    <!--including the footer -->
    <?php include 'footer.php' ?>