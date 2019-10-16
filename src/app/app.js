$(document).ready(function(){
    $(".dropdown-trigger").dropdown({
        hover : true
    });
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.collapsible').collapsible();
    lazyLoad();
  });

  function lazyLoad() {
    $('.progress').show(function(e) {
        $('#contents').hide();
    }).delay(1500).fadeOut(function(ex) {
        $('#contents').fadeIn();
    });
}

