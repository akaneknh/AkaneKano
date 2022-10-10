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

// Scrool Action
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.aboutme-wrap, .featured-work, .area-1-wrap, .area-3-child-wrap').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});