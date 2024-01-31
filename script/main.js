$(function () {
    var swiper = new Swiper('.slide ', {
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.slide .swiper-button-next',
            prevEl: '.slide .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.slide .swiper-pagination',
            clickable: true,
        },
    });
});

AOS.init({
    duration: 1200 //aos 나타나는 속도
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 5200) {
        $('.main').fadeIn();
    } else {
        $('.main').fadeOut();
    }

    var height2 = $(window).scrollTop();
    if (height2 > 6800) {
        $('.sub1').fadeIn();
    } else {
        $('.sub1').fadeOut();
    }

    var height2 = $(window).scrollTop();
    if (height2 > 7100) {
        $('.sub2').fadeIn();
    } else {
        $('.sub2').fadeOut();
    }
});
