import $ from 'jquery';
const fancybox = require("@fancyapps/fancybox");
import smoothScroll from 'jquery-smooth-scroll';


//SCROLL TO THE PROJECTS
$(document).ready(function(){
  $(".scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        window.location.hash = hash;
      });
    }
  });
});

//SCROLL TO THE TOP ICON
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $('.scroll-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


//SIDENAV LEFT TOGGLE
if ( $(window).width() > 1024) {
  $(document).ready(function() {
    $('.open-icon').click(function() {
      $('.sidenav-hidden').css({"width":"25%"});
      $('.main').css({"margin-left":"25%"});
    });
  });
  } else {
  $(document).ready(function() {
    $('.open-icon').click(function() {
      $('.sidenav-hidden').css({"width":"100%"});
      $('.main').css({"margin-left":"100%"});
      });
    });
  }

$(document).ready(function() {
  $('.close-icon').click(function() {
    $('.sidenav-hidden').css({"width":"0"});
    $('.main').css({"margin-left":"0"});
  });
});



//ICON DISPLAY ON HOVER
$(document).ready(function() {
  $('.project').mouseenter(function() {
    $(this).find('.project__play').css({'visibility':'visible'});
    $(this).find('.project__description').css({'background-color':'black'});
  });
  $('.project').mouseleave(function() {
    $(this).find('.project__play').css({'visibility':'hidden'});
    $(this).find('.project__description').css({'background-color':'transparent'});
  });
});


//FANCYBOX 
$('[data-fancybox]').fancybox({
  backFocus: true,
   helpers: {
    overlay: {
      locked: false
    }
  },
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00',
        autoplay: 0
    },
});

// //FANCYBOX 
// $('[data-fancybox]').fancybox({
//   backFocus: true,
//    helpers: {
//     overlay: {
//       locked: false
//     }
//   },
//     youtube : {
//         controls : 0,
//         showinfo : 0
//     },
//     vimeo : {
//         color : 'f00',
//         autoplay: 0
//     },
//     beforeShow: function() {
//       $("html, body").animate({ scrollTop: 0 }, 300);
//     },
// });
