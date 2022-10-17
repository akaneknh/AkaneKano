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

    $('.design-skill, .webdev-skill, .work, .reason-card, .experience-card').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});


