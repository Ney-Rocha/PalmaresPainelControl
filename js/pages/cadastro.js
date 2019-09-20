//metodo wizard
$("#wizard").steps();
$("#form-cadastro").steps({
    bodyTag: "fieldset",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        // Sempre permitir que retroceda, mesmo que a etapa atual contenha campos inválidos!
        if (currentIndex > newIndex)
        {
            return true;
        }

        var form = $(this);

        // Limpar se o usuário foi para trás antes
        if (currentIndex < newIndex)
        {
            // To remove error styles
            $(".body:eq(" + newIndex + ") label.error", form).remove();
            $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
        }

        // Desative a validação nos campos que estão desabilitados ou ocultos.
        form.validate().settings.ignore = ":disabled,:hidden";

        // Comece a validação; Evite ir para frente se for falso
        return form.valid();
    },
    
    onFinishing: function (event, currentIndex)
    {
        var form = $(this);

        // Desative a validação nos campos que estão desativados.
        // Neste ponto, recomenda-se fazer uma verificação geral (ignorar apenas os campos desativados)
        form.validate().settings.ignore = ":disabled,:hidden";

        // Comece a validação; Evitar o envio do formulário se for falso
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        var form = $(this);

        //Enviar entrada de formulário
        form.submit();
    },
    labels: {
        cancel: "Cancelar",
        current: "Etapa Atual:",
        pagination: "Paginação",
        finish: "Finalizar",
        next: "Próximo",
        previous: "Anterior",
        loading: "Carregando ..."
    }
}).validate({
    errorPlacement: function (error, element)
    {
        element.before(error);
    },
    
    rules: {
        cpf_cadastro: { required:true},
        nome_cadastro: { required:true},
        telefone1_cadastro:{required: true},
        senha_cadastro: {required: true, minlength:4},
        confSenha_cadastro: {required: true,minlength:4, equalTo: '#senha_cadastro'}
    },
    messages: {
        cpf_cadastro: { required:'Campo obrigatório', minlength: "Por favor, informe um Documento válido"},
        nome_cadastro: { required:'Campo obrigatório'},
        sexo_cadastro:{ required:'Campo obrigatório'},
        porte_cadastro:{ required:'Campo obrigatório'},
        endereco_cadastro:{required:'Campo obrigatório', minlength: "Por favor, informe um Endereço válido"},
        numero_cadastro: {required:'!'},
        bairro_cadastro:{required:'Campo obrigatório', minlength: "Por favor, informe um Bairro válido"},
        cidade_cadastro:{required:'Campo obrigatório'},
        cep_cadastro:{required:'Campo obrigatório', minlength: "Por favor, informe um CEP válido"},
        uf_cadastro:{required:'Campo obrigatório'},
        telefone1_cadastro:{required:'Obrigatório pelo meno um telefone de contato',  minlength: "Por favor, informe um telefone fixo ou celular válido"},
        email_cadastro:{required:'Campo obrigatório', email:'Por favor, informe um endereço de e-mail válido'},
        emailUser_cadastro:{required:'Campo obrigatório', email:'Por favor, informe um endereço de e-mail válido'},
        senha_cadastro:{required:'Campo obrigatório', minlength:'Minímo 4 caracteres'},
        confSenha_cadastro:{required:'Campo obrigatório',  minlength:'Minímo 4 caracteres', equalTo:'Senhas não conferem'}
        
    }
}); //FIM - metodo wizard

// campo de validação de data
$('#data_1 .input-group.date').datepicker({
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    format: "dd/mm/yyyy"
});

// campo  de acesso sistema / switchery
var elem = document.querySelector('.js-switch');
var switchery = new Switchery(elem, { color: '#1AB394', size:'large', jackColor:'#9decff' });

var elem_2 = document.querySelector('.js-switch_2');
var switchery_2 = new Switchery(elem_2, { color: '#1AB394' });

var elem_3 = document.querySelector('.js-switch_3');
var switchery_3 = new Switchery(elem_3, { color: '#1AB394' });


// recebe o campo documento e atualiza o tipo documento
var documento = $('#cpf_cadastro').on('blur', function(e){
    if($('#cpf_cadastro').val().length == 14){
        $("#tipoPessoa_cadastro").val("1");
        if($("#porte").hasClass('hide')){
            $("#genero").removeClass('hide').attr('required');
        }else{
            $("#porte").addClass('hide').removeAttr('required');
            $("#genero").removeClass('hide');
        }
        

    }
    else if($('#cpf_cadastro').val().length >= 15){
        $("#tipoPessoa_cadastro").val("2");
        if($("#genero").hasClass('hide')){
            $("#porte").removeClass('hide').attr('required');
        }else{
            $("#genero").addClass('hide').removeAttr('required');
            $("#porte").removeClass('hide');
        }
        
    }
})


$('#form-cadastro').on('submit', function(){
    // var usuario = $('#form-cadastro #emailUser_cadastro').val();
    // var senha = $('#form-cadastro #senha_cadastro').val();
    
    // localStorage.setItem('user', usuario);
    // localStorage.setItem('pass', senha);

    const campos = {
        cpf_cadastro: $('#cpf_cadastro').val(),
        tipoPessoa_cadastro: $('#tipoPessoa_cadastro').val(),
        nome_cadastro: $('#nome_cadastro').val(),
        nascimento_cadastro: $('#nascimento_cadastro').val(),
        genero: $('#genero').val(),
        porte_cadastro: $('#porte_cadastro').val(),
        endereco_cadastro: $('#endereco_cadastro').val(),
        numero_cadastro: $('#numero_cadastro').val(),
        complemento_cadastro: $('#complemento_cadastro').val(),
        bairro_cadastro: $('#bairro_cadastro').val(),
        cidade_cadastro: $('#cidade_cadastro').val(),
        cep_cadastro: $('#cep_cadastro').val(),
        uf_cadastro: $('#uf_cadastro').val(),
        telefone1_cadastro: $('#telefone1_cadastro').val(),
        telefone2_cadastro: $('#telefone2_cadastro').val(),
        email_cadastro: $('#email_cadastro').val(),
        aluno_cadastro: $('#aluno_cadastro').val(),
        colaborador_cadastro: $('#colaborador_cadastro').val(),
        doador_cadastro: $('#doador_cadastro').val(),
        modalidade_cadastro: $('#modalidade_cadastro').val(),
        curso_cadastro: $('#curso_cadastro').val(),
        graduacao_cadastro: $('#graduacao_cadastro').val(),
        departamento_cadastro: $('#departamento_cadastro').val(),
        cargo_cadastro: $('#cargo_cadastro').val(),
        emailUser_cadastro: $('#emailUser_cadastro').val(),
        senha_cadastro: $('#senha_cadastro').val(),
    };

    // $.ajax({
    //     type : 'POST',
    //     url : 'cadUsuario.php',
    //     data : campos,
    //     success : function(result){
    //         if (result == 0){
    //             window.location.href = 'homeRestrita.html';
    //         }
    //         if (result == 'erro'){
    //             swal({
    //                 title: "Falha ao Cadastrar!",
    //                 text: "Não foi possivel cadastrar alguma informação",
    //                 type: "error",
    //                 timer: 4000,        
    //                 allowOutsideClick: true,
    //                 showCancelButton: true,
    //                 showConfirmButton: false,
    //                 allowEscapeKey: true,
    //                 html: true
    //             });
    //         }
    //     }
    // })
    
});

