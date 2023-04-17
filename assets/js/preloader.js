    //after window is loaded completely 
    window.onload = function(){
    //hide the preloader
    document.querySelector(".container_load").style.opacity = '0';   
    document.querySelector(".container_load").addEventListener('transitionend', () => {
    document.querySelector(".container_load").style.display = "none";
		});
    } 
