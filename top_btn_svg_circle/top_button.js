$(document).ready(function () {

        
            $(window).scroll(function () {
                //탑 버튼 svg 스크롤바에 진행률에 따라 색칠해짐 
                var wScroll = $(this).scrollTop();
                var percent = parseInt(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
                var scrollPercent = 151 - (percent * 1.51);
                $('svg').css('stroke-dashoffset',scrollPercent);
                //path 총길이 구하는 법 : https://lpla.tistory.com/105 
                

                //탑 버튼 스크롤 내리면 나타나게하기 
                if ($(this).scrollTop() > 100) {
                    $('.btn_top').addClass('active');
                } else {
                    $('.btn_top').removeClass('active');
                }
                //탑 버튼누르면 맨위로
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

        


            