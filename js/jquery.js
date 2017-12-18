/*jQUERY */

/*Modales */
 $(".button-collapse").sideNav();
/*modal iniciar sesion*/
$(document).ready(function(){
    $('#iniciar-sesion').modal();
  });
/*modal registrarse*/
  $(document).ready(function(){
      $('#registrate').modal();
    });
/*modal conviertet en conductor*/
$(document).ready(function(){
    $('#conduce').modal();
  });
/*inicializando selectores en el modal conviertete en conductor*/
  $(document).ready(function() {
      $('select').material_select();
    });
