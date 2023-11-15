// slideshow.js

$(document).ready(function () {
    // Set the interval for fading in images (in milliseconds)
    var interval = 3000; // Change every 3 seconds

    // Select all slides
    var $slides = $(".slide");
    
    // Function to fade in the next image in the slideshow
    function fadeInNextSlide() {
        // Find the first hidden slide
        var $hiddenSlide = $slides.filter(':hidden:first');

        // If there are hidden slides, fade in the next one
        if ($hiddenSlide.length > 0) {
            $hiddenSlide.fadeIn(1000);
        } else {
            // If all slides are visible, hide them and start over
            $slides.hide();
            $slides.first().fadeIn(1000);
        }
    }

    // Call the fadeInNextSlide function at intervals
    setInterval(fadeInNextSlide, interval);
});
