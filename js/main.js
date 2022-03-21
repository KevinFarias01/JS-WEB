// Teclas Audio Pom 1.0

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// ''para cada'' = for 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    // Template String= usar crase + cifrão-chaves
    const idAudio = `#som_${instrumento}`;

    //função anônima
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //quando a tecla é apertada =
    tecla.onkeydown = function (evento) {
        console.log(evento.code) //mostrar no console qual o cód da tecla apertada...
        if (evento.code === 'Space' || evento.code === 'Enter') {  // 3x =    || = 'ou'
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

};


