$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 250) { // Set position from top to add class
        $('header').addClass('header-appear');
    }
    else {
        $('header').removeClass('header-appear');
    }
});

function toggle(){
    var trailer = document.querySelector(".trailer")
    trailer.classList.toggle("active")
}