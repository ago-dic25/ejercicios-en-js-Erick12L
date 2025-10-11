let secuencia = [];
let reproducirBtn = document.getElementById('reproducirBtn');
let limpiarSecuenciaBtn = document.getElementById('limpiarBtn');

document.addEventListener('keydown', function(e) {
    if (!e.code.startsWith('Key')) return; 
    let key = e.code.replace('Key', '');
    let keyCode = key.charCodeAt(0);
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    guardarSecuencia(keyCode);
});

function guardarSecuencia(codigoTecla) {
    secuencia.push(codigoTecla);
}

function reproducirSecuencia() {
    for (let i = 0; i < secuencia.length; i++) {
        setTimeout(function() {
            let audioEnSecuencia = document.querySelector(`audio[data-key="${secuencia[i]}"]`);
            if (!audioEnSecuencia) return;
            audioEnSecuencia.currentTime = 0;
            audioEnSecuencia.play();
        }, i * 500);
    }
}

function limpiarSecuencia() {
    secuencia = [];
}

reproducirBtn.addEventListener('click', reproducirSecuencia);
limpiarSecuenciaBtn.addEventListener('click', limpiarSecuencia);