console.log(123);

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // stop the function from running completely
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.remove('playing');
});

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');

// keys.forEach((key) => {
//     key.addEventListener('transitionend', removeTransition);
// });
