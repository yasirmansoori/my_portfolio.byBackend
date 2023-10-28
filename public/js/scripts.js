// typing animation 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Yasir Mansoori</>", "a Front-end Developer</>", "a Fresher</>", "Gamer</>"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// typing animation end

( function($) {
  'use strict';


	$(window).on('load', function(){



		/*-------------------------------------------------------------------------------
		  Wow.js
		-------------------------------------------------------------------------------*/



		$('.loader').fadeOut(1000);
		var wow = new WOW({
		    offset: 150,          
		    mobile: false
		  }
		);
		
		wow.init();
	});



	/*-------------------------------------------------------------------------------
	   Animsition Loader
	-------------------------------------------------------------------------------*/



	$(".animsition").animsition({
	   inClass: 'fade-in',
       outClass: 'fade-out',
	   inDuration: 1000,
	   outDuration: 700,
	   linkElement: 'a.project-box',
	   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	   loading:true,
	   loadingParentElement: 'body', //animsition wrapper element
	   loadingClass: 'spinner',
	   loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
	   timeout: false,
	   timeoutCountdown:5000,
	   onLoadEvent: true,
	   browser: [ 'animation-duration', '-webkit-animation-duration'],
	   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	   overlay : false,
	   overlayClass : 'animsition-overlay-slide',
	   overlayParentElement : 'body',
	   transition: function(url){ window.location.href = url; }
	});



	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-with-zoom',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/



	$('.navbar-toggle').on('click',function(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});

	$('.close-menu, .click-capture, .menu-list li a').on('click', function(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});

	$('.menu-list li a').on('click', function(){
		$('.menu-list li').removeClass('active');
		$(this).closest('li').addClass('active');

	});


	$('.col-resume').on('mouseover',function(){
		$('.section-bg.mask').addClass('hide');
	});

	$('.col-resume').on('mouseleave', function () {
	  $('.section-bg.mask').removeClass('hide');
	});


	/*-------------------------------------------------------------------------------
	  Owl Carousel
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0){

	   $(".review-carousel").owlCarousel({
			responsive:{
		       0:{
		            items:1
		        },
		        720:{
		            items:1,
		            
		        },
		        1280:{
		            items:1
		        }
		    },
		    responsiveRefreshRate:0,
			nav:false,
			navText:[],

		 	dots:true
		});

	}




	/*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/


	function navbarFullpage(){
	 if ( $('.pp-section.active').scrollTop() > 0 ){
    	$('.navbar-fullpage').addClass('navbar-fixed');
      }
      else{
    	$('.navbar-fullpage').removeClass('navbar-fixed');
     }
    }

    navbarFullpage();

    function navbar(){
    $(window).scroll(function(){
    	if ( $(window).scrollTop() > 0 ){
	    	$('.navbar').addClass('navbar-fixed');
	      }
	      else{
	    	$('.navbar').removeClass('navbar-fixed');
	     }
    });
	 
    }

    navbar();

    if ($('.pagepiling').length > 0){
      	$('.pagepiling').pagepiling({
    		scrollingSpeed: 280,
		    loopBottom:true,
		    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		    afterLoad: function(anchorLink, index){
	           navbarFullpage();
	            
  			}
		});

     }

     $('.pp-scrollable').on('scroll', function () {
    	var scrollTop =$(this).scrollTop();
		if (scrollTop > 0 ) {
			$('.navbar-fullpage').addClass('navbar-fixed');
		}
		else{
			$('.navbar-fullpage').removeClass('navbar-fixed');
		}
	});



	/*------------------------------------------------------------------------------
	   Scroller navigation
	/-------------------------------------------------------------------------------*/



		$('#pp-nav').remove().appendTo('.animsition').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});
 



    /*-------------------------------------------------------------------------------
	  Change bacgkround on project section
	-------------------------------------------------------------------------------*/



    $('.project-row a').on('mouseover',function(){
    	var index = $('.project-row a').index(this)
    	$('.project-row a').removeClass('active');
    	$(this).addClass('active');
    	$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });




	/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/



	if ($('.js-form').length) {
		$('.js-form').each(function(){
			$(this).validate({
				errorClass: 'error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
			            	$('.form-group-message').show();
			            	$('#error').hide();
		                	$('#success').show();
		                },

		                error: function(){
		                	$('.form-group-message').show();
		                	$('#success').hide();
			                $('#error').show();
			            }
			        });
			    }
			});
		});
	}

	
	


})(jQuery);
