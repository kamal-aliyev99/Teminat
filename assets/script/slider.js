const swiper = new Swiper(".services_content", {
    slidesPerView: "auto",
    spaceBetween: 80,
    pagination: {
      el: ".servicesNav .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
});




