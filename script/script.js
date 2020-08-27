// Make the DIV element draggable:
dragElement(document.getElementById("mydivone"));
dragElement(document.getElementById("mydivtwo"));
dragElement(document.getElementById("mydivthree"));
dragElement(document.getElementById("mydivfour"));
dragElement(document.getElementById("mydivfive"));
dragElement(document.getElementById("mydivsix"));
dragElement(document.getElementById("mydivseven"));

var degreeRot = [0, 0, 0, 0, 0, 0, 0];
var degree = 0;


// document.getElementById()

document.addEventListener('keydown', RotateImage);
// document.addEventListener('onmouseover', GetImage);

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


function RotateImage(event)
{
    if (event.key == null)
        return;

    var image = document.querySelectorAll(":hover");

    if (image[2] == null)
        return;

    console.log(image[2]);
    

    // while (event.key == "ArrowLeft" || event.key == "ArrowRight")
    {
        if ((event.key == "ArrowLeft") || (event.key == "A") || (event.key == "a"))
        {
            degree+=15;
            console.log(degree);
            console.log(image[2].id);
            if (image[2].id == "mydivone")
            {
                degreeRot[0] -= 15;
                image[2].style.transform = 'rotate(' + degreeRot[0] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            else if (image[2].id == "mydivtwo") {
                degreeRot[1] -= 15;
                image[2].style.transform = 'rotate(' + degreeRot[1] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            else if (image[2].id == "mydivthree") {
                degreeRot[2] -= 15;
                image[2].style.transform = 'rotate(' + degreeRot[2] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            else if (image[2].id == "mydivfour") {
                degreeRot[3] -= 15;
                image[2].style.transform = 'rotate(' + degreeRot[3] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            else if (image[2].id == "mydivfive") {
                degreeRot[4] -= 15;
                image[2].style.transform = 'rotate(' + degreeRot[4] + 'deg)';
                console.log("Rotate 5 Left");
                // break;
            }
            else if (image[2].id == "mydivsix") {
                degreeRot[5] -= 15;
                image[2].style.transform = 'rotate(' + degreeRot[5] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            else if (image[2].id == "mydivseven") {
                degreeRot[6] -= 15;
                image[2].style.transform = 'rotate(' + degreeRot[6] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            
        } 
        else if ((event.key == "ArrowRight") || (event.key == "D") || (event.key == "d"))
        {
              console.log(image[2].id);
            if (image[2].id == "mydivone") {
                degreeRot[0] += 15;
                image[2].style.transform = 'rotate(' + degreeRot[0] + 'deg)';
                console.log("Rotate Left");
                // break;
            } else if (image[2].id == "mydivtwo") {
                degreeRot[1] += 15;
                image[2].style.transform = 'rotate(' + degreeRot[1] + 'deg)';
                console.log("Rotate Left");
                // break;
            } else if (image[2].id == "mydivthree") {
                degreeRot[2] += 15;
                image[2].style.transform = 'rotate(' + degreeRot[2] + 'deg)';
                console.log("Rotate Left");
                // break;
            } else if (image[2].id == "mydivfour") {
                degreeRot[3] += 15;
                image[2].style.transform = 'rotate(' + degreeRot[3] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            else if (image[2].id == "mydivfive") {
                degreeRot[4] += 15;
                image[2].style.transform = 'rotate(' + degreeRot[4] + 'deg)';
                console.log("Rotate 5 Right");
                // break;
            }
            else if (image[2].id == "mydivsix") {
                degreeRot[5] += 15;
                image[2].style.transform = 'rotate(' + degreeRot[5] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
            else if (image[2].id == "mydivseven") {
                degreeRot[6] += 15;
                image[2].style.transform = 'rotate(' + degreeRot[6] + 'deg)';
                console.log("Rotate Left");
                // break;
            }
        }
    }
    console.log(degreeRot);
}