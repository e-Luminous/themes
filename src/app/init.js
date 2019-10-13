$(document).ready(function () {
    // Initiating Materialize Features
    lazyLoad();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    
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