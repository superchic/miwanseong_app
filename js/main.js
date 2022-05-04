/* main.js */
window.onload=function(){
    var btnMenu = document.querySelector("header > div:first-child > .btn_menu");
    var menu = document.querySelector(".menu");
    var body = document.querySelector("body");
    var bg= document.querySelector(".bg");
    var btnClose = document.querySelector(".menu > .btn_close")
    
    btnMenu.addEventListener("click",function(){
        menu.classList.add("on");
        body.classList.add("on");
        bg.classList.add("on");
        

    });

    btnClose.addEventListener("click",function(){
        menu.classList.remove("on");
        body.classList.remove("on");
        bg.classList.remove("on");
        

    });


   
    /* 메인배너 */
    var bnnNum=0;
    var lastNum = document.querySelectorAll(".banner_frame > section").length-1;
    var banner_w = document.querySelector(" .banner_frame > section").offsetWidth;
    var bnnFrame = document.querySelector(".banner_frame");

    console.log(banner_w)

    function autoBanner(){
        bnnNum++;
        if(bnnNum>lastNum) bnnNum=0;
        bnnFrame.style.left = bnnNum*-banner_w + "px";

        rollingBtn.forEach(function(item){
            item.classList.remove("on")
        });
        rollingBtn[bnnNum].classList.add("on")

    }
    var autoBann = setInterval(autoBanner,5000);

    /* 롤링 클릭 */
   var banner_roll = document.querySelectorAll(".rolling li");
   var rollingBtn = document.querySelectorAll(".rolling a");

   banner_roll.forEach(function(item){
       item.addEventListener("click",rollAction);
   });

   function rollAction(item){
       curRoll = item.currentTarget; 
       parentRoll = curRoll.parentElement;
       childRoll = parentRoll.children;
       bnnNum= Array.from(childRoll).indexOf(curRoll);

       bnnFrame.style.left = bnnNum*-banner_w + "px";

    
        rollingBtn.forEach(function(item){
            item.classList.remove("on")
        });
        rollingBtn[bnnNum].classList.add("on")
      
   }

   /* 셀프 인테리어 */
   var bnnNum2 = 0
   var lastNum2 = document.querySelectorAll(".banner2 > ul > li").length-1;
   var banner2 = document.querySelectorAll(".banner2 > ul > li");
   var banner2_Li_w = document.querySelector(".banner2 > ul > li").offsetWidth+7;
   var btnPrev1 = document.querySelector(".btn_prev1")
   var btnNext1 = document.querySelector(".btn_next1")

   console.log(banner2_Li_w)


   btnNext1.addEventListener("click",function(event){
       event.preventDefault();
       bnnNum2++;
     
       if(bnnNum2>=lastNum2) bnnNum2=4;

       for(var i=0;i<banner2.length;i++){
        banner2[i].style.left = bnnNum2*-banner2_Li_w + "px";
       }
       

       banner2.forEach(function(item){
        item.classList.remove("on")
        });
        banner2[bnnNum2+1].classList.add("on");
    
   });

   btnPrev1.addEventListener("click",function(event){
    event.preventDefault();
    bnnNum2--;
  
    if(bnnNum2<0) bnnNum2=0;

    for(var i=0;i<banner2.length;i++){
     banner2[i].style.left = bnnNum2*-banner2_Li_w + "px";

    }

    banner2.forEach(function(item){
        item.classList.remove("on")
        });
        banner2[bnnNum2+1].classList.add("on");
    });

    /* 중고거래 */
    var bnnNum3 = 0
    var lastNum3 = document.querySelectorAll(".banner3 > ul > li").length-1;
    var banner3 = document.querySelectorAll(".banner3 > ul > li");
    var banner3_Li_w = document.querySelector(".banner3 > ul > li").offsetWidth+7;
    var btnPrev2 = document.querySelector(".btn_prev2")
    var btnNext2 = document.querySelector(".btn_next2")
 
    console.log(banner3_Li_w)
 
 
    btnNext2.addEventListener("click",function(event){
        event.preventDefault();
        bnnNum3++;
      
        if(bnnNum3>=lastNum3) bnnNum3=4;
 
        for(var i=0;i<banner3.length;i++){
         banner3[i].style.left = bnnNum3*-banner3_Li_w + "px";
        }
        
 
        banner3.forEach(function(item){
         item.classList.remove("on")
         });
         banner3[bnnNum3+1].classList.add("on");
     
    });
 
    btnPrev2.addEventListener("click",function(event){
     event.preventDefault();
     bnnNum3--;
   
     if(bnnNum3<0) bnnNum3=0;
 
     for(var i=0;i<banner3.length;i++){
      banner3[i].style.left = bnnNum3*-banner3_Li_w + "px";
 
     }
 
     banner3.forEach(function(item){
         item.classList.remove("on")
         });
         banner3[bnnNum3+1].classList.add("on");
     });

    /* 무료나눔 */
    var bnnNum4 = 0
    var lastNum4 = document.querySelectorAll(".banner4 > ul > li").length-1;
    var banner4 = document.querySelectorAll(".banner4 > ul > li");
    var banner4_Li_w = document.querySelector(".banner4 > ul > li").offsetWidth+7;
    var btnPrev3 = document.querySelector(".btn_prev3")
    var btnNext3 = document.querySelector(".btn_next3")
 
    console.log(banner4_Li_w)
 
 
    btnNext3.addEventListener("click",function(event){
        event.preventDefault();
        bnnNum4++;
      
        if(bnnNum4>=lastNum4) bnnNum4=4;
 
        for(var i=0;i<banner4.length;i++){
         banner4[i].style.left = bnnNum4*-banner4_Li_w + "px";
        }
        
 
        banner4.forEach(function(item){
         item.classList.remove("on")
         });
         banner4[bnnNum4+1].classList.add("on");
     
    });
 
    btnPrev3.addEventListener("click",function(event){
     event.preventDefault();
     bnnNum4--;
   
     if(bnnNum4<0) bnnNum4=0;
 
     for(var i=0;i<banner3.length;i++){
      banner4[i].style.left = bnnNum4*-banner4_Li_w + "px";
 
     }
 
     banner4.forEach(function(item){
         item.classList.remove("on")
         });
         banner4[bnnNum4+1].classList.add("on");
     });

    /* 지도 */
    var btnMap = document.querySelector("footer > ul > li.btn_map");
    var map = document.querySelector("#map");
    var menuBar = document.querySelector(".menu_bar")
    
    btnMap.addEventListener("click",function(event){
        event.preventDefault();
        map.classList.toggle("on");
        menuBar.classList.toggle("on")
 
    });

    /* 메뉴바 위치 */
    window.addEventListener("scroll",function(){
        var scroll = document.querySelector("html").scrollTop;
        console.log(scroll)


        if(scroll<270){
            menuBar.classList.remove("ab");
        }
        if(scroll>=270){
            menuBar.classList.add("ab");
        }
    });

    /* 메뉴바 검색창 */
    var menuBarSrch =document.querySelector(".menu_bar > ul > li:nth-child(2)");
    var smallSrchBox = document.querySelector(".menu_bar > ul > li:nth-child(2) > ul > li > .small_srchBox");
   
    
    menuBarSrch.addEventListener("click",function(event){
        event.preventDefault();
        smallSrchBox.classList.toggle("on");
        this.classList.toggle("on");
        
        //검색창 안닫히게
        smallSrchBox.addEventListener("click",function(event){
            event.stopPropagation();
            
        })

    });




}
