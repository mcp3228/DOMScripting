let images = [
    "./img/Penguins.jpg",
    "./img/logoreact.png",
    "./img/web-design-featured.jpg"
];
var count = 0;

function nextSlide() {
    var slider = document.getElementById("toSlide");
    // the count will increment
    count++;
    if (count >= images.length) {
        count = 0;
    }
    // the images will take current value of count
    slider.src = images[count];
}
setInterval(nextSlide, 3000);
