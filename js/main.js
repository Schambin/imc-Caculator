import { Modal } from './modal.js'

const form = document.querySelector('form')
const weightInput = document.querySelector('#weightInput')
const heightInput = document.querySelector('#heightInput')
const errorMessage = document.querySelector('.errorMessage')

form.onsubmit = (e) => {
    e.preventDefault();

    const weight = weightInput.value;
    const height = heightInput.value;

    function isNegativeNumber(weight, height) {
        if (weight === "" || height === "") {
            errorMessage.classList.add('open');
            errorMessage.textContent = 'Preencha os dois campos';
            setTimeout(() => {
                errorMessage.classList.remove('open');
            }, 3000);
            return;
        } else if (weight <= 0 || height <= 0) {
            errorMessage.classList.add('open');
            errorMessage.textContent = 'Digite um número positivo';
            setTimeout(() => {
                errorMessage.classList.remove('open');
            }, 3000);
            return;
        }
    }

    isNegativeNumber(weight, height);
    if (errorMessage.classList.contains('open')) return;

    const result = calcIMC(weight, height).toFixed(2);
    const message = `Seu IMC é de ${result}`;

    Modal.message.textContent = message;
    Modal.toggle();

};

function calcIMC(weight, height) {
    return weight / ((height / 100) ** 2);
};