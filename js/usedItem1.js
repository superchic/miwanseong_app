/* used item.js */
window.onload=function(){
    /* 상단 검색창 */
    var smallSrchBtn = document.querySelector(".small_srchBtn");
    var smallSrchBox = document.querySelector(".small_srchBox");

    smallSrchBtn.addEventListener("click",function(){
        smallSrchBox.classList.toggle("on");
        this.classList.toggle("on");

        
    });

}
