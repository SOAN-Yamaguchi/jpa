$(document).ready(function () {
    var hSize = $(window).height();
    $('.c-main-visual').height(hSize);
    if($(window).width() < 767){
      $('.c-main-visual').height(hSize - 60);
    }
  $(window).resize(function(){
    var hSize = $(window).height();
     $('.c-main-visual').height(hSize);
     if($(window).width() < 767){
      $('.c-main-visual').height(hSize - 60);
    }
  });
  $(".c-main-visual__slider")
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').stop().addClass("is-moving");
    })
    .slick({
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2400,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      infinite: true,
      swipe: false,
      dots: true,
      waitForAnimate: false,
      pauseOnDotsHover: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
      responsive: [
        {
            breakpoint: 768,
            settings: {
                autoplaySpeed: 3000,
                speed: 3400,
            }
        }
    ]
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var slide_num = $(".slick-slide", this).length;
      $(
        // [data-slick-index="' + (currentSlide - 1) + '"]
        '.slick-slide[data-slick-index="' + (currentSlide - 1) + '"]'
      ).stop().removeClass("is-moving");
      $('.slick-slide[data-slick-index="' + nextSlide + '"]').stop().addClass(
        "is-moving"
      );
      if (currentSlide == 0) {
        $(
          '.slick-slide[data-slick-index="' + (slide_num - 1) + '"]'
        ).stop().removeClass("is-moving");
      }
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        slidesPerView: 1.2,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        thumbs: {
          swiper: galleryThumbs
        },
        breakpoints: {
            768:{
                slidesPerView: 1,
            }
        }
    });
});
