// Teclas Audio Pom 1.0

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

};


