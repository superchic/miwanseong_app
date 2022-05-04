window.onload=function(){
    /* 상단 검색창 */
    var smallSrchBtn = document.querySelector(".freecycle1 > ul:first-of-type > li.small_srchBtn");
    var smallSrchBox = document.querySelector(".freecycle1 > .small_srchBox");

    smallSrchBtn.addEventListener("click",function(){
        smallSrchBox.classList.toggle("on");
        this.classList.toggle("on");

        
    });
    
       

}