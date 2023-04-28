var linklist = document.querySelectorAll("#LinkList1 ul li")
for(var i = 1; i < linklist.length; i++){
  linklist[i].style.display = "none";
}
//Menu styles
var menu_top = document.querySelector("#header");
menu_top.style.background = "var(--main-bg-color)";
