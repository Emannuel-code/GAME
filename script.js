const alvo = document.getElementById('alvo');
const raio = 20;
let pontuacao = 0;

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function atualizaAlvo() {
    const xAleatorio = sorteiaPosicao(window.innerWidth - raio * 2);
    const yAleatorio = sorteiaPosicao(window.innerHeight - raio * 2);

    alvo.style.left = `${xAleatorio}px`;
    alvo.style.top = `${yAleatorio}px`;
}

function dispara(evento) {
    const x = evento.clientX;
    const y = evento.clientY;

    const alvoRect = alvo.getBoundingClientRect();

    if (
        x >= alvoRect.left &&
        x <= alvoRect.right &&
        y >= alvoRect.top &&
        y <= alvoRect.bottom
    ) {
        pontuacao++; 
        document.getElementById('pontuacao').textContent = pontuacao;
    } else {
        pontuacao = 0 
        document.getElementById('pontuacao').textContent = pontuacao;
    }
}

atualizaAlvo();
setInterval(atualizaAlvo, 1000);

document.body.addEventListener('click', dispara);
