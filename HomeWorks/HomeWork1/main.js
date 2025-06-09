

function create_node(value, left, right, is_leaft) {
    return {
        value: value,
        left: left,
        right: right,
        is_leaft: is_leaft
    }
}

function create_number_node(value) {
    return create_node(Number(value), null, null, true);
}

function create_default_opearot_node(operator, number, root) {
    return create_node(
        operator, 
        root, 
        create_number_node(number), 
        false
    );
}

function create_priority_operator_node(operator, number, root) {
    if (root.is_leaft) {
        return create_default_opearot_node(operator, number, root);
    } else {
        let tmp = root.right;
        root.right = create_node(operator, tmp, create_number_node(number), false);
        return root; 
    }
}

function get_opeartor_create_fucntion(operator) {
    switch (operator) {
        case '+': case '-': 
            return create_default_opearot_node;
        case '*': case '/':
            return create_priority_operator_node;
        default:
            return null;
    }
}

function IsNumber(n) {
    return Number(n) == n;
}

function get_operator_calc_function(operator) {
    switch (operator) {
        case '+': 
            return (a, b) => a + b;
        case '-':
            return (a, b) => a - b;
        case '*':
            return (a, b) => a * b;
        case '/':
            return (a, b) => {
                if (b == 0)
                    return 0;
                return a / b;
            }
    }
}

function translate_to_tree(text) {
    let root = null;
    let number = '';
    let operator = '';
    for(let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            continue;
        } else if (IsNumber(text[i])) {
            number += text[i];
        } else {
            if (number != '' && operator != '') {
                let f = get_opeartor_create_fucntion(operator);
                if (f == null)
                    return null;
                root = f(operator, number, root);
                operator = '';
                number = '';
            } else if (number != ''){
                root = create_number_node(number);
                number = '';
            }
            operator += text[i];
        }
    }

    if (number != '' && operator != '') {
        let f = get_opeartor_create_fucntion(operator);
        if (f == null)
            return null;
        root = f(operator, number, root);
    }

    return root;
}

function calculate_tree(tree) {
    if (tree === null)
        return null;
    if (tree.is_leaft)
        return tree.value;
    let f = get_operator_calc_function(tree.value);
    return f(
        calculate_tree(tree.left),
        calculate_tree(tree.right)
    );
}

function calc_text(text) {
    return calculate_tree(translate_to_tree(text));
}

function main() {
    while (true) {
        let text = prompt("Your equation [or exit to quit]: ");
        if (text == 'exit')
            return;
        alert(`${text} = ${calc_text(text)}`);
    }
}

main();