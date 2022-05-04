/* inqury.js */
window.onload=function(){
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