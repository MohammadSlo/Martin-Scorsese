var mySlider = document.getElementById("testimonials-box"),
    myCir = document.getElementById("cir");

myCir.onclick = function() {

myCir.classList.add("active");
mySlider.style.transform = "translateX(100px)";

}