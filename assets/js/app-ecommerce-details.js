//  File Name: app-ecommerce-details.js
//  Description: App Ecommerce Details js.
// ============================================================================
$(document).ready(function () {
  var mySwiper14 = new Swiper('.swiper-responsive-breakpoints', {
    slidesPerView: 1,
    spaceBetween: 55,
    // init: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1300: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 55,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }
  });
  // product color options
  $(".product-color-options li").on("click", function () {
    $this = $(this);
    $this.addClass('selected').siblings().removeClass('selected');
  })
})

// for tab content js start //
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
	
// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
// for tabcontent js start //