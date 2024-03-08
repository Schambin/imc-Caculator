export const Modal = {
    wrapper: document.querySelector('.modalWrapper'),
    message: document.querySelector('.title'),
    buttonClose: document.querySelector('.close'),

    toggle() {
        this.wrapper.classList.toggle('open')
    },
    close() {
        this.wrapper.classList.remove('open')
    }
};

Modal.buttonClose.onclick = () => {
    Modal.toggle()
};

window.addEventListener('keydown', handlekKeyDown)

function handlekKeyDown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
};