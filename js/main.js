$(function () {
/*=================================================
ハンバーガ―メニュー
===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle_btn").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".header-list-sub a").on("click", function () {
    $(".toggle_btn").removeClass("open");
    $(".accordion").toggleClass("open");
  });

/*=================================================
PICK UP スライダー
===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  // match部分
$(".match-list").slick({
    // 矢印ナビゲーションの有無
    arrows: true,
    // 矢印の位置調整
    prevArrow: '<button type="button" class="slide-arrow prev-arrow"><span class="slide-arrow__arrow prev-arrow__arrow"></span></button>',
    nextArrow: '<button type="button" class="slide-arrow next-arrow"><span class="slide-arrow__arrow next-arrow__arrow"></span></button>',
    // 画像をcenterに置くか否か
    centerMode: true,
    // 端に少し見える画像の幅
    centerPadding: "20%",
    // 画像を100％見せる枚数
    slidesToShow: 1,
    // 選択するとセンターに移動する
    focusOnSelect: true,
    responsive: [
      {
        // 切り替わる幅（＠mediaに合わせる）
        breakpoint: 1049,
        // レスポンシブで変更する部分
        settings: {
          centerPadding: "0",
        },
      },
      {
        // 切り替わる幅（＠mediaに合わせる）
        breakpoint: 630,
        // レスポンシブで変更する部分
        settings: {
          centerPadding: "0",
        },
      },
    ],
});

  // player部分
  $(".player-box").slick({
    // 矢印ナビゲーションの有無
    arrows: true,
    // 矢印の位置調整
    prevArrow: '<button type="button" class="slide-arrow-player prev-arrow-player"><span class="slide-arrow__arrow-player prev-arrow__arrow-player"></span></button>',
    nextArrow: '<button type="button" class="slide-arrow-player next-arrow-player"><span class="slide-arrow__arrow-player next-arrow__arrow-player"></span></button>',
    // 画像をcenterに置くか否か
    centerMode: true,
    // 端に少し見える画像の幅
    centerPadding: "40px",
    // 画像を100％見せる枚数
    slidesToShow: 3,
    // 選択するとセンターに移動する
    focusOnSelect: true,
    // 自動で画像が切り替わるか否か
    autoplay: true,
    // 切り替わる時間
    autoplaySpeed: 10000,
    // 無限ループ
    infinite: true,
    // レスポンシブ↓
    responsive: [
      {
        // 切り替わる幅（＠mediaに合わせる）
        breakpoint: 1049,
        // レスポンシブで変更する部分
        settings: {
          centerPadding: "30px",
          slidesToShow: 2,
        },
      },
      {
        // 切り替わる幅（＠mediaに合わせる）
        breakpoint: 630,
        // レスポンシブで変更する部分
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });
/*=================================================
スムーススクロール
===================================================*/
// ページ内のリンクをクリックした時に動作する
$('a[href^="#"]').click(function () {
  // クリックしたaタグのリンクを取得
  let href = $(this).attr("href");
  // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
  // 始めの条件が「aタグのhref属性で値が#で始まる要素だったとき」なのに、「href == ""」を入れるのはなぜ？
  // A.基本必要ないが、記載するのがセオリー
  let target = $(href == "#" || href == "" ? "html" : href);
  // ページトップからジャンプ先の要素までの距離を取得
  let position = target.offset().top-80;
  // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
  // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
  $("html, body").animate({ scrollTop: position }, 600, "swing");
  // urlが変化しないようにfalseを返す
  return false;
});
});
