/* self interior1.js */
window.onload=function(){
    /* 상단 검색창 */
    var smallSrchBtn = document.querySelector(".small_srchBtn");
    var smallSrchBox = document.querySelector(".small_srchBox");

    smallSrchBtn.addEventListener("click",function(){
        smallSrchBox.classList.toggle("on");
        this.classList.toggle("on");

        
    });
    
    /* 필터 */
    var btnFilter = document.querySelector(".btn_filter");
    var filter = document.querySelector(".filter_Wrap");
    var btnClose = document.querySelector(".btn_close");
    var body = document.querySelector("body");
    var bg= document.querySelector(".bg");

    btnFilter.addEventListener("click",function(){
        filter.classList.add("on");
        body.classList.add("on");
        bg.classList.add("on")
    });

    btnClose.addEventListener("click",function(){
        filter.classList.remove("on");
        body.classList.remove("on");
        bg.classList.remove("on")
    });
}