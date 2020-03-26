$(document).ready(function() {
    $('.header').mouseover(function() {
        $('#titulo').animate({ fontSize: '26px' });
    });

    $('ul').mouseover(function() {
        $('li').animate({
            fontSize: "30px"
        }, 1500);
    });
    $('.header').mouseover(function() {
        $('h3').animate({ fontSize: '30px', opacity: '0.1' });
    });
    $('ul').mouseover(function() {
        $('li').animate({
            width: '160px',
            fontSize: '20px'
        }, 1500);
    });
    $('.responsive').mouseover(function() {
        $('img').animate({
            width: '160px'
        }, 1500);
        $('img').animate({
            width: '600px'
        });
        $('img').animate({
            width: '200px'
        });
    });
});
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        anchors: ['primeraSeccion', 'segundaSeccion'],
        sectionsColor: ['#f2f2f2', '#ddd'],
        menu: '#menu',
        scrollingspeed: 300,
        vertialCentered: true,
    });
})