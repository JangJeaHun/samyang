$(document).ready(function () {
    $("#gnb,#m_back").hover(function(){
        $(".sub,#m_back").stop().slideToggle();
    },function(){
        $(".sub,#m_back").stop().slideToggle();
    })

    main_tab();
    main_tab_click();
    slick_slide();





});


function main_tab(){
    $("section>article>.wrap #main_tab>li").hover(function(){
        var idx = $(this).index();
        console.log(idx);

        if(idx==0){
            $("section>article>.wrap #main_tab>li .tab01").stop().css({top:"-80px"});
            
        }else if(idx==1){
            $("section>article>.wrap #main_tab>li .tab02").stop().css({top:"-80px"});
        }else if(idx==2){
            $("section>article>.wrap #main_tab>li .tab03").stop().css({top:"-80px"});
        }else{
            $("section>article>.wrap #main_tab>li .tab04").stop().css({top:"-80px"});
        }
    },function(){
        var idx = $(this).index();
        // console.log(idx);
        if(idx==0){
            $("section>article>.wrap #main_tab>li .tab01").stop().css({top:0});
        }else if(idx==1){
            $("section>article>.wrap #main_tab>li .tab02").stop().css({top:0});
        }else if(idx==2){
            $("section>article>.wrap #main_tab>li .tab03").stop().css({top:0});
        }else{
            $("section>article>.wrap #main_tab>li .tab04").stop().css({top:0});
        }
    })
}

function main_tab_click(){
    $("section>article>.wrap #main_tab>li>a>img").click(function(){
        $(this).addClass("tab_on").parents().parents().siblings("li").children().children().removeClass("tab_on");
    })
}

function slick_slide(){
    $('#main_box1').slick({
        prevArrow : $('.prev_arrow'), 
        nextArrow : $('.next_arrow'), 
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
}