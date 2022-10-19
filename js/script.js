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

    $('.design-skill, .webdev-skill, .work, .other-side-content, .reason-card, .experience-card').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});





// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
  $('.TextTyping').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function (i) {
        var time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".TextTyping");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split('').forEach(function (t) {
      if (t !== " ") {
        textbox += '<span>' + t + '</span>';
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);

  });

  TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
