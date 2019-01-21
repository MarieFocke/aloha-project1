

$(".products-carousel").flickity({
  contain: true,
  percentPosition: false,
  imagesLoaded: true,
  cellAlign: "left",
  autoplay: true,
  contain: true,
});

$(".submit").on("click", function() {
  //http://www.jquerybyexample.net/2011/04/validate-email-address-using-jquery.html

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
