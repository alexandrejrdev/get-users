const button = document.querySelector('button');
const titulo = document.querySelector('h1');

button.addEventListener('click', () => {
    const value = confirm ('Deseja realmente sair?');

    if (!value) return;

    button.style.display = 'none';
    titulo.textContent = 'Saindo.';

    setTimeout (() => {
        titulo.textContent = 'Saindo..';
    }, 1000);

    setTimeout (() => {
        titulo.textContent = 'Saindo...';
    }, 2000);
    
    setTimeout (() => {
        window.location.href = './login.html';
    }, 3000);

})