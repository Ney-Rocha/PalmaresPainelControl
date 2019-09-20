$('#btn-login').on('click', function(e){
    $('#entrar_sistema').validate({
        rules:{
            email_login: {required: true},
            senha_login: {required: true, minlength: 4},
        },
        messages:{                
            email_login: {required: 'Preenchimento obrigatório!', email:'O endereço de e-mail deve ter o formato correto "email@site.com'},
            senha_login: {required: 'Preenchimento obrigatório!', minlength: 'Minímo 4 caracteres'},
        }
    });//fecha seleção do form	
});

$('#entrar_sistema').submit(function(){
    //validação no banco
    var senhaValor = $('#usuario_login').val();
    var usuarioValor = $('#senha_login').val();
    if ( usuarioValor == '' || senhaValor == ''){
        return false;
    }else if( $('#senha_login').attr('aria-invalid') != 'true' && $('#usuario_login').attr('aria-invalid') != 'true'){
        $.ajax({
            type : 'POST',
            url : 'verifLogin.php',
            data : {email_login : $('#usuario_login').val(), senha_login: $('#senha_login').val()},
            success : function(result){
                if (result == 0){
                    window.location.href = 'homeRestrita.html';
                }
                if (result == 1){
                    swal({
                        title: "Usuário invalido!",
                        text: "Verifique o Usuário e Senha Informado",
                        type: "error",
                        timer: 4000,        
                        allowOutsideClick: true,
                        showCancelButton: true,
                        showConfirmButton: false,
                        allowEscapeKey: true,
                        html: true
                    });
                }
            }
        })
    }
    return false;
});


var formularioModal = $("#recuperar_senha");

var validarFormulario = $('#enviar-senha').on('click', function(form){
    $('#recuperar_senha').validate({
        rules:{
            esqueci_email: {required: true}
        },
        messages:{
            
            esqueci_email: {required: 'Preenchimento obrigatório!', email:'O endereço de e-mail deve ter o formato correto "email@site.com'}
        },
        submitHandler:function(form) {
            // faz outras coisas por um valor válido
            
            swal({
                title: "E-mail enviado!",
                text: "Verifique sua caixa de mensagens",
                type: "success",
                timer: 4000,        
                allowOutsideClick: true,
                showCancelButton: true,
                showConfirmButton: false,
                allowEscapeKey: true,
                html: true
                
            })
            setTimeout(function(){ form.submit(); }, 4000)
            
        }
    });
    
});


$('#btn-faleConsoco').on('click', function(){
    $(location).attr('href', 'index.html#contact');
})

