<!-- FOOTER.PHP FILE --> 
<!-- Footer -->
<footer class="page-footer font-small teal pt-4">

  <!-- Footer Text -->
  <div class="container text-center text-md-left py-3">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-6 mt-md-0 mt-3">

        <!-- Content -->
        <h5 class="text-uppercase footer-title">A JS personal Project</h5>
        <p>
          Welcome to this personal project developed with a few advanced JavaScript concepts.
          It's purpose is to give a demonstration of my familiarity with the language and its 
          more complex implementations. </br> The code is also available on GitHub, and you are more than welcome
          to have a look at it, just <a href="https://github.com/tommydemarco" target="_blank">visit my profile</a>.
        </p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none pb-3">

      <!-- Grid column -->
      <div class="col-md-6 mb-md-0 mb-3">

        <!-- Content -->
        <h5 class="text-uppercase footer-title">How does it work?</h5>
        <p>
          The functioning of the test depends on the loading of a JSON file 
          for the specific quiz that contains the question body and answers and other relevant information 
          for the functioning of the test. </br> All these questions are handled as objects and the answers given
          by the user are passed to the object as a property, later used to calculate the score. 
        </p>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Text -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">Personal project by 
    <a href="../index.php">Tommaso De Marco</a>
    <div style="padding-top:8px">
        <a href="../cookie-policy.php">Cookie Policy</a>
        <a href="../privacy-policy.php">Privacy Policy</a>
    </div>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
 
    <!-- JS files -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="./js/main.js"></script>

    <!-- quiz related JS -->
    <script src="./js/string-utilities.js"></script>
    <script src="./js/dom-utilities.js"></script>
    <script src="./js/general-utilities.js"></script>
    <script src="./js/quiz-main.js"></script>

</body>
</html>