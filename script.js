document.querySelectorAll('.accordion-item__trigger').forEach((item) => 
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordion-item--active'); 
    })
);

let navigation = document.querySelector('.navigation')

document.querySelectorAll('.nav-item').forEach((item) => 
  item.addEventListener('click', () => {
    navigation.classList.toggle('navigation-active');
  })
)

document.querySelector('.burger-menu').addEventListener('click', () => {
    navigation.classList.toggle('navigation-active');
})
    
$(document).ready(function(){
  $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',

      responsive: [
        {
          breakpoint: 768,
            settings: {
              arrows: true
            }
        }
      ]
      });

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true,

      responsive: [
          {
            breakpoint: 768,
            settings: {
              vertical: false,
              verticalSwiping: false,
            }
          }
      ]
    });
});