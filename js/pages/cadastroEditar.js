$(document).ready(function(){
    var senha = $('#senha');
    var confSenha = $('#confSenha');
    confSenha.focusout( function(){
        if(senha.val() != confSenha.val()){
            $('#info-senha').addClass('has-error')
            $('#conf-senha').addClass('has-error')
            alert("Os Campos de senha devem ser iguais")
        } 
        else if ($('#info-senha').hasClass('has-error')|| $('#conf-senha').hasClass('has-error')){
            $('#conf-senha').removeClass('has-error')
            $('#info-senha').removeClass('has-error')
        };        
    });
});

// campo  de acesso sistema / switchery
var elem = document.querySelector('.js-switch');
var switchery = new Switchery(elem, { color: '#1AB394', size:'large', jackColor:'#9decff' });

var elem_2 = document.querySelector('.js-switch_2');
var switchery_2 = new Switchery(elem_2, { color: '#1AB394' });

var elem_3 = document.querySelector('.js-switch_3');
var switchery_3 = new Switchery(elem_3, { color: '#1AB394' });