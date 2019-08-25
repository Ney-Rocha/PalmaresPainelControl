$('#entrar').on('click', function(){
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
            
            swal({
                title: "Email Enviado!",
                text: "Verifique sua caixa de e-mail para recuperar sua senha!",
                type: "success",
                timer: 4000,        
                allowOutsideClick: true,
                showCancelButton: false,
                showConfirmButton: false,
                allowEscapeKey: true,
                html: true
                
            })
            setTimeout(function(){ form.submit(); }, 4000)
            
        }
    });
    
});



