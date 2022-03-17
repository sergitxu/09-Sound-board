const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    let buttonElement = document.createElement('button');

    buttonElement.classList.add('btn');

    buttonElement.innerText = sound;

    buttonElement.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(buttonElement);
});

function stopSounds() {
    sounds.forEach(sound => {
        let currentSound = document.getElementById(sound);
        currentSound.pause();
        currentSound.currentTime = 0;
    });
}