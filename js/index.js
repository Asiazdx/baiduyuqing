$(function(){
    var h=$(window).height();
    var w=$(window).width();
    $(".fullpage section").css({
        height:h
    });
    $(".fullpage").mousedown(function(e){
        e.preventDefault();
    });
    $(".fullpage").mousedown(function(e){
        e.preventDefault();
    });
    var num=0;
    flag=true;
    /*
     * 上滑
     * 开关判断
     * num值边界判断
     *改变num值和上边距
     *
     * */
    touch.on("body","swipeup",".fullpage",function(e){
        if(!flag){
            return;
        }
        num--;
        if(num==-4){
            $(".sectionL").eq(num).css({
                transform:"translateX(0px)"
            });
            $(".sectionR").eq(num+1).css({
                transform:"translateX(0px)"
            })
            num=-3;
            return;
        }
        $(".sectionL").eq(num+1).css({
            transform:"translateX(50px)"
        });
        $(".sectionR").eq(num+1).css({
            transform:"translateX(-50px)"
        })
        $(".fullpage").css({
            marginTop:num*h,
            transition:"margin-top 2s ease"
        });
        flag=false;
    });
//            下滑
    touch.on("body","swipedown",".fullpage",function(e){

        if(!flag){
            return;
        }
        num++;
        if(num==1){
            num=0;
            $(".sectionL").eq(num-1).css({
                transform:"translateX(0px)",
                translation:"transform 1.5s"
            });
            $(".sectionR").eq(num-1).css({
                transform:"translateX(0px)"
            });
            return;
        }
        $(".sectionL").eq(num+1).css({
            transform:"translateX(50px)"
        });
        $(".sectionR").eq(num+1).css({
            transform:"translateX(-50px)"
        });
        $(".fullpage").css({
            marginTop:num*h,
            transition:"margin-top 2s ease"
        });
        flag=false;
    });
    var fullpage=document.getElementsByClassName("fullpage")[0];
    fullpage.addEventListener("transitionend",function(){
        flag=true;
    })
    /*当屏幕发生变化时*/
    $(window).resize(function(){
        w=$(window).width();
        h=$(window).height();
        $(".smallnav").css({
            width:w,
            height:h
        });
        if(w<992){
            var l=w*0.3
            $(".firstR").css({
                right:l+"px"
            });
            $(".sectionL").css({
                left:l+"px"
            })
        }else{
            $(".firstR").css({
                right:0
            });
            $(".sectionL").css({
                left:0
            })
        }
    })
    $(".smallnav").css({
        width:w,
        height:h
    })
    /*小屏导航*/
    var flage2=true;
    $(".menu-btn").click(function(){
        if(flage2) {
            $(this).find(".one").css({
                transformOrigin:"30% 0",
                transform:"rotate(45deg)"
            });
            $(this).find(".two").css({
                transformOrigin:"30% 0",
                transform:"rotate(-45deg)"
            });
            $(".smallnav").slideToggle(1200);
            $(".smallnav li").each(function (index,obj) {
                var dely=0.2*index;
                $(obj).css({
                    transform: "rotateX(0deg)",
                    transition: "transform 0.2s linear "+dely+"s"
                });
            });
            flage2=false;
        }else{
            $(this).find(".one").css({
                transformOrigin:"30% 0",
                transform:"rotate(0deg)"
            });
            $(this).find(".two").css({
                transformOrigin:"30% 0",
                transform:"rotate(0deg)"
            })
            $(".smallnav li").each(function (index,obj) {
                var dely=1.2-0.2*index;
                $(obj).css({
                    transform: "rotateX(90deg)",
                    transition: "transform 0.2s linear "+dely+"s"
                })
            });
            $(".smallnav").slideToggle(1200);
            flage2=true;
        }
    })
    /*第一屛*/
        $(".cloud .top").css({
            animation:"cloud 60s linear infinite"
        });
        $(".cloud .middle").css({
            animation:"cloud 60s linear infinite"
        });
        $(".cloud .bottom").css({
            animation:"cloud 60s linear infinite"
        });
    /*第一屛end*/
    /*纸飞机动画*/
    $(".flight").css({
        animation:"flight 2s linear alternate infinite "
    });
    /*轮船动画*/
    $(".ship").css({
        animation:"ship 2s linear"
    })
    /*箭头动画*/
    $(".arrow").css({
        animation:"arrow 1s linear alternate infinite"
    });
    /*title动画*/
    $(".y-ain").css({
        animation:"til 5s ease  alternate infinite"
    })
})