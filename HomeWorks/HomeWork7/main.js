
let colors = []

function saveColors() {
    let rep = '';
    let first = true;
    for (let i in colors)
    {
        let color = colors[i];
        if (!first)
            rep += '|';
        rep += `${color.name}_${color.type}_${color.color}_${color.code}`;
        first = false;
    }
    document.cookie = `colors=${rep}; path=/HomeWorks/HomeWork7/; max-age=3600`;
}

function loadColors() {
    const cookies = document.cookie.split('; ');
    for(let c of cookies) {
        const [key, value] = c.split('=');
        if (key === 'colors')
        {
            let input_colors = value.split('|');
            for (let i in input_colors)
            {
                let input_color = input_colors[i];
                let [name, type, color, code] = input_color.split('_');
                console.log(name);
                addColorCart(name, type, color, code);
            }
            return;
        }
    }
}

function addColorCart(name, type, color, code) {

    if (colors.find(e => e.name == name))
    {
        alert(`color with name "${name}" is already existe`);
        return;
    }
    colors.push({
            name: name,
            type: type,
            color: color,
            code: code
        });
    saveColors();
    let container = document.getElementById('colorsContainer');

    container.innerHTML += `
        <div class="colorContainer" style="background-color: ${color};">
            <div class="colorData">
                <b>${name}</b>
                <p>${type}</p>
                <b>${code}</b>
            </div>
        </div>`;
}


document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('colorForm');

    loadColors();

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);

        if (!/^[a-zA-Z]+$/.test(formData.get('name')))
        {
            alert('Invalide name');
            return;
        }
        
        let color_code = formData.get('code');
        let color_style = '#000000';
        switch (formData.get('type'))
        {
            case 'rgb':
                if (!/^\s*[\d]{1,3}\s*,\s*[\d]{1,3}\s*,\s*[\d]{1,3}\s*$/.test(color_code))
                {
                    alert('Invalide code');
                    return;
                }
                color_style = `rgb(${color_code})`;
                break;
            case 'rgba':
                if (!/^\s*[\d]{1,3}\s*,\s*[\d]{1,3}\s*,\s*[\d]{1,3},\s*(1|0.\d+)\s*$/.test(color_code))
                {
                    alert('Invalide code');
                    return;
                }
                color_style = `rgba(${color_code})`;
                break;
            case 'hex':
                if (!/^\s*#[\dA-F]{6}\s*$/.test(color_code))
                {
                    alert('Invalide code');
                    return;
                }
                color_style = color_code;
                break;
        }
        
        addColorCart(formData.get('name'), formData.get('type'), color_style, color_code);
    })
});