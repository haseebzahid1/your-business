$(document).ready(function(){
    $(".counter-2").counterUp({
        delay:10,
        time:1200,
      });
    });

$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 250) { // Set position from top to add class
        $('header').addClass('header-appear');
    }
    else {
        $('header').removeClass('header-appear');
    }
});

function toggle(){
    var trailer = document.querySelector(".trailer")
    trailer.classList.toggle("active")
}


$('.gallery-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    // responsiveClass:true,
    nav:false,
    dots:false,
    // center:false,
    autoplay:true,
    autoplayHoverPause:true,
    slideSpeed: 3000,
    paginationSpeed: 5000,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
       
        768:{
            items:4,
            nav:true,
        },
        1900:{
            items:5,
            nav:true,
        }
        
    }
  })
