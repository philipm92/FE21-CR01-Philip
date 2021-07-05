const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    }

  });
