<html>
<head>
<script language="JavaScript"><
function Drive(left, right) {
 var iframe = document.getElementById("setDrive");
 var slider = document.getElementById("speed");
 left *= speed.value / 100.0;
 right *= speed.value / 100.0;
 iframe.src = "/set/" + left + "/" + right;
}
function Off() {
 var iframe = document.getElementById("setDrive");
 iframe.src = "/off";
}
function Photo() {
 var iframe = document.getElementById("setDrive");
 iframe.src = "/photo";
}
//Drive Function with Keys
document.addEventListener("keyup", function (event) {
 if (event.defaultPrevented) {
   return; // Do nothing if the event was already processed
 }
 switch (event.key) {
   case "Down": // IE/Edge specific value
   case "ArrowDown":
     Drive(-1,-1)
     break;
   case "Up": // IE/Edge specific value
   case "ArrowUp":
     Drive(1,1)
     break;
   case "Left": // IE/Edge specific value
   case "ArrowLeft":
     Drive(-1,1)
     break;
   case "Right": // IE/Edge specific value
   case "ArrowRight":
     Drive(1,-1)
     break;
   case "Space": // IE/Edge specific value
   case "Space":
     Drive(0,0)
     break;
   default:
     return; // Quit when this doesn\'t handle the key event.
 }

 // Cancel the default action to avoid it being handled twice\n'
 event.preventDefault();
}, true);
///
//--></script>
</head>
<body>
<iframe src="/stream" width="100%" height="500" frameborder="0"></iframe>
<iframe id="setDrive" src="/off" width="100%" height="50" frameborder="0"></iframe>
<center>
<button onmousedown="Drive(-1,1)" onmouseup="Off()" style="width:200px;height:100px;"><b>Spin Left</b></button>
<button onmousedown="Drive(1,1)" onmouseup="Off()" style="width:200px;height:100px;"><b>Forward</b></button>
<button onmousedown="Drive(1,-1)" onmouseup="Off()" style="width:200px;height:100px;"><b>Spin Right</b></button>\
<br /><br />
<button onmousedown="Drive(0,1)" onmouseup="Off()" style="width:200px;height:100px;"><b>Turn Left</b></button>
<button onmousedown="Drive(-1,-1)" onmouseup="Off()" style="width:200px;height:100px;"><b>Reverse</b></button>
<button onmousedown="Drive(1,0)" onmouseup="Off()" style="width:200px;height:100px;"><b>Turn Right</b></button>
<br /><br />
<button onclick="Off()" style="width:200px;height:100px;"><b>Stop</b></button>
<br /><br />
<button onclick="Photo()" style="width:200px;height:100px;"><b>Save Photo</b></button>
<br /><br />
<input id="speed" type="range" min="0" max="100" value="100" style="width:600px" />
</center>
</body>
</html>
