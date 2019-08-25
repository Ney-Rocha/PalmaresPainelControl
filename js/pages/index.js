$(document).ready(function () {

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 0
    });

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        $("#navbar").collapse('hide');
    });

    

});

var cbpAnimatedHeader = (function() {
    var docElem = document.documentElement,
            header = document.querySelector( '.navbar-default' ),
            didScroll = false,
            changeHeaderOn = 200;
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            $(header).addClass('navbar-scroll')
        }
        else {
            $(header).removeClass('navbar-scroll')
        }
        didScroll = false;
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    init();
    

})();

// Activate WOW.js plugin for animation on scrol
new WOW().init();

$('#enviar-form').on('click', function(){
    $('#fale-conosco').validate({
        rules:{
            nome_Interessado: {required: true, minlength: 3},
            telefone_Interessado: {required: true, minlength: 11},
            email_Interessado: {required: true},
            mensagem_Interessado: {required: true, minlength: 10},
        },
        messages:{
            nome_Interessado: {required: 'Preenchimento obrigatório!',minlength: 'Minímo 3 caracteres'},
            telefone_Interessado: {required: 'Preenchimento obrigatório!', minlength: 'favor preencher o campo com o numero completo Ex: (11)99999-9999'},
            email_Interessado: {required: 'Preenchimento obrigatório!', email:'O endereço de e-mail deve ter o formato correto "email@site.com'},
            mensagem_Interessado: {required: 'Preenchimento obrigatório!', minlength: 'Minímo 10 caracteres'},
        }
    });//fecha seleção do form	
});