var sidebar = document.querySelector(".sidebar");
var open_bar=document.querySelector(".open_bar");
open_bar.addEventListener("click",function(){
    sidebar.style.display = "flex";
})
var close_bar=document.querySelector(".close_bar");
close_bar.addEventListener("click",function(){
    sidebar.style.display="none";
})