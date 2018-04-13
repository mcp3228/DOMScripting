var images = [
    "./img/Logojs.png",
    "./img/logoreact.png",
    "./img/images.jpg"
]
var count = 0;
/* var prev = document.getElementById("prev");
var next = document.getElementById("next");

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide); */

function nextSlide() {
    var slider = document.getElementById("toSlide");
    // the count will increment
    count++;
    if (count >= images.length) {
        count = 0;
    }
    // the images will take current value of count
    slider.src = images[count]
}

/* function prevSlide() {
    var slider = document.getElementById("toSlide");
    count--;
    if(count < 0) {
        count =images.length -1;
    }
    slider.src = images[count]
} */
setInterval(nextSlide, 2000)