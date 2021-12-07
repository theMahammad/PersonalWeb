$(document).ready(function() {
  "use strict";



    $(window).on('load', function () {
        $("body").addClass('loaded');
    });

    var projectIsotope = $('.project-container').isotope({
        itemSelector: '.project-grid-item'
    });

    $('#project-flters li').on('click', function () {
        $("#project-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        projectIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

    $('.popup-img').on('click', function () {
        var id = $(this).attr('href');
        $('.project-item-wrap').addClass('active');
        $(id).fadeIn().addClass('active');
        return false;
    });

    $('.project-close-bttn').on('click', function () {
        $('.project-item-wrap').removeClass('active');
        $('.item-brief').fadeOut().removeClass('active');
        return false;
    });

    
    
    PageScroll();

    
    $('.menu-bttn').on('click', function() {
        $(this).toggleClass('open');
        $('.menu-nav').toggleClass('open');
        return false; 
    });

    

    $('.menu-icon').on('click', function() {
        $(this).toggleClass('open');
        $('.menu-navi').toggleClass('open');
        return false;
    });

    $('.nav-menu li a').on('click', function() {

        var width = $(window).width();
        
        if(!$(this).hasClass('active') ) {



            $('.nav-menu li a').removeClass('active');   
            $(this).addClass('active');
            $('.header-wrapper').addClass('active-wrap');

            $('.page-transition').addClass('animate-Out');
            $('.page').removeClass('active page-transition');
            var menu_data = $(this).attr('data-menu');
            $('#'+menu_data).addClass('active page-transition');
            $('.overlay-color,.animate-in').addClass('active');
            
            setTimeout(function() {
                $('.page').removeClass('animate-Out');
                if(menu_data === 'home') {$('.header-wrapper,.footer-wrapper').removeClass('overlap');} else {$('.header-wrapper,.footer-wrapper').addClass('overlap');}                
            }, 1000);
            setTimeout(function() {
                $('.overlay-color').css('z-index',1).addClass('trans-remove').removeClass("active");
            }, 1400);
            setTimeout(function() {

                $('.overlay-color').removeClass("trans-remove");
                $('.overlay-color-1').css('z-index',100);
                $('.overlay-color-2').css('z-index',101);
                $('.overlay-color-3').css('z-index',102);
                
            }, 1500);
            setTimeout(function() {$('.header-wrapper').removeClass('active-wrap');}, 2400);
        }
        return false;
    });

    
    $('.menu-navi').on('click', 'a', function(){
        var menu_items = $('.menu-navi li');
        var menu_item = $(this).closest('li');
        menu_items.removeClass('active');
        menu_item.addClass('active');

    });
    
    $('.menu-data').on('click', 'a', function(){


        var container = $('.content-wrapper');
        var card_items = $('.card-inner');
        var animation_in = container.data('animation-in');
        var animation_out = container.data('animation-out');
        
        

        /* vars */
        var width = $(window).width();
        var id = $(this).attr('href');
        var h = parseFloat($(id).offset().top);
        var card_item = $(id);
        var menu_items = $('.menu-data li');
        var menu_length = $(this).parent('li').index() + parseFloat(1);
        $('.shape-wrap').removeClass('pos1 pos2 pos3 pos4 pos5 pos6 ');
        $('.shape-wrap').addClass('pos'+menu_length)
         
        var menu_item = $(this).closest('li');
        var d_lnk = $('.lnks .lnk.discover');

        if((width >= 769)) {
            
            /* if desktop */
            if(!menu_item.hasClass('active') & (width > 769) ) {

                
                /* close card items */
                menu_items.removeClass('active');
                container.find(card_items).removeClass('animated '+animation_in);

                if($(container).hasClass('opened')) {
                    container.find(card_items).addClass('animated '+animation_out);
                }

                /* open card item */
                menu_item.addClass('active');
                container.addClass('opened');
                container.find(card_item).removeClass('animated '+animation_out);
                container.find(card_item).addClass('animated '+animation_in);
                
                $(card_items).addClass('hidden');
                
                $(card_item).removeClass('hidden');
                $(card_item).addClass('active');
            }
        } else {
            menu_items.removeClass('active');
            menu_item.addClass('active');
            container.find(card_items).removeClass('active');
            container.find(card_item).addClass('active');
        }
        return false;
    });

    $('.main-navclose li a').on('click', function() {
        var width = $(window).width();
        if(width < 581) {
            $('.menu-bttn').removeClass('open');
            $('.menu-nav').removeClass('open');
        }
        return false; 
    });

    





    $('.text-animation').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,  
        dots:false,
        items:1,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed:450
    })

    $('.feedback-slider').owlCarousel({
        loop:true,
        margin:35,
        nav:false,
        autoplay:true,  
        dots:false,
        items:1,
        smartSpeed:450
    })



   
    

    $('.member-bttn2').on('click', function() {
        $('.member-1').fadeOut(0);
        $('.member-2').fadeIn();
        $('.member-ul').find('li:nth-child(2)').addClass('active');
        return false;
    });


    $('.switchcolor').on('click', function() {
        $(this).addClass('active');
        $('.backdrop').addClass('active');
        $('.switchcolor-wrap').addClass('active'); 
    });

    $('.sheet-close,.backdrop').on('click', function() {
        $('.switchcolor').removeClass('active');
        $('.backdrop').removeClass('active');
        $('.switchcolor-wrap').removeClass('active'); 
    });

    $('.toggle input').on('change', function () {
        if (this.checked) {
            $('body').addClass('theme-dark');
        } else {
            $('body').removeClass('theme-dark');
        }
    });

    $('input[name="color-radio"]').on('change', function () {
        if (this.checked) {
          $('body').removeClass('color-theme-pink color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid');
          $('body').addClass('color-theme-' + $(this).val());
        }
    });

    $('input[name="layout-radio"]').on('change', function () {
        if (this.checked) {
            $('.layout-style').fadeOut();
            $('#layout-' + $(this).val()).fadeIn();
            $('body').removeClass('layout-style1 layout-style2 layout-style3 layout-style4');
            $('body').addClass('layout-' + $(this).val());
        }
    });

    $('input[name="animation-radio"]').on('change', function () {
        if (this.checked) {
          $('body').removeClass('animation1 animation2 animation3 animation4 animation5 animation6 animation7 animation8 animation9 animation10');
          $('body').addClass($(this).val());
          $('.overlay-color').fadeOut(0);
          setTimeout(function() {$('.overlay-color').fadeIn(0); }, 1000);
        }
    });

    nicescroll();
  
});


function mapinitialize() {
    var latlng = new google.maps.LatLng(40.7128,-74.0060);
    var myOptions = {
        zoom: 15,
        center: latlng,
        scrollwheel: false,
        scaleControl: false,
        disableDefaultUI: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Google Map Color Styles
        styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
         
    };
    var map = new google.maps.Map(document.getElementById("map"),myOptions);
    
    var image = "images/marker.png";
    var image = new google.maps.MarkerImage("images/marker.png", null, null, null, new google.maps.Size(50,50));
    var marker = new google.maps.Marker({
        map: map, 
        icon: image,
        position: map.getCenter()
    });
    
    var contentString = '<b>Office</b><br>Streetname 13<br>50001 Sydney';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
                
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
}

mapinitialize();


function PageScroll() {
   $(".scroll-tiger").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        $('.overlay-section').removeClass('active'); 
        e.preventDefault();

    });
}

