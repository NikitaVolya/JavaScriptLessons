
function main() {
    const content = document.getElementById('content');
    const button = document.getElementById('btn-event');
    const infoBlock = document.getElementById('info');
    const title = document.getElementById('input-title');
    const pressTitle = document.getElementById('input-press');

    button.addEventListener('mouseover', (e) => {
        infoBlock.style.display = 'block';
    })

    infoBlock.addEventListener('mouseleave', (e) => {
        infoBlock.style.display = 'none';
    });

    document.addEventListener('keydown', (e) => {
        
        console.log('!!!')
        if (e.repeat)
            return;

        let top = Number(content.style.top.replace('px', ''));
        let left = Number(content.style.left.replace('px', ''));

        switch (e.key)
        {
            case "ArrowDown":
                content.style.top = String(top + 20) + 'px';
                break;
            case "ArrowUp":
                content.style.top = String(top - 20) + 'px';
                break;
            case "ArrowLeft":
                content.style.left = String(left - 20) + 'px';
                break;
            case "ArrowRight":
                content.style.left = String(left + 20) + 'px';
                break;
            default:
                return;
        }
        title.innerText = 'Key Down!!!';
    });

    document.addEventListener('keyup', (e) => {
        switch (e.key)
        {
            case "ArrowDown":
            case "ArrowUp":
            case "ArrowLeft":
            case "ArrowRight":
                title.innerText = 'Key Up!!!'
                break;
            default:
                return;
        }
    });

    document.addEventListener('keypress', (e) => {
        pressTitle.innerText = 'Pressed: ' + e.key;
    });
}

window.addEventListener("DOMContentLoaded", main);