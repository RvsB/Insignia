const featureButtonRight = document.getElementById('features-right-scroll-btn');
const featureButtonLeft = document.getElementById('features-left-scroll-btn');

    featureButtonRight.onclick = function () {
        document.getElementById('all-features-container').scrollLeft += 300;
    };
    featureButtonLeft.onclick = function () {
        document.getElementById('all-features-container').scrollLeft -= 300;
    };

const buttonRight = document.getElementById('right-scroll-btn');
const buttonLeft = document.getElementById('left-scroll-btn');

    buttonRight.onclick = function () {
        document.getElementById('all-testimonials').scrollLeft += 300;
    };
    buttonLeft.onclick = function () {
        document.getElementById('all-testimonials').scrollLeft -= 300;
    };