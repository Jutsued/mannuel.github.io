document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mailto_link = `mailto:pabloa.bonilla1@gmail.com?subject=Electrician Services Contact&body=${message}`;

    window.location.href = mailto_link;
  });


  $(document).ready(function() {
        $('.navbar-nav .nav-link').on('click', function() {
          $('.navbar-collapse').collapse('hide');
        });
      });