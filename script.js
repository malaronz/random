function digitToWord(digit) {
    const digitsMap = {
    '0': 'ноль',
    '1': 'один',
    '2': 'два',
    '3': 'три',
    '4': 'четыре',
    '5': 'пять',
    '6': 'шесть',
    '7': 'семь',
    '8': 'восемь',
    '9': 'девять'
    };
    
    return digitsMap[digit];
    }
    
    function analyzeNumber(number) {
    const sign = Math.sign(number);
    const absNumber = Math.abs(number);
    
    const hundreds = Math.floor(absNumber / 100);
    const tens = Math.floor(absNumber / 10) % 10;
    const units = absNumber % 10;
    
    let result = '';
    
    if (hundreds > 0) {
    if (hundreds === 1) {
    result += 'сто ';
    } else if (hundreds === 2) {
    result += 'двести ';
    } else if (hundreds === 3 || hundreds === 4) {
    result += digitToWord(hundreds) + 'ста ';
    } else {
    result += digitToWord(hundreds) + 'сот ';
    }
    }
    
    if (tens > 1) {
    const tensWord = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'][tens - 2];
    result += tensWord + ' ';
    }
    
    if (tens === 1) {
    const teensWord = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'][units];
    result += teensWord + ' ';
    } else {
    if (units > 0) {
    result += digitToWord(units) + ' ';
    }
    }
    
    return sign === -1 ? `минус ${result.trim()}` : result.trim();
    }
    


let minInput = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxInput = parseInt(prompt('Максимальное знание числа для игры','100'));
let minValue = isNaN(parseInt(minInput)) ? 0 : parseInt(minInput) < -999 ? -999 : parseInt(minInput); // Если пользователем была введена строка, то присваивается число 0. Если было введено число, меньше -999, то присваивается число -999
let maxValue = isNaN(parseInt(maxInput)) ? 100 : parseInt(maxInput) > 999 ? 999 : parseInt(maxInput); // Если пользователем была введена строка, то присваивается число 110. Если было введено число, юольше 999, то присваивается число 999
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const successPhrases = ['Ура! Я угадал!', 'Мне удалось!', 'Вот это да!'];
const successPhrases1 = ['Да это легко! Ты загадал ', 'Наверное, это число ', 'Уверен, что это ', 'Вот оно! Ты выбрал ',];




const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${analyzeNumber(answerNumber)}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = successPhrases1[Math.floor(Math.random() * successPhrases1.length)] + analyzeNumber(answerNumber);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
	if (gameRun) {
		if (minValue === maxValue || minValue === answerNumber) {
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 1) ?
				`Вы загадали неправильное число!\n\u{1F914}` :
				`Я сдаюсь..\n\u{1F92F}`;
			answerField.innerText = answerPhrase;
			gameRun = false;
		} else {
			maxValue = answerNumber - 1;
			answerNumber = Math.floor((minValue + maxValue) / 2);
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ? `Вы загадали число ${analyzeNumber(answerNumber)}?` :
				(phraseRandom === 1) ? `Да это легко! Ты загадал ${analyzeNumber(answerNumber)}!` :
					`Наверное, это число ${analyzeNumber(answerNumber)}.`;
			answerField.innerText = answerPhrase;
		}
	}
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
    answerField.innerText = successPhrases[Math.floor(Math.random() * successPhrases.length)];
    gameRun = false;
    }
    })

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Введите значение минимума'));
    maxValue = parseInt(prompt('Введите значение максимума'));
    gameRun = true;
    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${analyzeNumber(answerNumber)}?`;
    });
