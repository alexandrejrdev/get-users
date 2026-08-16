const email = document.querySelector('input[type="email"]');
const newPassword = document.querySelector('#new-password');
const confirmNewPassword = document.querySelector('#confirm-new-password');
const button = document.querySelector('button');
const checkbox = document.querySelector('input[type="checkbox"]');
const LabelPassowrd = document.querySelector('#Label-passowrd');


button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const newPasswordValue = newPassword.value;
    const confirmNewPasswordValue = confirmNewPassword.value;

    // conferir se todos os campos foram preenchidos 
    if (!emailValue || !newPasswordValue || !confirmNewPasswordValue)
        return alert ('Preencha todos os Campos.');

    // conferir se o valor do campo email esta igual ao email digitado na tela de 
    // login cadastrao 
    if (emailValue !== sessionStorage.getItem('email'))
        return alert ('Email não registrado.');

    // conferir se o campo confirmar nova senha é igual ao campo nova senha
    if (newPasswordValue !== confirmNewPasswordValue)
        return alert ('As Senhas não coincidem, Tente novamente.');

    // altera a senha la no registro do navegador
    sessionStorage.setItem('password', newPasswordValue);

    alert ('Senha atualizada com sucesso');

    window.location.href = './login.html';

})

checkbox.addEventListener('change', () => {
    const attributeValue = password.getAttribute('type');

    if (attributeValue == 'password') {
        
        password.setAttribute('type', 'text')
        LabelPassowrd.textContent = 'Ocultar a Senha';
        return;

    }

    password.setAttribute('type', 'password');
    LabelPassowrd.textContent = 'Mostra Senha';

})