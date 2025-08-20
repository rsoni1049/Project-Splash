// Replace these with your actual hosted videos or YouTube/Vimeo links
const INFO_VIDEO_URL = "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1";
const SWIM_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

function openVideo(url){
  const frame = document.getElementById("videoFrame");
  frame.src = url;
  $("#videoModal").modal("show");
}

// Clear the iframe when the modal closes so audio stops
$("#videoModal").on("hidden.bs.modal", function(){
  document.getElementById("videoFrame").src = "";
});

// Hook up hero buttons
document.getElementById("infoVideoBtn")?.addEventListener("click", (e)=>{
  e.preventDefault();
  openVideo(INFO_VIDEO_URL);
});
document.getElementById("swimVideoBtn")?.addEventListener("click", (e)=>{
  e.preventDefault();
  openVideo(SWIM_VIDEO_URL);
});
