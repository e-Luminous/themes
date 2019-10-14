
$(document).ready(function(){
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true 
      }
    );
    $('.button-collapse').sideNav('off');

    $('#nav-mobile').sidenav();
  });
