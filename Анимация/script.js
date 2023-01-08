const header = document.querySelector('.site-header');
const sinvol = document.querySelector('.sinvol');
document.getElementById('input').onchange =
    function () {
    if (this.checked) {
        header.classList.add('site-header-bg');
        sinvol.classList.add('sinvol-animation');

    }
    else {
        header.classList.remove('site-header-bg');
        sinvol.classList.remove('sinvol-animation');

    };
};

const scarySound = () => {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = './liakun.mp3';
    audio.play();
}

sinvol.onclick = scarySound;


