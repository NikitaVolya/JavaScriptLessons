
function mouseHandler(e) {
    const info = document.getElementById('info');

    const x = e.offsetX;
    const y = e.offsetY;

    info.textContent = `Mouse: (${x}, ${y})`;
}

document.addEventListener('DOMContentLoaded', () => {
    const field = document.getElementById('field');
    field.addEventListener('mousemove', mouseHandler);
});