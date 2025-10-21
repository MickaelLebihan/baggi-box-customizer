currentView = true

length = 18
width = 65

var lengthInput 
var lengthInputValue

var largeurs

document.addEventListener("DOMContentLoaded", function () {
    lengthInput = document.getElementById("longueur-input")
    lengthInputValue = lengthInput.getAttribute("value")

    largeurs = document.getElementsByClassName("largeur")
});


widthInput = document.getElementById("largeur-input")



center = document.getElementsByClassName("center")
sides = document.getElementsByClassName("right")

rv = document.getElementById("rv_button")

lengthInput.onclick = changeSize();


function changeSize(){
    width = "width : " + lengthInputValue + "mm"
    
    // largeurs.forEach(element => {
    //     element.setAttribute("style", width);
    // });
    console.log(width)
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