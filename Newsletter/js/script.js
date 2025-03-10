$(document).ready(function(){
    //모달 오른쪽 메뉴
    $('nav').css('right','-330px');
    $('.right-mo').hide();

    $('.menu_btn').click(function(){
        $('.right-mo').show();
        $('nav').animate({ right : '0'},300);
    });

    // $('.right-mo').click(function(){
    //     $('nav').animate({ right : '-330px'},500, function(){
    //         $('.right-mo').hide();
            //메뉴를 눌러도 사라진다;;
    //     });
    // });

    $('.right-mo').click(function(event) {
        if (!$(event.target).closest('nav').length) {
            // $('.right-mo').fadeOut(100); // 모달 숨김 처리
            $('nav').animate({ right : '-70vw'},500, function(){
                $('.right-mo').fadeOut(100);
            });

        }
    });

});