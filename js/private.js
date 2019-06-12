
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }
$(document).ready(function() {
    //Mostrar animate scroll
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
        }
                        )
        wow.init();
    //Seleccionar menu activo
    $(".link-menu").on('click', function(){
        $(".link-menu.active").removeClass('active')
        $(this).addClass('active');
    });
    //Scroll smooth
    $(".nav-item a[href^='#']").on('click', function(e) {
           // prevent default anchor click behavior
           e.preventDefault();
           // store hash
           var hash = this.hash;
           // animate
           $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 1000, function(){
               // when done, add hash to url
               // (default click behaviour)
               window.location.hash = hash;
             });
    });
    //Up
    $("#logo").click(function(){
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    });
    //icon close movil
    $("#btn-close").click(function(){
        $('.navbar-toggler-icon').toggleClass('btn-close');
        $('.bkg-fade').toggleClass('show');
    });
    $(".nav-item").click(function(){
        $('.bkg-fade').removeClass('show');
        $('.navbar-toggler-icon').removeClass('btn-close');
        $('.navbar-collapse.collapse.show').removeClass('show');
    });

});