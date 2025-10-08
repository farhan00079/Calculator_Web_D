let expression = '';

function appendValue(value) {
    expression += value;
    document.getElementById('result').value = expression;
}

function clearResult(){
    expression = '';
    document.getElementById('result').value = '';
}

function calculateResult(){
    try {
        expression = eval(expression).toString();
        document.getElementById('result').value = expression;
    } catch {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}