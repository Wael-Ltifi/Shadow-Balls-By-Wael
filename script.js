function updateLightPosition(x, y) {
    document.body.style.setProperty('--mx', x - (window.innerWidth / 2));
    document.body.style.setProperty('--my', y - (window.innerHeight / 2));
}

window.addEventListener('mousemove', (e) => {
    updateLightPosition(e.clientX, e.clientY);
});

window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateLightPosition(touch.clientX, touch.clientY);
    }
}, { passive: true });
