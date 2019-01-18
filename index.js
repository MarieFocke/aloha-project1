jQuery("nav.main-navigation li").css("color", "grey");

$("form").on("click", "button", function() {
  alert("Thanks for subscribing!");
  $(".email").val("");
});

$('.products-carousel').flickity({
  contain: true,
  percentPosition: false,
  imagesLoaded: true,
  cellAlign: 'left',
  autoplay: true,
  contain: true,
});

$(function() {
  $('.main-navigation a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});