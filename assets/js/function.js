(function($){
	'use strict';

     // read more text view
	 $(document).ready(function() {
        $(".read").click(function() {
            $(this).prev().toggle();
            $(this).siblings('.dots').
            toggle();
            if($(this).text()=='View'){
                $(this).text('Viewed');
            }
            else {
                $(this).text('View'); 
            }
        });
    });

    // all categoris button toggle
    $(document).on('click','.collapse_toggle',function(){
        $(".drop-relative").toggleClass("show")
    });

     //menu side bar
     $('.menu-bar').on('click', function(){
        $('body,header,.menu-bar,.menu-items,.overlay').addClass('active');
    });

    $('.crose-bar').on('click', function(){
        $('body,header,.menu-bar,.menu-items,.overlay').removeClass('active');
    });

    $('.overlay').on('click', function(){
        $('body,header,.menu-bar,.menu-items,.overlay').removeClass('active');
    })

    // notification bar
    $('.notif-icon').on('click' , function(){
        $('body,header,.notif-icon,.overlays,.notification').addClass('active');
    });

    $('.close-mobile').on('click', function(){
        $('body,header,.notif-icon,.overlays,.notification').removeClass('active');
    });

    $('.overlays').on('click', function(){
        $('body,header,.notif-icon,.notification,.overlays').removeClass('active');
    })

    // menu icon-related
    $(".list-item>li>.m-submenu").parent("li").children("a").addClass("icon-down");

    //mobile drodown menu display
	$('.menu-list ul.list-item li a').on('click', function(e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(500,"swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(500,"swing");
            element.siblings('li').children('ul').slideUp(500,"swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(500,"swing");
        }
	}); 


    // drop down menu width overflow problem fix
    $('ul').parent().on('hover', function() {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });    
        }
    });
    
    // mouse hover event
    $('.list-menu ul li').hover(function() {
        $(this).children('.mega-menu').stop(true, false, true).fadeToggle(300);
    });

  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY){
    this.width = ( width <= height ) ? height : width;
    this.height = ( width <= height ) ? height : width;
    this.top = posY - (this.height * 0.5);
    this.left = posX - (this.width * 0.5);
  }
  $('.btn').on('mousedown', function(e){
    //appending an element with a class name "btn-ripple"
    var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
    $(this).remove();
  });

    //banner-slider activation
    var swiper = new Swiper('.banner-slider', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    // trending products slider
    var swiper = new Swiper('.trending-slider', {
        slidesPerView: 6,
        spaceBetween: 10,
        autoplay: true,
        navigation: {
            nextEl: '.trending-button-next',
            prevEl: '.trending-button-prev',
        },
        breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
            320: {
                slidesPerView: 1,
            }
		},
    });


    // offered products slider
    var swiper = new Swiper('.offered-slider', {
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: true,
        navigation: {
            nextEl: '.offered-button-next',
            prevEl: '.offered-button-prev',
        },
        breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 1,
			}
		},
    });

    // offered products slider
    var swiper = new Swiper('.categori-slieder', {
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: true,
        navigation: {
            nextEl: '.categories-button-next',
            prevEl: '.categories-button-prev',
        },
        breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			}
		},
    });
  
	// scroll up start here
	$(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > 300) {
				$('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
			} else {
				$('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'})
			}
		});
		//Click event to scroll to top
		$('.scrollToTop').on('click', function(){
			$('html, body').animate({scrollTop : 0},500);
			return false;
		});
    });



  // shop cart + - start here
  var CartPlusMinus = $('.cart-plus-minus');
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 1;
          }
      }
      $button.parent().find("input").val(newVal);
  });



  // product view mode change js
  $('.product-view-mode').on('click', 'a', function (e) {
      e.preventDefault();
      var shopProductWrap = $('.shop-product-wrap');
      var viewMode = $(this).data('target');
      $('.product-view-mode a').removeClass('active');
      $(this).addClass('active');
      shopProductWrap.removeClass('grid list').addClass(viewMode);
  });



  // model option start here
  $('.view-modal').on('click', function () {
      $('.modal').addClass('show');
  });

  $('.close').on('click', function () {
      $('.modal').removeClass('show');
  });

  // model option start here
  $(function() {
    $('.cart-modul').on('click', function () {
        $('.modul').addClass('show');
    });
    $('.close').on('click', function () {
        $('.modul').removeClass('show');
    });
});

// modal 3 option start hear
$(function(){
    $('.view-password').on('click', function () {
        $('.modal_2').addClass('show');
    });
    $('.close').on('click', function () {
        $('.modal_2').removeClass('show');
    });
})
 // modal 4 option start hear
 $(function(){
    $('.order-modal').on('click', function () {
        $('.modal_3').addClass('show');
    });
    $('.close').on('click', function () {
        $('.modal_3').removeClass('show');
    });
})
    

})(jQuery);

 // book mark api alert
 function myFunction() {
    window.alert("you browser don't support this feature.");
}

// clipboard notif
function copyToClipboard(element) {
	document.getElementById("angle").onclick = function (copyToClipboard) {
		document.getElementById("text_change").innerHTML = "Copied" ;
	};
	document.getElementById("anglex").onclick = function (copyToClipboard) {
		document.getElementById("text_changex").innerHTML = "Copied" ;
	};
	document.getElementById("jon").onclick = function (copyToClipboard) {
		document.getElementById("text_jon").innerHTML = "Copied" ;
	};
	document.getElementById("roks").onclick = function (copyToClipboard) {
		document.getElementById("roks_text").innerHTML = "Copied" ;
	};
}


