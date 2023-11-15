// smooth-scroll.js
$(document).ready(function() {
    // Select all links with hash (#) in the href attribute
    $('a[href^="#"]').on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store the target hash
        var target = this.hash;

        // Animate the scroll to the target element
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, function(){
            // Add the hash (#) to the URL when done scrolling
            window.location.hash = target;
        });
    });
});
