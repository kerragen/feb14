const swiperMedia = window.matchMedia("(max-width: 768px)");

function swiperInit(swiperMedia) {
  if (swiperMedia.matches) { 
    const brandsSwiper = new Swiper('.photos', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    }); 
  } 
}

swiperInit(swiperMedia)