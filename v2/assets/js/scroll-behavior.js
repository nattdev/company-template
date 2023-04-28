var el_LinkList1 = document.querySelectorAll("div#LinkList1 ul li a"); 
var el_LinkList2 = [];
          
for(var i = 0; i < document.querySelectorAll("div#LinkList1 ul li a").length - 1; i++){
el_LinkList2[i] =  "div#LinkList1 ul li:nth-child" + "(" + (i + 2) + ") a";
}
                   
let tarjet = ["#services_section", "#info_section", "#testimonials_section", "#additem_section", "#main", "#form_section"];

for(var i = 0; i < document.querySelectorAll("div#LinkList1 ul li a").length - 1; i++){
  let offsetTop = document.querySelector(tarjet[i]).offsetTop;
  $(el_LinkList2[i]).on("click", function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: offsetTop - menu_top }, 1300);
  });
}
