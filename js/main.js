$(function() {
  "use strict";
  // var winh = $(window).height();
  var winh =750;
  var uph = $(".upper-bar").innerHeight();
  var navh = $(".navbar").innerHeight();
  $(".slider,.carousel-item").height(winh - (uph + navh));
  /**Shuffle Code For Featured-WOrk */
  $(".featured-work ul li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-images .col-md").css("opacity", 1);
    } else {
      $(".shuffle-images .col-md").css("opacity", ".08");
      $($(this).data("class"))
        .parent()
        .css("opacity", 1);
    }
  });
});
