
    function conclusion() {
    const userSum = document.querySelector('#userSum').value
    const result = document.querySelector('#result')

    const uahBills = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    let availableBills = {
        1000: 10,
        500: 10,
        200: 10,
        100: 10,
        50: 10,
        20: 10,
        10: 10,
        5: 10,
        2: 10,
        1: 10
    }

    if (isNaN(userSum) || userSum <= 0) {
        result.innerHTML = 'Введите корректную сумму.';
        return;
    }

    let remainingSum = userSum;
    let billsCount = 0;
    let output = '';

    for (let item of uahBills) {
        const billCount = Math.min(Math.floor(remainingSum / item), availableBills[item]);
        remainingSum -= billCount * item;
        billsCount += billCount;

        if (billCount > 0) {
            output += `${item}x${billCount}, `;
        }
    }

    if (remainingSum === 0 && billsCount <= 40) {
        result.innerHTML = `<p style = "border-bottom: 1.5px solid green">Сумма: ${userSum},  <p style = "color: green">Купюры: ${output} </p><p style = "border-bottom: 1.5px solid green">Количество купюр: ${billsCount}</p>`;
    } else {
        result.innerHTML = 'У банкомата не хватает купюр, максимальное количество купюр в банкомате - 40. Попробуйте сумму меньше данной';
    }
}
