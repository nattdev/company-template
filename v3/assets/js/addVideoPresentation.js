let videoPresentation = document.createElement("video");
let presentationSection = document.querySelector("#presentation_section"); 

presentationSection.appendChild(videoPresentation);

videoPresentation.muted = "muted";
videoPresentation.autoplay = "true";
videoPresentation.loop = "true";
