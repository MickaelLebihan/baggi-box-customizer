currentView = true

var lengthInput 
var lengthInputValue

var widthInput
var widthInputValue

var largeurs

document.addEventListener("DOMContentLoaded", function () {
    lengthInput = document.getElementById("longueur-input")
    lengthInputValue = lengthInput.getAttribute("value")

    largeurs = document.getElementsByClassName("largeur")

    widthInput = document.getElementById("largeur-input")
    widthInputValue = widthInput.getAttribute("value")

    rectoCenter = document.getElementById("recto-center")
    versoCenter = document.getElementById("verso-center")
    
    rectoLeft = document.getElementById("recto-left")
    rectoRight = document.getElementById("recto-right")
    
    versoLeft = document.getElementById("verso-left")
    versoRight = document.getElementById("verso-right")
});

sides = document.getElementsByClassName("right")

rv = document.getElementById("rv_button")

// lengthInput.onclick = changeSize();
// lengthInput.onclick = changeSize();
function update(){
    lengthInput = document.getElementById("longueur-input")
    lengthInputValue = lengthInput.value
    console.log(lengthInputValue)
}

function changeSize(zone){
    if (zone == "center"){
        lengthInputValue = lengthInput.value
        let width = "width : " + lengthInputValue + "mm"
    
        rectoCenter.setAttribute("style", width)
        versoCenter.setAttribute("style", width)
    } else {
        widthInputValue = widthInput.value
        let width = "width : " + widthInputValue + "mm"
    
        rectoLeft.setAttribute("style", width)
        rectoRight.setAttribute("style", width)

        versoLeft.setAttribute("style", width)
        versoRight.setAttribute("style", width)
    }
}

function FlipView(){
    if (! currentView){
        currentView = true
        document.getElementById("recto").setAttribute("style","display : block;");
        document.getElementById("verso").setAttribute("style","display : none;");
    }
    else {
        currentView = false
        document.getElementById("recto").setAttribute("style","display : none;");
        document.getElementById("verso").setAttribute("style","display : block;");
    }

}