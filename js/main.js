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

      
    main_tab_click();
    main_tab();
    $("#gnb,#m_back").hover(function(){
        $(".sub,#m_back").stop().slideToggle();
    },function(){
        $(".sub,#m_back").stop().slideToggle();
    })

    // slick_slide();

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





// function slick_slide(){
//     $('#main_box1').slick({
//         prevArrow : $('.prev_arrow'), 
//         nextArrow : $('.next_arrow'), 
//         centerMode: true,
//         dots:false,
//         swipe:true,
//         arrows:true,
//         centerPadding: '60px',
//         slidesToShow: 5,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//             }
//           },
//           {
//             breakpoint: 426,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           }
//         ]
//       });
//     $('#main_box2').slick({
//         prevArrow : $('.prev_arrow'), 
//         nextArrow : $('.next_arrow'), 
//         centerMode: true,
//         dots:false,
//         swipe:true,
//         arrows:true,
//         centerPadding: '60px',
//         slidesToShow: 5,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//             }
//           },
//           {
//             breakpoint: 426,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           }
//         ]
//       });
//     $('#main_box3').slick({
//         prevArrow : $('.prev_arrow'), 
//         nextArrow : $('.next_arrow'), 
//         centerMode: true,
//         dots:false,
//         swipe:true,
//         arrows:true,
//         centerPadding: '60px',
//         slidesToShow: 5,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//             }
//           },
//           {
//             breakpoint: 426,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           }
//         ]
//       });
//     $('#main_box4').slick({
//         prevArrow : $('.prev_arrow'), 
//         nextArrow : $('.next_arrow'), 
//         centerMode: true,
//         dots:false,
//         swipe:true,
//         arrows:true,
//         centerPadding: '60px',
//         slidesToShow: 5,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//             }
//           },
//           {
//             breakpoint: 426,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           }
//         ]
//       });
// }