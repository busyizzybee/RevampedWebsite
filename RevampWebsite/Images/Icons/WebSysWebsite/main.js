
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