const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

function updateLightPosition(x, y) {
    document.body.style.setProperty('--mx', x - centerX);
    document.body.style.setProperty('--my', y - centerY);
    triggerBallReactions(x, y);
}

window.addEventListener('mousemove', (e) => updateLightPosition(e.clientX, e.clientY));
window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateLightPosition(touch.clientX, touch.clientY);
    }
}, { passive: true });

// Setup: add a speech bubble to each ball
document.querySelectorAll('.ball').forEach(ball => {
    const speech = document.createElement('div');
    speech.classList.add('speech-bubble');
    speech.textContent = '';
    ball.appendChild(speech);
    speech.style.display = 'none';
});

function triggerBallReactions(mouseX, mouseY) {
    const balls = document.querySelectorAll('.ball');

    balls.forEach(ball => {
        const rect = ball.getBoundingClientRect();
        const ballX = rect.left + rect.width / 2;
        const ballY = rect.top + rect.height / 2;

        const dx = ballX - mouseX;
        const dy = ballY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const bubble = ball.querySelector('.speech-bubble');

        if (distance < 60) {
            bubble.textContent = "SAYEB **** !!!";
            bubble.className = 'speech-bubble danger';
            bubble.style.display = 'block';
        } else if (distance < 120) {
            bubble.textContent = "9os el dhaw ya LBIG !!";
            bubble.className = 'speech-bubble warning';
            bubble.style.display = 'block';
        } else if (distance < 200) {
            bubble.textContent = "ma nor9douch m3akom ha llila el kalba !";
            bubble.className = 'speech-bubble mild';
            bubble.style.display = 'block';
        }
        else if (distance < 250) {
            bubble.textContent = "chfamma ya **** !!?";
            bubble.className = 'speech-bubble mild';
            bubble.style.display = 'block';
        }
         else {
            bubble.style.display = 'none';
        }
    });
}
