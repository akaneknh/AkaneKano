$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').toggleClass('noscroll'); 
  })
  $('.nav-item a').on('click', function() {  
    $('.nav-wrapper').removeClass('fade');
    $('body').removeClass('noscroll'); 
    $('.burger-btn').toggleClass('close');
  });
  });


