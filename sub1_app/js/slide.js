$(document).ready(function(){
    /*** 🔹 sec3 슬라이드 기능 ***/
    var $sec3Slider = $('.sec3-1200-wrap .sec3_3 ul');
    var $sec3Items = $sec3Slider.find('li');
    var sec3ItemWidth = $sec3Items.outerWidth(true);

    // sec3 - 다음 버튼 클릭 (→)
    $('.sec3-1200-wrap .sec3_3 .next').click(function(event){
        event.preventDefault(); 
        $sec3Slider.append($sec3Slider.find('li:first')); // 첫 번째 li를 맨 뒤로 이동
    });

    // sec3 - 이전 버튼 클릭 (←)
    $('.sec3-1200-wrap .sec3_3 .prev').click(function(event){
        event.preventDefault(); 
        $sec3Slider.prepend($sec3Slider.find('li:last')); // 마지막 li를 맨 앞으로 이동
    });


    /*** 🔹 sec4 슬라이드 기능 ***/
    var $sec4Slider = $('.sec4-wrap-2 .wrap ul'); // 슬라이드할 요소 (ul)
    var moveDistance = 200; // 한 번에 이동할 거리 (px)


    // 다음 버튼 클릭 (→)
    $('.sec4-wrap-2 a:last').click(function(event){
        event.preventDefault();
        
        // li들을 왼쪽(-)으로 애니메이션
        $sec4Slider.animate({ marginLeft: `-=${moveDistance}px` }, 500, function(){
            // ⭐ 애니메이션 끝난 후, 첫 번째 li를 맨 뒤로 이동
            $sec4Slider.find('li:first').appendTo($sec4Slider);
            // ⭐ 이동 후, margin-left를 0으로 리셋해서 원래 위치로 보이게 함
            $sec4Slider.css('margin-left', '0');
        });
    });

    // 이전 버튼 클릭 (←)
    $('.sec4-wrap-2 a:first').click(function(event){
        event.preventDefault();
        
        // ⭐ 먼저 마지막 li를 맨 앞으로 이동하고, margin-left를 -200px로 설정
        $sec4Slider.find('li:last').prependTo($sec4Slider);
        $sec4Slider.css('margin-left', `-${moveDistance}px`);

        // 그리고 다시 원래 위치로 부드럽게 애니메이션
        $sec4Slider.animate({ marginLeft: '0' }, 500);
    });




    // sec7 슬라이드 기능
    var $sec7Slider = $('.sec7-b-390 .wrap ul');  // wrap이 ul이므로 그대로 선택!

    // // sec7 - 다음 버튼 클릭 (→)
    // $('.sec7-b-390 a:last').click(function(event){
    //     event.preventDefault(); 
    //     $sec7Slider.append($sec7Slider.find('li:first'));
    // });
    // 다음 버튼 클릭 (→)
    $('.sec7-b-390 a:last').click(function(event){
        event.preventDefault();
        
        // li들을 왼쪽(-)으로 애니메이션
        $sec7Slider.animate({ marginLeft: `-=${moveDistance}px` }, 500, function(){
            // ⭐ 애니메이션 끝난 후, 첫 번째 li를 맨 뒤로 이동
            $sec7Slider.find('li:first').appendTo($sec7Slider);
            // ⭐ 이동 후, margin-left를 0으로 리셋해서 원래 위치로 보이게 함
            $sec7Slider.css('margin-left', '0');
        });
    });

    // 이전 버튼 클릭 (←)
    $('.sec7-b-390 a:first').click(function(event){
        event.preventDefault();
        
        // ⭐ 먼저 마지막 li를 맨 앞으로 이동하고, margin-left를 -200px로 설정
        $sec7Slider.find('li:last').prependTo($sec7Slider);
        $sec7Slider.css('margin-left', `-${moveDistance}px`);

        // 그리고 다시 원래 위치로 부드럽게 애니메이션
        $sec7Slider.animate({ marginLeft: '0' }, 500);
    });
    

    // // sec7 - 이전 버튼 클릭 (←)
    // $('.sec7-b-390 a:first').click(function(event){
    //     event.preventDefault(); 
    //     $sec7Slider.prepend($sec7Slider.find('li:last'));
    // });
});
