

//slick-slider
$('.first-screen__slider').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
});



//tabs
$('.news__tabs-link').on('click', function(e){
    e.preventDefault();
    $(this).parent().children().removeClass('news__tabs-link_active');
    $(this).addClass('news__tabs-link_active');
    let attr = $(this).attr('href');
    $('.news__tabs-body').removeClass('news__tabs-body_active');
    $(attr).addClass('news__tabs-body_active');
});


