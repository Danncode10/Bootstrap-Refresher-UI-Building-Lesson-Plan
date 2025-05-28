
document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.querySelector('#travelCarousel');
    
    if (carouselElement) {
        console.log('Carousel element found');
        var carousel = new bootstrap.Carousel(carouselElement);
        console.log('Carousel initialized');
        
        document.querySelector('.carousel-control-prev').addEventListener('click', function() {
            console.log('Previous button clicked');
        });
        
        document.querySelector('.carousel-control-next').addEventListener('click', function() {
            console.log('Next button clicked');
        });
    } else {
        console.error('Carousel element not found');
    }
});