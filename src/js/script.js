// グローバルナビゲーションの開閉
$(function () {
  $('#js-gnav-btn').on('click', function () {
    $('html').toggleClass('is-open-gnav');
  });
});





// Swiper・キービジュアル

var swiper = new Swiper('.swiper-keyvisual', {
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 5000,
    // disableOnInteraction: false
  },
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




// Swiper・動物

var swiper = new Swiper('.swiper-animal', {
  loop: true,
  speed: 600,
  slidesPerView: 2,
  spaceBetween: 16,
  // slidesPerGroup: 3,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
