let isMouseTracking = false;

function updateMousePosition() {
  if (isMouseTracking) {
    let positionX = document.getElementById("mousePositionX");
    positionX.innerText = event.clientX;
    let positionY = document.getElementById("mousePositionY");
    positionY.innerText = event.clientY;

  }
}

function toggleTracking () {
  isMouseTracking = !isMouseTracking;
   if (isMouseTracking) {
     document.getElementById("trackingStatus")
       .innerText = "TRACKING";
   } else {
     document.getElementById("trackingStatus")
       .innerText = "NOT TRACKING";
       
   }
}
