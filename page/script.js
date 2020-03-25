$(document).ready(function() {
    $('#pagepiling').pagepiling({
        anchors: ['primeraSeccion', 'segundaSeccion', 'terceraSeccion', 'cuartaSeccion'],
        sectionsColor: ['#f2f2f2', '#2b7f83', '#7BAABE', '#6A77AD'],
        menu: '#menu',
        scrollingspeed: 300,
        verticalCentered: true,
    });
})