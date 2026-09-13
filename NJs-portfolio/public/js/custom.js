(function ($) {
  "use strict";

  $(document).ready(function () {
    // PRE LOADER
    $(window).on("load", function () {
      $(".preloader").fadeOut(1000);
    });

    //Navigation Section
    $(".navbar-collapse a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    // Owl Carousel
    if ($(".owl-carousel").length && $.fn.owlCarousel) {
      $(".owl-carousel").owlCarousel({
        animateOut: "fadeOut",
        items: 1,
        loop: true,
        autoplay: true,
      });
    }

    // PARALLAX EFFECT
    if ($.stellar) {
      $.stellar();
    }

    // SMOOTHSCROLL
    $(".navbar-default a, #home a, footer a").on("click", function (event) {
      var $anchor = $(this);
      var target = $($anchor.attr("href"));
      if (target.length) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 49,
            },
            1000,
          );
      }
      event.preventDefault();
    });

    // WOW ANIMATION
    if (window.WOW) {
      new WOW({ mobile: false }).init();
    }
  });
})(jQuery);
