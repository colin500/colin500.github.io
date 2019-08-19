$(function onPageLoad() {
     $('.dropdown').on('show.bs.dropdown', function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
     });
     $('.dropdown').on('hide.bs.dropdown', function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
     });
});
//Credit: https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})
