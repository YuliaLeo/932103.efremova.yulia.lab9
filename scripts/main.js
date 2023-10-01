const signs = ['+', '-', '*', '/', '.'];
const clearSign = 'C';
const removeOneSymbolSign = '<-';
const equalSign = '=';

const btnsContainer = document.querySelector('.calculator__btns');
const input = document.querySelector('.calculator__input input');

btnsContainer.addEventListener('click', ($event) => {
    const el = $event.target;
    const inputVal = input.value;

    if (el.classList.contains('calculator__btn')) {
        const newSymbol = el.textContent;

        hasUnallowedSymbols(inputVal) ? input.value = '' : calc(inputVal, newSymbol);
    }
});

const hasUnallowedSymbols = (inputVal) => {
   return !((inputVal).match(/[0-9%\/*\-+=]/) || inputVal === '');
};

const calc = (inputVal, newSymbol) => {
    if (newSymbol === equalSign) {
        clickEqual(inputVal);
    }
    else if (newSymbol === removeOneSymbolSign) {
        input.value = inputVal.substring(0, inputVal.length - 1);
    }
    else if (newSymbol === clearSign) {
        input.value = '';
    }
    else {
        signs.includes(newSymbol) ? clickSign(inputVal, newSymbol) : input.value += newSymbol;
    }
}

const clickEqual = (inputVal) => {
    if (isLastSymbolSign(inputVal)) {
        input.value = inputVal.substring(0, inputVal.length - 1);
    }

    input.value = eval(input.value);
};

const clickSign = (inputVal, newSymbol) => {
    if (isFirstSymbolSign(inputVal) || isLastSymbolSign(inputVal)) {
        input.value = input.value;
    }
    else {
        input.value += newSymbol;
    }
};

const isFirstSymbolSign = (inputVal) => {
    return inputVal.length === 0;
};

const isLastSymbolSign = (inputVal) => {
    const lastSymbol = inputVal.slice(inputVal.length - 1, inputVal.length);
    return signs.includes(lastSymbol);
};
