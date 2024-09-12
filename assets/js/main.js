$(function () {
    $(".toggle-menu").on('click', function(e) {
        e.preventDefault()
        $('header nav .links').fadeIn().css('display', 'flex')
        $('header .top .social').fadeIn().css('display', 'flex')
    })
    $(".close").on('click', function() {
        $('header nav .links').fadeOut()
        $('header .top .social').fadeOut()
    })
})