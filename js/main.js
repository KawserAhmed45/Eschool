$(document) .ready(function (){

  //Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  // counter up js

  jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

});