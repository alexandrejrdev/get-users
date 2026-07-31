const btnBuscar = document.querySelector('button');
const inputBuscar = document.querySelector('input');


const resource = 'users';

async function getUsers() {

    const digitoImput = Number(inputBuscar.value);

    const response = await fetch(`http://localhost:3000/${resource}`);
    const data = await response.json();

    const resultDigitoImput = data.find ( user => user.id === digitoImput );

    if (!resultDigitoImput) {
        console.log(`Usuario com id ${digitoImput} não encontrado.`);
        return;
    }

    console.log(resultDigitoImput);
}


btnBuscar.addEventListener('click', getUsers);