const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
const checkbox = document.querySelector('input[type="checkbox"]');
const LabelPassowrd = document.querySelector('#Label-passowrd');

// dado mocado ( ficticio para verificação )
/* const user = {
    email: 'admin@email.com',
    password: 123456
} */

//validação  de usuario e senha nos inputs
button.addEventListener('click', (event) => {
    event.preventDefault();//faz com que o botão não envie os dados e nem atualiza a tela

    // caoptura o valor digitado no input
    const emailValue = email.value;
    const passwordValue = password.value;

    // validar se NÃO contem dados no input
    if (!emailValue || !passwordValue){
        alert ('Preencha todos os campos.');
        return;
    }
    // validar se email ou senha foi digitado incorreto comparando com o capturado na sessão temporaria do navegador usando 
    // sessionStorage
    if (emailValue !== sessionStorage.getItem ('email') || passwordValue !== sessionStorage.getItem('password')){
        alert('E-mail e/ou senha incorreto.');
        return;
    }

    alert('Acesso permitido');

});

checkbox.addEventListener('change', () => {
    const attributeValue = password.getAttribute('type');

    if (attributeValue === 'password') {
        password.setAttribute('type', 'text');
        LabelPassowrd.textContent = 'Ocultar Senha';
        return;
    }

    password.setAttribute('type', 'password');
    LabelPassowrd.textContent = 'Mostar Senha';

})


