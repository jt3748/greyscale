

$( document ).on('turbolinks:load', function() {
console.log('script.js is working')
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

       !function(e) {}

// smooth scroll menu items
// Add smooth scrolling to all links
  $(".scroll").on('click', function(event) {

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
      }, 1e3, "easeInOutExpo", function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

//toggle about-navbarDropdown
  $('#about-dropdown-btn').click(function() {
    $('#about-dropdown-div').toggleClass('open');
  });

  /*!
   * Start Bootstrap - Grayscale v5.0.5 (https://startbootstrap.com/template-overviews/grayscale)
   * Copyright 2013-2019 Start Bootstrap
   * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
   */

  // !function(e) {
  //     "use strict";
  //     e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //         if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
  //             var a = e(this.hash);
  //             if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
  //                 return e("html, body").animate({
  //                     scrollTop: a.offset().top - 70
  //                 }, 1e3, "easeInOutExpo", function(){
  //                   window.location.hash = e(this.hash);
  //
  //                 }),
  //                 !1
  //         }
  //     }),
  //     e(".js-scroll-trigger").click(function() {
  //         e(".navbar-collapse").collapse("hide")
  //     }),
  //     e("body").scrollspy({
  //         target: "#mainNav",
  //         offset: 100
  //     });
  //     var a = function() {
  //         100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
  //     };
  //     a(),
  //     e(window).scroll(a)
  // }(jQuery);

});
