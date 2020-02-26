$(document).ready(function() {
    var change = $('.img-fluid').map(function() {
        pare = $(this).attr('src');
        return pare;
    }).get();

    $('.img-fluid').hover(function() {
        origin = $(this).attr('src');
        var num = Math.floor(Math.random() * change.length);
        data = $(this).attr('src', change[num]);
    }, function() {
        $(this).attr("src", orig);

    });
});