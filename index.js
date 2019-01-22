
//flickity carousel
$(".products-carousel").flickity({
  contain: true,
  percentPosition: false,
  imagesLoaded: true,
  cellAlign: "left",
  autoplay: true,
  contain: true,

});
//email validation
//http://www.jquerybyexample.net/2011/04/validate-email-address-using-jquery.html
$(".submit").on("click", function() {
  function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    console.log(filter.test(sEmail));
    if (filter.test(sEmail)) {
      return true;
    } else {
      return false;
    }
  }
  const sEmail = $(".email").val();

  if (validateEmail(sEmail)) {
    alert("Thanks for Subscribing!");
  } else {
    alert("Invalid Email");
  }
});
// slow scrolling 
// @https://css-tricks.com/smooth-scrolling-accessibility/?fbclid=IwAR22bfph2OHFy1gNFR-YpFwYLfnDyUht_8O0oLbcM6dtfrdQWgyPpSaoS1I
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
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

