$(document).ready(function () {
  $(".join").on("mouseenter", function () {
    $(".animated_lights").animate({ opacity: 1 }, { duration: 1000 });
  });
  $(".join").on("mouseleave", function () {
    $(".animated_lights").animate({ opacity: 0 }, { duration: 1000 });
  });
  $(".scroll_to_bottom").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
});
