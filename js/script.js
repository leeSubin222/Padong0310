$(document).ready(function() {
    const sliderWrapperR = $('.user-review-t'); // 위에서 아래로 이동할 슬라이더
    const sliderWrapperL = $('.user-review-b'); // 숨길 슬라이더
    const boxWidth = $('.r-box').outerWidth(true); // 각 박스의 너비
    const boxHeight = $('.r-box').outerHeight(true); // 각 박스의 높이
    const slideDuration = 500;
    
    let slidingR = false;
    let slidingL = false;
    let slideIntervalR, slideIntervalL;

    // 슬라이더 초기화: 슬라이더의 위치를 0으로 고정
    sliderWrapperR.css('transform', 'translateX(0)');
    sliderWrapperL.css('transform', 'translateX(0)');

    // 좌측으로 슬라이드
    function slideToLeft() {
        if (slidingR) return;
        slidingR = true;

        sliderWrapperR.css({
            'transition': `transform ${slideDuration / 1000}s ease-in-out`,
            'transform': 'translateX(' + (-boxWidth) + 'px)'
        });

        setTimeout(() => {
            sliderWrapperR.css('transition', 'none'); 
            sliderWrapperR.children().first().appendTo(sliderWrapperR); 
            sliderWrapperR.css('transform', 'translateX(0)'); 

            setTimeout(() => {
                sliderWrapperR.css('transition', `transform ${slideDuration / 1000}s ease-in-out`);
                slidingR = false;
            }, 50);
        }, slideDuration);
    }

    // 우측으로 슬라이드
    function slideToRight() {
        if (slidingL) return;
        slidingL = true;
    
        sliderWrapperL.children().last().prependTo(sliderWrapperL);
        sliderWrapperL.css('transform', 'translateX(' + (-boxWidth) + 'px)'); 
    
        setTimeout(() => {
            sliderWrapperL.css({
                'transition': `transform ${slideDuration / 1000}s ease-in-out`,
                'transform': 'translateX(0)'
            });

            setTimeout(() => {
                sliderWrapperL.css('transition', 'none');
                slidingL = false;
            }, slideDuration);
        }, 50);
    }

    // 위에서 아래로 슬라이드
    function slideToBottom() {
        if (slidingR) return;
        slidingR = true;

        sliderWrapperR.children().last().prependTo(sliderWrapperR);
        sliderWrapperR.css('transform', 'translateY(' + (-boxHeight) + 'px)',); 
        // sliderWrapperR.css({'left' : '0', 'transform':'translateX(-50%)' });


        setTimeout(() => {
            sliderWrapperR.css({
                'transition': `transform ${slideDuration / 1000}s ease-in-out`,
                'transform': 'translateY(0)',
            });

            setTimeout(() => {
                sliderWrapperR.css('transition', 'none');
                slidingR = false;
            }, slideDuration);
        }, 50);
    }

    // 슬라이드 시작
    function startSlide() {
        stopSlide();
        if (window.innerWidth < 768) {
            sliderWrapperL.hide();  // 768px 이하일 때 .user-review-b 숨김
            sliderWrapperR.css({'display': 'block', 'overflow': 'hidden'}); // .user-review-t를 블록으로 설정
            sliderWrapperR.css({'transform' : 'translateX(-50%)'});
            slideIntervalR = setInterval(slideToBottom, 3000); // 위로 슬라이드
        } else {
            sliderWrapperL.show();
            sliderWrapperR.css('display', 'flex'); // 원래 상태로 복귀
            slideIntervalR = setInterval(slideToLeft, 3000); // 좌측 슬라이드
            slideIntervalL = setInterval(slideToRight, 3000); // 우측 슬라이드
        }
    }

    // 슬라이드 멈춤
    function stopSlide() {
        clearInterval(slideIntervalR);
        clearInterval(slideIntervalL);
        slideIntervalR = null;
        slideIntervalL = null;
    }

    function checkWindowSize() {
        startSlide();
    }

    // 슬라이드 시작
    startSlide();
    checkWindowSize();
    $(window).resize(checkWindowSize);




    // 메뉴 버튼 애니메이션
    $('nav').css('right', '-330px');
    $('.right-mo').hide();

    $('.menu_btn').click(function() {
        $('.right-mo').show();
        $('nav').animate({ right: '0' }, 300);
    });

    $('.right-mo').click(function() {
        $('nav').animate({ right: '-330px' }, 500, function() {
            $('.right-mo').hide();
        });
    });
});
