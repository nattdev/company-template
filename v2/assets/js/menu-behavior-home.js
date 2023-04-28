 var menu_top = document.querySelector("#header").offsetHeight;
          document.addEventListener("scroll", function(){
          	var menu_fixed = document.querySelector("#header");
   
          	if(window.scrollY > menu_top){
          	menu_fixed.style.background = "var(--main-bg-color)";
          	menu_fixed.style.display = "flex";
         	} else {
          	menu_fixed.style.background = "transparent";
          }
          });
