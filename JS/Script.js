document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('TextInBar');
    let currentInput = '';
    let previousInput = '';
    let operation = null;

    const updateDisplay = (value) => {
        display.textContent = value;
    };

    const clear = () => {
        currentInput = '';
        previousInput = '';
        operation = null;
        updateDisplay('');
    };

    const deleteLast = () => {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === '') {
            updateDisplay('');
        } else {
            updateDisplay(currentInput);
        }
    };

    const appendNumber = (number) => {
        if (currentInput.length >= 11) return; // Evitar más de 11 números
        if (number === '.' && currentInput.includes('.')) return;
        currentInput = currentInput.toString() + number.toString();
        updateDisplay(currentInput);
    };

    const chooseOperation = (op) => {
        if (currentInput === '') return;
        if (previousInput !== '') {
            compute();
        }
        operation = op;
        previousInput = currentInput;
        currentInput = '';
    };

    const compute = () => {
        let computation;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }
        currentInput = computation;
        operation = null;
        previousInput = '';
        updateDisplay(currentInput);
    };

    const buttons = document.querySelectorAll('.DivTeclado div div');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            if (button.classList.contains('DivBorrar')) {
                deleteLast();
            } else if (button.classList.contains('DivBorrarT')) {
                clear();
            } else if (button.classList.contains('DivAplySuma')) {
                chooseOperation('+');
            } else if (button.classList.contains('DivAplyResta')) {
                chooseOperation('-');
            } else if (button.classList.contains('DivAplyMulti')) {
                chooseOperation('*');
            } else if (button.classList.contains('DivAplyDivicion')) {
                chooseOperation('/');
            } else if (button.classList.contains('DivIgual')) {
                compute();
            } else {
                appendNumber(buttonText);
            }
        });
    });

    clear();
});

//-----------------------------------------------------Cambio se Estilos----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const divNums = document.querySelectorAll('.DivNum1, .DivNum2, .DivNum3, .DivNum4, .DivNum5, .DivNum6, .DivNum7, .DivNum8, .DivNum9, .DivNum0, .DivPoint');

    divNums.forEach(div => {
        div.addEventListener('click', function () {
            this.classList.add('clicked');

            setTimeout(() => {
                this.classList.remove('clicked');
            }, 100);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const divEsp = document.querySelectorAll('.DivAplyDivicion, .DivAplyMulti, .DivAplySuma, .DivIgual, .DivAplyResta, .DivBorrar, .DivBorrarT');

    divEsp.forEach(div => {
        div.addEventListener('click', function () {
            this.classList.add('clicked');

            setTimeout(() => {
                this.classList.remove('clicked');
            }, 100);
        });
    });
});
