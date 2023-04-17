var m_dropdown = document.querySelector("#LinkList1");
var m_icon = document.querySelector("#HTML2");

m_icon.addEventListener("click", function(){
  if(m_dropdown.classList.contains("active")){
	  m_dropdown.classList.remove("active");
  } else {  
	  m_dropdown.classList.add("active");
  } 
});

var m_links = document.querySelectorAll("div#LinkList1 ul a");

for(var i = 0; i < m_links.length; i++) {
	m_links[i].addEventListener("click", function(){
      m_dropdown.classList.remove("active");
  });
}
