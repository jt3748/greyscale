$( document ).on('turbolinks:load', function() {





    // animate nav dropdown
      $('.nav-a-drop, .nav-div-drop, .nav-li-drop').hover(
         function(){
           $('.nav-a-drop').attr('aria-expanded', 'true');
           $('.nav-li-drop').addClass('show');
           $('.nav-div-drop').addClass('show');
          },
         function(){
           $('.nav-a-drop').attr('aria-expanded', 'false');
           $('.nav-li-drop').removeClass('show');
           $('.nav-div-drop').removeClass('show');
          }
       );


//smooth scroll menu items
// Add smooth scrolling to all links
  $(".dropdown-item").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

//toggle about-navbarDropdown
  $('#about-dropdown-btn').click(function() {
    $('#about-dropdown-div').toggleClass('open');
  });


});
