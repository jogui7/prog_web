// Login
$('document').ready(()=>{
    if(localStorage.getItem('logado') == "true"){
        $('#logado').text("SAIR");
    } else {
        $('#logado').text("LOGIN");
    }
});

$('#logado').click(()=>{localStorage.setItem('logado', 'false'); localStorage.setItem('carrinho', null)});

$('#logar').click((e)=>{
    var email = $('#email');
    var senha = $('#senha');
    if(email.val() == localStorage.getItem('login') && senha.val() == localStorage.getItem('senha')){
        localStorage.setItem('logado', 'true');
        e.preventDefault();
        window.location.href = '/index.html';
    } else {
        alert('Email ou senha incorretos');
    }
});


// Cadastro

$('#cadastrar').click((e)=>{
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
        e.preventDefault();
        window.location.href = '/login.html';
    }
});

// Produtos

var carrinho = JSON.parse(localStorage.getItem('carrinho'));

$('.adicionar').click((e)=>{
    if(localStorage.getItem('logado') == 'false'){
        alert('Você precisa estar logado para adicionar ao carrinho');
    } else {
        var item = $(e.target).parentsUntil('.produtos-list');

        if (item.length == 4) {
            item = item[3];
        } else {
            item = item[2];
        }

        var titulo = item.querySelector('.titulo').innerText;
        var preco = item.querySelector('.preco').innerText;

        if(carrinho == null){
            carrinho = [];
        }

        carrinho.push([titulo, preco]);

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert('Produto adicionado ao carrinho!');
    }
});

// Carrinho

$('document').ready(()=>{
    if(carrinho == null || carrinho.length == 0){
        document.querySelector('.produtos-list-carrinho').innerHTML = "<p>Nenhum item adicionado</p>";
    }else {
        carrinho.map( item => {
            document.querySelector('.produtos-list-carrinho').innerHTML += `<div class="carrinho-item"><p>${item[0]}</p><span>${item[1]}</span><button class="rm">x</button></div>`;
            $('.rm').click( (e) => {
                var nome = $(e.target).parentsUntil('.produtos-list-carrinho')[0];
                nome = nome.querySelector('p').innerText;
                carrinho.forEach((item, index) => {
                    if(item[0] == nome) {
                        carrinho.splice(index, 1);
                        return;
                    }
                });
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                window.location.href = "carrinho.html";
            });
        });
    }
});

