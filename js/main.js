$(function () {
    $('.main_slide').slick({
        arrows: false,
        // fade: true,
        // vertical: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });

    $('.main_visual .dots li').on('click', function () {
        //내가 클릭한 요소의 번호(idx)를 알려줘..
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
})