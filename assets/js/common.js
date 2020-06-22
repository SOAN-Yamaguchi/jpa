$(document).ready(function(){

    $(".img-bg").each(function () {
        imgUrl = $(this).find("img").prop("src");
        $('.img-bg img').hide();
        if (imgUrl) {
            $(this).css("backgroundImage", 'url(' + imgUrl + ')');
        }
    });
    //menu
    const header = $('.c-header');
    const ham = $('header .c-toggle--open');
    const hamClose = $('header .c-toggle--close');
    const menu = $('header .c-nav ul.sub-menu');
    //Hamburger Function
    ham.click(function() {
        header.toggleClass('bg');
        menu.toggleClass('show');
        hamClose.show();
        $(this).toggleClass('open');
        $('body').toggleClass('isOverflow');
        disableScrolling();
    });
    hamClose.click(function() {
        header.removeClass('bg');
        ham.removeClass('open');
        $(this).hide();
        menu.removeClass('show');
        $('body').removeClass('isOverflow');
        recoverScrolling();
    });
    $(window).resize(function() {
        if ($(window).width() >767) {
            recoverScrolling();
        }
    });
    function clickAccordion(){
        $(".icon-sub > a").click(function () {
            if($(window).width() < 767){
                event.preventDefault();
                $(this).next().slideToggle();
                $(this).parent('.icon-sub').find('.child_menu_button').toggleClass('child_menu_button--close');
            }
        });
    };

    clickAccordion();
    $('.c-header .icon-sub').prepend("<span class='child_menu_button'><span class='icon'></span></span>");
    //menu add background
    $(window).scroll(function() {
        const scroll  = $(window).scrollTop();
        const heightMain = $('.c-main-visual').height();
        if(scroll > heightMain){
            $('.c-header').addClass('isActive');
        }
        else{
            $('.c-header').removeClass('isActive');
        }
    });
    function disableScrolling() {
        $('body').stop().css({ 'top': $(window).scrollTop() * -1, 'position': 'fixed', 'width': '100%', 'padding-right': getScrollbarWidth() });
      }
      function recoverScrolling() {
        const scrollY = $('body').css('top');
        $('body').stop().css({ 'top': '', 'position': '', 'width': '', 'padding-right': '' })
        $(window).scrollTop(parseInt(scrollY || '0') * -1)
      }
    function getScrollbarWidth() {
        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);
        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);
        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);
        return scrollbarWidth;
    }

    //Smooth scroll to div id
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 500, 'linear');
    });

    //back-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
          $('.c-back-to-top').show();
        } else {
          $('.c-back-to-top').hide();
        }
      });
      $('.c-back-to-top').click(function() {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
        return false;
    });
});

