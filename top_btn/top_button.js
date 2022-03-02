$(document).ready(function () {

            //탑 버튼 스크롤 내리면 나타나게하기 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.btn_top').addClass('active');
                } else {
                    $('.btn_top').removeClass('active');
                }
            });

            
         

            //탑 버튼이 footer 부분으로 오면 자동으로 그 값만큼 올라가게 하기 
            $(window).scroll(function () {
                let footerH = $("footer").height();
                // 변수 footerH = footer 요소의 높이값 저장(ex:200px)

                if ($("footer").length > 0) {
                    //footer 요소의 갯수가 0보다 많을경우 
                    if ($(window).scrollTop() + $(window).height() > $('footer').offset().top + footerH) {
                        //window(브라우저창 /뷰포트/내부의 스크롤바 높이값() + window(브라우저창 내부의 최대 높이값()) > footer 요소 top 좌표값(1800) + footer요소의 높이값(ex:200px)
                        $('.btn_top').addClass('end');
                    } else {
                        $('.btn_top').removeClass('end');
                    }
                }

                //탑 버튼 클릭 시 제일 상단으로 가게 하기
                $('#btn_top_btn').click(function () {
                    $('html, body').stop().animate({
                        scrollTop: 0
                    }, 1000);
                });
    

            });

        


            });