function nicescroll() {
    $(".scorll-overlays").niceScroll({
    cursorcolor: "#555", // change cursor color in hex
    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
    cursorwidth: "3px", // cursor width in pixel (you can also write "5px")
    cursorborder: "0px solid #555", // css definition for cursor border
    cursorborderradius: "5px", // border radius in pixel for cursor
    zindex: "auto", // change z-index for scrollbar div
    scrollspeed: 60, // scrolling speed
    mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
    touchbehavior: true, // enable cursor-drag scrolling like touch devices in desktop computer
    hwacceleration: true, // use hardware accelerated scroll when supported
    boxzoom: false, // enable zoom for box content
    dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
    gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
    grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
    autohidemode: true, // how hide the scrollbar works, possible values: 
    background: "", // change css for rail background
    iframeautoresize: true, // autoresize iframe on load event
    cursorminheight: 32, // set the minimum cursor height (pixel)
    preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
    railoffset: false, // you can add offset top/left for rail position
    bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
    spacebarenabled: true, // enable page down scrolling when space bar has pressed
    disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
    horizrailenabled: true, // nicescroll can manage horizontal scroll
    railalign: "right", // alignment of vertical rail
    railvalign: "bottom", // alignment of horizontal rail
    enabletranslate3d: true, // nicescroll can use css translate to scroll content
    enablemousewheel: true, // nicescroll can manage mouse wheel events
    enablekeyboard: true, // nicescroll can manage keyboard events
    smoothscroll: true, // scroll with ease movement
    sensitiverail: true, // click on rail make a scroll
    enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
    cursorfixedheight: false, // set fixed height for cursor in pixel
    hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
    irectionlockdeadzone: 6, // dead zone in pixels for direction lock activation
    nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
    enablescrollonselection: true, // enable auto-scrolling of content when selection text
    cursordragspeed: 0.3, // speed of selection when dragged with cursor
    rtlmode: "auto", // horizontal div scrolling starts at left side
    cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
    oneaxismousemode: "auto", 
    scriptpath: "", // define custom path for boxmode icons ("" => same script path)
    preventmultitouchscrolling: true,// prevent scrolling on multitouch events
    disablemutationobserver: false,
  });
}
