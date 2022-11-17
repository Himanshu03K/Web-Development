const carousel = document.querySelector(".carousel"),
firstImage = carousel.querySelectorAll(".item")[0];
arrowIcons = document.querySelectorAll(".video-container i");

let isdragStart = false, isDragging = false, preventPageX, prevScrollLeft, positionDiff;
let firstImageWidth = firstImage.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
        setTimeout(() => showHideIcons(), 60);
    })
})

// const autoslide = () => {
//     if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth))
//     {
//         return;
//     }

//     positionDiff = Math.abs(positionDiff);
//     let firstImageWidth = firstImage.clientWidth + 14;
//     let valDiffernce = firstImageWidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft)
//     {
//         return carousel.scrollLeft += positionDiff > firstImageWidth / 3 ? valDiffernce : -positionDiff;
//     }
//     carousel.scrollLeft -= positionDiff > firstImageWidth / 3 ? valDiffernce : -positionDiff;
// }

const dragStart = (e) => {
    isdragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isdragStart)
    {
        return;
    }
    isDragging = true;
    carousel.classList.add("dragging");
    e.preventDefault();
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isdragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoslide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);