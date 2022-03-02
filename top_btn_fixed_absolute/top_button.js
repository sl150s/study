$(document).ready(function () {

        //탑 버튼 스크롤 내리면 나타나게하기 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.btn_top').addClass('active');
                } else {
                    $('.btn_top').removeClass('active');
                }

                $('#btn_top_btn').click(function () {
                    $('html, body').stop().animate({
                        scrollTop: 0
                    }, 1000);
                });
            });


        //탑 버튼을 footer 위치에 갔을때 fixed -> absolute로 만들기  
            var socialFloat = document.querySelector('#btn_top_btn');
            var footer = document.querySelector('footer');

            function checkOffset() {
            function getRectTop(el){
                var rect = el.getBoundingClientRect();
                return rect.top;
            }
            
            if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
                socialFloat.style.position = 'absolute';
            if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
                socialFloat.style.position = 'fixed'; // restore when you scroll up

            //btn박스 안에 바디요소 스크롤탑 + 브라우저 높이값을 텍스트로 표시
            //socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
            
            }

            document.addEventListener("scroll", function(){
            checkOffset();
            });

            //참고 사이트 : https://codepen.io/lionelpaulus/pen/YGXwxM 


});

        


            