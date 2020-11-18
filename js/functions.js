// Login
$('document').ready(()=>{
    if(localStorage.getItem('logado') == "true"){
        $('#logado').text("SAIR");
    } else {
        $('#logado').text("LOGIN");
    }
});

$('#logado').click(()=>{localStorage.setItem('logado', 'false')});

$('#logar').click(()=>{
    var email = $('#email');
    var senha = $('#senha');
    if(email.val() == localStorage.getItem('login') && senha.val() == localStorage.getItem('senha')){
        window.location.href = 'index.html'
        localStorage.setItem('logado', 'true');
    } else {
        alert('Email ou senha incorretos');
    }
});


// Cadastro

$('#cadastrar').click(()=>{
    var nome = $('#nome');
    var email = $('#email');
    var senha = $('#senha');
    var confirma = $('#confirma');
    if(nome.val().length <= 3){
        alert('Nome precisa ter mais de 3 caracteres');
    } else if( senha.val() != confirma.val()) {
        alert('Senhas precisam ser iguais');
    } else {
        localStorage.setItem('login', email.val());
        localStorage.setItem('senha', senha.val());
        window.location.href = 'login.html';
    }
});