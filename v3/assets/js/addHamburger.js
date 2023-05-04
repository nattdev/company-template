var hamburger = document.createElement("div");
var header = document.querySelector("#header");

hamburger.setAttribute("id", "HTML2");
hamburger.innerHTML = '<svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.5 6H0V0H32.5V6ZM32.5 12H0V18H32.5V12ZM32.5 24H0V30H32.5V24ZM40 12L50 19.6125L60 12H40Z" fill="white"></path></svg>';

header.appendChild(hamburger);
