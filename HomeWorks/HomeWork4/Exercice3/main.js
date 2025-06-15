
function setPosition(object, vector) {
    object.style.left = String(vector[0]) + 'px';
    object.style.top = String(vector[1]) + 'px';
}

function getMousePosition(event) {
    return [event.clientX, event.clientY];
}

document.addEventListener('click', e => {


    const ball = document.getElementById('ball');
    const field = document.getElementById('field');


    let fWidth = field.clientWidth;
    let fHeight = field.clientHeight;
    
    let border = fWidth * 0.08;

    let ballPosition = getMousePosition(e);
    

    ballPosition[0] = Math.max(ballPosition[0], border);
    ballPosition[0] = Math.min(ballPosition[0], fWidth - border);
    
    ballPosition[1] = Math.max(ballPosition[1], yBorder);
    ballPosition[1] = Math.min(ballPosition[1], fHeight - border);
    
    ballPosition[0] -= 50;
    ballPosition[1] -= 50;
    
    console.log(ballPosition);
    
    setPosition(ball, ballPosition);
});