$(document).ready(function () {
    // Initiating Materialize Features
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    lazyLoad();
    
    $(".tab").on('click', function(e){
        $('#contents').hide();
        lazyLoad();
    });
});

function lazyLoad() {
    $('.progress').show(function(e){
        $('#contents').hide();
    }).delay(1500).fadeOut(function(ex){
        $('#contents').fadeIn();
    });
}