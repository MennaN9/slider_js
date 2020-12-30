var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgs = Array.from(document.querySelectorAll(".item img"));
var currentIndex=0;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function(e) {
        currentIndex = imgs.indexOf(e.target);
        var imgSrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace("d-none", "d-flex");
    });
}
lightBoxContainer.addEventListener("click", function(e) {
    if (e.target != lightBoxItem && e.target != next && e.target != prev ) {
        closeSlide();
    }
});

function closeSlide() {
    lightBoxContainer.classList.replace("d-flex", "d-none"); // closeSlide

}
function nextSlide(){
    currentIndex++;
    if (currentIndex <0)
    {
         currentIndex=imgs.length-1;
    }
  var imgSrc=  imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

next.addEventListener("click", nextSlide);

function prevSlide() {
    currentIndex--;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
prev.addEventListener("click", prevSlide);

document.addEventListener("keydown",function(e){

    if (e.key =="ArrowRight"){
        nextSlide();  
    }
    else if (e.key == "ArrowLeft") {
        prevSlide();
    }
    if (e.key == "Escape") {
        closeSlide();
    }
})