//metodo wizard
$("#wizard").steps();
$("#form").steps({
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
        form.validate().settings.ignore = ":disabled";

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
        finish: "Fim",
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
    },
    messages: {
        cpf_cadastro: { required:'Campo obrigatório'},
        nome_cadastro: { required:'Campo obrigatório'}
    }
}); //FIM - metodo wizard

$('#data_1 .input-group.date').datepicker({
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    format: "dd/mm/yyyy"
});

var elem = document.querySelector('.js-switch');
var switchery = new Switchery(elem, { color: '#1AB394' });

var elem_2 = document.querySelector('.js-switch_2');
var switchery_2 = new Switchery(elem_2, { color: '#1AB394' });

var elem_3 = document.querySelector('.js-switch_3');
var switchery_3 = new Switchery(elem_3, { color: '#1AB394' });