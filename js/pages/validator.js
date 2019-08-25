//validador de dados CPF phone

var CelMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
    onKeyPress: function (val, e, field, options) {
        field.mask(CelMaskBehavior.apply({}, arguments), options);
    }
};

$(document).ready(function () {
    $('.celphones').mask(CelMaskBehavior, spOptions);
});

$('.cpfCnpj').keypress(function () {
    var tamanho = $(".cpfCnpj").val().length;
    if (tamanho > 13) {
        $(".cpfCnpj").mask("00.000.000/0000-00");
    } else {
        $(".cpfCnpj").mask("000.000.000-00");
    }
});

function formatarCpfCnpj(v) {

    //Remove tudo o que não é dígito
    v = v.replace(/\D/g, "")

    var tamanho = v.length;
    if (tamanho > 13) {
        v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
    } else {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    }

    return v;
}

function apenasNumeros(string) {
    var numsStr = String(string.replace(/[^0-9]/g, ''));
    return numsStr;
}