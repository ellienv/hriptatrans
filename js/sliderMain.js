var slides = document.querySelectorAll(".direction-slides");
var currentSlide = 0;

setInterval(function() {
    slides[currentSlide].className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 direction-slides";
    if (window.innerWidth > 991) {
        if (currentSlide === slides.length - 3) {
            currentSlide = 0;
            slides[currentSlide].className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md visible-sm visible-xs direction-slides";
            slides[(currentSlide + 1) % slides.length].className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md visible-sm direction-slides";
            slides[(currentSlide + 2) % slides.length].className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md direction-slides";
            slides[slides.length - 1].className = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 direction-slides';
            slides[slides.length - 2].className = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 direction-slides';
        } else {
            currentSlide = (currentSlide + 1) % slides.length;
            slides[(currentSlide + 2) % slides.length].className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md visible-sm visible-xs direction-slides";
        }
    } else {
        if (window.innerWidth > 768 && window.innerWidth <=991) {
            if ( currentSlide === slides.length - 2) {
                currentSlide = 0;
                slides[currentSlide].className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md visible-sm visible-xs direction-slides";
                slides[(currentSlide + 1) % slides.length].className = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md visible-sm direction-slides';
                slides[slides.length - 1].className = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 direction-slides';
                slides[slides.length - 1].className = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 direction-slides';
            }
            else {
                currentSlide = (currentSlide+ 1) % slides.length;
                slides[(currentSlide + 1) % slides.length].className = "col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md visible-sm visible-xs direction-slides";
            }
    } else {
        if ( window.innerWidth <=768) {
            slides[currentSlide].className = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 direction-slides';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].className = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg visible-md visible-sm visible-xs direction-slides';
        }
    }}}, 1000);
