    const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let slideNumber = 0;

rightArrow.addEventListener('click', () => {
    if (slideNumber < images.length - 1) {
        slideNumber++;
    } else {
        slideNumber = 0; // loop back to first image
    }
    updateSlide();
});
leftArrow.addEventListener('click', () => {
    if (slideNumber > 0) {
        slideNumber--;
    } else {
        slideNumber = images.length - 1; // go to last image
    }
    updateSlide();
});
function updateSlide() {
    slider.style.transform = `translateX(-${slideNumber * 100}vw)`;
}
                //auto moving slide
let slideInterval;
const startSlideShow = () => {
    slideInterval = setInterval(() => {
        if (slideNumber < images.length - 1) {
        slideNumber++;
    } else {
        slideNumber = 0; // loop back to first image
    }
    updateSlide();
    }, 5000);
}      
startSlideShow(); 

        //  ------row3 product slider----
const scrollProduct = document.querySelectorAll('.products');
for(const item of scrollProduct){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}