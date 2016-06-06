$( document ).ready(function() {


// Smooth Scrolling Code
  $('a').click(function(){
    var elHeight = $('.aloha_head').height();       // captures the headers height
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - elHeight // scrolls to the section - the header height
      }, 1200);
      return false;
  });


// Flickity
$('selector').flickity();

//Flickity Options
$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true
});

// Subscribe alert

$('.aloha_button').on('click', function() {

  event.preventDefault();

  if ( $('.emailInput').val().length === 0 ) {
    alert('Please enter a valid email address');
  } else {
    alert('Thanks for subscribing!');
  };

});

// Add to Cart




});
