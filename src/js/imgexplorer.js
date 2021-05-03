var imgId = 1;

function show(){
    document.getElementById("sticky").style.display = "block";
    document.getElementById("gallery").style.pointerEvents = "none";
    document.getElementById("simage").src = "galeria/" + imgId + ".webp";
    document.getElementById("blur").style.display = "block";
}

function next(){
    imgId++;
    if(imgId >= 41) {
        imgId = 41;
        document.getElementById("next").style.display = "none";
    }
    document.getElementById("loading").style.display = "block"
    document.getElementById("prev").style.display = "block";
    document.getElementById("simage").src = "galeria/" + imgId + ".webp";
    document.getElementById("simage").onload = function(){ document.getElementById("loading").style.display = "none"; };
}

function prev(){
    imgId--;
    if(imgId <= 1) {
        imgId = 1;
        document.getElementById("prev").style.display = "none";
    }
    document.getElementById("loading").style.display = "block"
    document.getElementById("next").style.display = "block";
    document.getElementById("simage").src = "galeria/" + imgId + ".webp";
    document.getElementById("simage").onload = function(){ document.getElementById("loading").style.display = "none"; };
}

function hide(){
    document.getElementById("sticky").style.display = "none";
    document.getElementById("gallery").style.pointerEvents = "all";
    document.getElementById("blur").style.display = "none";
}