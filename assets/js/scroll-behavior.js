if (window.location.host == "pag-demo3.blogspot.com"){

	$("div#LinkList1 ul li:nth-child(6) a").on("click", function (e) {
    if(window.location.href == "https://pag-demo3.blogspot.com/" || window.location.href == "https://pag-demo3.blogspot.com/?m=1"){
			e.preventDefault();
  	  const href = $(this).attr("href");
  		$("html, body").animate({ scrollTop: $(href).offset().top - 90 }, 1500);
    } else if(window.location.href == "https://pag-demo3.blogspot.com/#form-section" || window.location.href == "https://pag-demo3.blogspot.com/?m=1#form-section"){
      var child6 = $("div#LinkList1 ul li:nth-child(6) a")
      const href = child6.attr("href");
  		$("html, body").animate({ scrollTop: $(href).offset().top - 90 }, 1500);
    }else {
      
      if(window.location.href == "https://pag-demo3.blogspot.com/?m=1#form-section" || window.location.href == "https://pag-demo3.blogspot.com/?m=1#form_section"){
        const href = $(this).attr("href");
  			$("html, body").animate({ scrollTop: $(href).offset().top - 90 }, 1500);
      }else {
        e.preventDefault();
        window.location.href = "https://pag-demo3.blogspot.com/#form-section";
        const href = $(this).attr("href");
  			$("html, body").animate({ scrollTop: $(href).offset().top - 90 }, 1500);
      } 	
  }
	});              	 
} 

if(window.location.href == "https://pag-demo3.blogspot.com/#form-section" || window.location.href == "https://pag-demo3.blogspot.com/?m=1#form-section"){
    var child6 = $(&quot;div#LinkList1 ul li:nth-child(6) a")
    const href = child6.attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - 90 }, 1500);
}
