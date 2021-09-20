

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }

}

ibg();





$('.menu__links .menu__link').on('click', function(e){
    e.preventDefault();
    $(this).parents('.menu__links').find('.menu__item').removeClass('menu__item_active');
    $(this).parent('.menu__item').addClass('menu__item_active');
});

$('.menu__item .menu__link').on('click', function(e){
    e.preventDefault();
    $(this).parents('.menu__item').find('.sub-menu__block').removeClass('sub-menu__block_active');
    $(this).parent('.menu__item').find('.sub-menu__block').addClass('sub-menu__block_active');
});





//open menu-burger
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})


//close menu-burger
$('.header__burger').on('click', function(){
    $('.menu__item .sub-menu__block').removeClass('sub-menu__block_active');
    $('body').removeClass('lock');
});



if($(window).width() < 992){
    $('.basket__link').click(function(event){
        $('.basket__block').toggleClass('basket__block_active');
    })
}








//slick-slider
$('.reviews__block').slick({
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.table__inner .table__link').on('click', function(e){
    e.preventDefault();
    $(this).parent().children().removeClass('table__link_active');
    $(this).addClass('table__link_active');
    let attr = $(this).attr('href');
    $('.table__inner .table__body').removeClass('table__body_active');
    $(attr).addClass('table__body_active');
});


if($(window).width() < 767){
    $('.aside__inner .aside__link').on('click', function(e){
        e.preventDefault();
        $('.aside__inner').addClass('aside__inner_active');
    });
}
