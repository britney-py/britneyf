const slideshowSlide = document.querySelector('.slideshow');
const images = document.querySelectorAll('.slideshow img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1; //first img
const size = images[0].clientWidth;

slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// moves one picture forward ^

// button listeners
nextBtn.addEventListener('click', ()=> 
{
    if (counter >= images.length - 1) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> 
{
    if (counter <= 0) return; //gets rid of bug if user clicks too fast
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideshowSlide.addEventListener('transitionend', () => {
    if(images[counter].id === 'lastClone') 
    {
        slideshowSlide.style.transition = 'none';
        counter = images.length - 2;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === 'firstClone')
    {
        slideshowSlide.style.transition = 'none';
        counter = images.length - counter;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

