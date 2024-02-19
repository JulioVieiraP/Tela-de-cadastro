var cadastro, login;

$(document).submit(function(e) {
    e.preventDefault();

    var Nome = $("#Name").val();
    var Email = $("#email").val();
    var Senha = $("#senha").val();
    var SenhaNum = parseInt(Senha);
    cadastro = Email + " " + SenhaNum;

    $('#Cadastro').html(`Seu cadastro foi feito com sucesso. Efetue o login.`);
    $('#Cadastro').css('display', 'block')
    $('.Login').css('display', 'block')
    $('.Cadastro').css('display', 'none')
});

$("#loginButton").click(function() {
    var EmailL = $("#email-login").val();
    var SenhaL = $("#senha-login").val();
    var SenhaNumL = parseInt(SenhaL);
    login = EmailL + " " + SenhaNumL;

    if (cadastro === login) {
        $("#Cadastro").html(`Seu Login foi autorizado`);
    } else {
        $("#Cadastro").html(`Seu Login não foi autorizado`);
    }
});