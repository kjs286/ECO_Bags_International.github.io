// Banner Image

$('.single-item').slick();



// Slick Slider

$('.responsive').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });





// Cstm Testimonial

  $('.all-cstm-testimonial').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });










  



  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }



  // Effects


  AOS.init();


















  tabControl();

  /*
  We also apply the switch when a viewport change is detected on the fly
  (e.g. when you resize the browser window or flip your device from 
  portrait mode to landscape). We set a timer with a small delay to run 
  it only once when the resizing ends. It's not perfect, but it's better
  than have it running constantly during the action of resizing.
  */
  var resizeTimer;
  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      tabControl();
    }, 250);
  });
  
  /*
  The function below is responsible for switching the tabs when clicked.
  It switches both the tabs and the accordion buttons even if 
  only the one or the other can be visible on a screen. We prefer
  that in order to have a consistent selection in case the viewport
  changes (e.g. when you esize the browser window or flip your 
  device from portrait mode to landscape).
  */
  function tabControl() {
    var tabs = $('.tabbed-content').find('.tabs');
    if(tabs.is(':visible')) {
      tabs.find('a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href'),
            tabs = $(this).parents('.tabs'),
            buttons = tabs.find('a'),
            item = tabs.parents('.tabbed-content').find('.item');
        buttons.removeClass('active');
        item.removeClass('active');
        $(this).addClass('active');
        $(target).addClass('active');
      });
    } else {
      $('.item').on('click', function() {
        var container = $(this).parents('.tabbed-content'),
            currId = $(this).attr('id'),
            items = container.find('.item');
        container.find('.tabs a').removeClass('active');
        items.removeClass('active');
        $(this).addClass('active');
        container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
      });
    } 
  }





// Sticky Header


  $(window).scroll(function () {

    var sticky = $(".cstm-head"),

        scroll = $(window).scrollTop();



    if (scroll >= 100) {

        sticky.addClass("cstm-stick-nav");

    } else {

        sticky.removeClass("cstm-stick-nav");

    }

});
























  


  

  

