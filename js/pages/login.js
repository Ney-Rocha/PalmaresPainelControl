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
    
    $('#btn-login').on('click', function(){
		
        var usuarioGuardado = localStorage.getItem('user');
        var senhaGuardada = localStorage.getItem('pass');
        
        if( $('#usuario-login').val() === usuarioGuardado &&
         $('#senha-login').val() === senhaGuardada ){
            return true;
        } else {
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
                
            })
            return false;
        }	
    });
});

var formularioModal = $("#recuperar_senha")

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
            
            
            setTimeout(function(){ form.submit(); }, 4000)
            
        }
    });
    
});




