// Escrever nota atribuida

const notaSelecionada = document.querySelectorAll('.componente__escala__nota');

const notaAtribuida = document.querySelector('.componenteSecundario__resultado__texto');

notaSelecionada.forEach(elemento => {
    elemento.addEventListener('click', (evento) => {
        const notaSelecionadaHover = document.querySelector('.componente__escala__nota__selecionado');
        console.log(evento)
        if(notaSelecionadaHover) {
            notaSelecionadaHover.classList.remove('componente__escala__nota__selecionado');
        }
        elemento.classList.add('componente__escala__nota__selecionado');
        notaAtribuida.innerHTML = `You selected ${evento.target.innerHTML} out of 5`;      
    })
});

// SUBMETER ----------------------

const submeter = document.querySelector('.componente__submeter');

submeter.addEventListener('click', (evento) => {
    const componentes = document.querySelectorAll('.componente');

    componentes[0].classList.add('ocultar');
    
    componentes[1].classList.remove('ocultar');
});
