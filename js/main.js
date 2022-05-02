$(document).ready(function () {
    $('#main_box1').slick({ 
        centerMode: true,
        dots:false,
        swipe:true,
        arrows:false,
        centerPadding: '60px',
        slidesToShow: 5,
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
            breakpoint: 426,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    
      $('#slide').slick({
        arrows: true,
        prevArrow: $(".slick_prev"),
        nextArrow: $(".slick_next"),
        infinite: true,
        dots: true,
        swipe:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
      });
      $('#m_main_slide').slick({
        arrows: false,
        infinite: true,
        dots: true,
        swipe:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
      });

      
      
    main_tab_click();
    main_tab();
    $("#gnb,#m_back").hover(function(){
        $(".sub,#m_back").stop().slideDown();
    },function(){
        $(".sub,#m_back").stop().slideUp();
    })

    // slick_slide();
    subpage_menu();
    company_tab();
    history_tab();
    image_remove();
});


function main_tab(){
    $("section>article>.wrap #main_tab>li").hover(function(){
        var idx = $(this).index();
        // console.log(idx);

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
    $("section>article>.wrap #main_tab>li").click(function(){
        var idx = $(this).index();
        console.log(idx);

        $("section>article>.wrap .tab_wrap .slide_wrap>div").eq(idx).show().siblings("div").hide();

        if(idx==0){
            $('#main_box1').slick({ 
                centerMode: true,
                dots:false,
                swipe:true,
                arrows:false,
                centerPadding: '60px',
                slidesToShow: 5,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  },
                  {
                    breakpoint: 424,
                    settings: {
                      arrows: false,
                      centerMode: false,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }
                ]
              });
        }else if(idx==1){
            $('#main_box2').slick({ 
                centerMode: true,
                dots:false,
                swipe:true,
                arrows:false,
                centerPadding: '60px',
                slidesToShow: 5,
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
                    breakpoint: 426,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }
                ]
              });
        }else if(idx==2){
            $('#main_box3').slick({ 
                centerMode: true,
                dots:false,
                swipe:true,
                arrows:false,
                centerPadding: '60px',
                slidesToShow: 5,
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
                    breakpoint: 426,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }
                ]
              });
        }else{
            $('#main_box4').slick({ 
                centerMode: true,
                dots:false,
                swipe:true,
                arrows:false,
                centerPadding: '60px',
                slidesToShow: 5,
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
                    breakpoint: 426,
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

    })
    
    $("section>article>.wrap #main_tab>li>a>img").click(function(){
        $(this).addClass("tab_on").parents().parents().siblings("li").children().children().removeClass("tab_on");
    })
}


function subpage_menu(){
  $("#sub_title>.sub_navi>.wrap>.gnb>li, #sub_title>.sub_navi>.wrap>.gnb>li>.submenu").hover(function(){

    
    $(this).children("ul").stop().slideDown();
  },function(){
    $(this).children("ul").stop().slideUp();
  })
}

function company_tab(){
  $("#company_start .wrap>#sub_tab li").click(function(){
    var idx = $(this).index();

    $(this).addClass("on").siblings("li").removeClass("on");

    $("#company_start .wrap>.company_list>ul>li").eq(idx).show().addClass("active").siblings("li").hide().removeClass("active");
  })
}

function history_tab(){
  $("#company_history>div>.history_tab>li").click(function(){
    var idx = $(this).index();
    console.log(idx);

    $(this).addClass("on").siblings("li").removeClass("on");

    $("#company_history>div .history_list").eq(idx).show().addClass("active").siblings("div").hide().removeClass("active");
  })
}

function image_remove(){
  var wid = window.outerWidth;
  console.log(wid);

  if(wid<=425){
    $('.company_intro').css('background-image', 'url("")');
    $('.vision_01,.vision_02').css('background-image', 'url("")');

  }

  // $(window).trigger("");
}