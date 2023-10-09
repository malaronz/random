let minInput = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxInput = parseInt(prompt('Максимальное знание числа для игры','100'));
let minValue = isNaN(parseInt(minInput)) ? 0 : parseInt(minInput) < -999 ? -999 : parseInt(minInput);
let maxValue = isNaN(parseInt(maxInput)) ? 100 : parseInt(maxInput) > 999 ? 999 : parseInt(maxInput);
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const successPhrases = ['Ура! Я угадал!', 'Мне удалось!', 'Вот это да!'];
const successPhrases1 = ['Да это легко! Ты загадал ', 'Наверное, это число ', 'Уверен, что это ', 'Вот оно! Ты выбрал ',];




const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

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
            answerField.innerText = successPhrases1[Math.floor(Math.random() * successPhrases1.length)] + answerNumber;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
        const phraseRandom = Math.round( Math.random());
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
        answerField.innerText = successPhrases1[Math.floor(Math.random() * successPhrases1.length)] + answerNumber;
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
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    });
