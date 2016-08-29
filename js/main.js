//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }

    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            
        })
    }
  }(jQuery));



  $(document).ready(function(){
        $('#questions').find('.questions__item').click(function(){
            $(this).closest('.questions__item').toggleClass('open');
            $(this).find('.questions__answer').stop(true,true).slideToggle();
        })
        jQuery("a.scrollto").click(function () {
            elementClick = jQuery(this).attr("href")
            destination = jQuery(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
        });

    $('.services__navigation-item').on('mouseover', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        serviceChange(this);
    });


    function serviceChange (e){
      var serviceName = $(e).attr('id');
      $(e).closest('.services__menu').find('.js-'+serviceName+'').addClass('active').siblings().removeClass('active');
      // console.log($(e).closest('.services__menu').find('.js-'+serviceName+'').hide());
      console.log(serviceName);
    }
    // popup callback
    var popup = {
        overlay: $('.popup__overlay'),
        form: $('.popup__callback'),
        close: $('.popup__close'),
        init: function(){
            this.listeners();
        },
        listeners: function(){
            this.overlay.on('click', this.hide);
            this.close.on('click', this.hide);
        },
        show: function(){
            console.log('Открытие');
            $('.popup__overlay').fadeIn(300);
            $('.popup__callback').fadeIn(300);
            return false;
        },
        hide: function(){
            console.log('Закрытие');
            $('.popup__overlay').fadeOut(300);
            $('.popup__callback').fadeOut(300);
            return false;
        }
    }
    popup.init();

    $('.main-header__callback').on('click', popup.show);

    //fixed menu
    var fixedMenu = {
        selector: $('#fixedMenu'),
        start: $('#fixedMenu').offset().top,
        init: function(){
            this.listeners();
            console.log('init');
        },
        listeners: function(){
            console.log('listeners');
            $(window).on('scroll', this.startWatch);
            $(document).on('ready', this.startWatch);
        },
        startWatch: function(){
            if($(window).scrollTop() >= fixedMenu.start){
                $(fixedMenu.selector).addClass('fixed');
            }else{
                $(fixedMenu.selector).removeClass('fixed');
            }

            if($(window).scrollTop() + $(window).height() == $(document).height()){
                $(fixedMenu.selector).removeClass('fixed');
            }
            console.log($(window).scrollTop() >= fixedMenu.start);
            console.log($(window).scrollTop(), fixedMenu.start);
        }
    }
    fixedMenu.init();
  })

$(window).load(function(){
      $('#sertifCarousel').owlCarousel({
        items: 5,
        slideBy: 5,
        margin: 105
      })
    $('.page__sertif .owl-dots').css('margin-left', '-' + ($('.page__sertif .owl-dots').width()/2) + 'px');
    $('.ymaps-image-with-content').append($('.map__balloon.ballon'));
})

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.816159568916196,37.600083999999976],
            zoom: 15,
            behaviors: ['default','scrollZoom']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([55.812360459596185,37.58746616400144]);
            myPlacemark.events.add('click', function () {
            $('.ballon').fadeToggle();
        });

    myMap.geoObjects.add(myPlacemark);
}




