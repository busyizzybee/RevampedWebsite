
$(document).ready(function(){

    $('.header').height($(window).height());
  
  })

  $('.carousel').carousel({
    interval: 2000
  })

  $('#myModal').modal('show');

  $(window).scroll(function(){
    $('navbar').toggleClass('scrolled', $(this).scrollTop() > 500);
    });

    $('.carousel').on('touchstart', function(event){
      const xClick = event.originalEvent.touches[0].pageX;
      $(this).one('touchmove', function(event){
          const xMove = event.originalEvent.touches[0].pageX;
          const sensitivityInPx = 5;
  
          if( Math.floor(xClick - xMove) > sensitivityInPx ){
              $(this).carousel('next');
          }
          else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
              $(this).carousel('prev');
          }
      });
      $(this).on('touchend', function(){
          $(this).off('touchmove');
      });
  });