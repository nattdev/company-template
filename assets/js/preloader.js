    //after window is loaded completely 
    window.onload = function(){
    //hide the preloader
    document.querySelector(&quot;.container_load&quot;).style.opacity = &#39;0&#39;;   
    document.querySelector(&quot;.container_load&quot;).addEventListener(&#39;transitionend&#39;, () =&gt; {
    document.querySelector(&quot;.container_load&quot;).style.display = &quot;none&quot;;
		});
    } 
