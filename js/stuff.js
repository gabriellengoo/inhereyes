// function vidPlay() {  
//     $("#video1").get(0).play();  
//   };
//   function vidPause() {
//       $("#video1").get(0).pause();
//   };
//   $(document).ready(function(){
//     $("#textToggler").click(function(){
//       $(".toggleText").toggle();
//     });
//   });
//   function toggleImage() {
//     $(".hiddenclickimg").toggle();
//   };


// document.getElementById('alrt').innerHTML='<b>Please wait, Your download will start soon!!!</b>'; 
// setTimeout(function() {document.getElementById('alrt').innerHTML='';},5000);

// <div id='alrt' style="fontWeight = 'bold'"></div>

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});