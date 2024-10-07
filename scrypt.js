document.getElementById('convert').addEventListener('click', function () {
    const currencyOne = document.getElementById('currency-one').value;
    const currencyTwo = document.getElementById('currency-two').value;
    const amountOne = document.getElementById('amount-one').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[currencyTwo];
            document.getElementById('rate').innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
            document.getElementById('amount-two').value = (amountOne * rate).toFixed(2);
        });
});

function updateExchangeRates() {
    fetch('https://api.exchangerate-api.com/v4/latest/UAH')
        .then(response => response.json())
        .then(data => {
            document.getElementById('rate-usd').innerText = (1 / data.rates.USD).toFixed(2);
            document.getElementById('rate-eur').innerText = (1 / data.rates.EUR).toFixed(2);
            document.getElementById('rate-gbp').innerText = (1 / data.rates.GBP).toFixed(2);
            document.getElementById('rate-pln').innerText = (1 / data.rates.PLN).toFixed(2);
            document.getElementById('rate-uah').innerText = (1 / data.rates.UAH).toFixed(2);
            document.getElementById('rate-try').innerText = (1 / data.rates.TRY).toFixed(2);
        });
}

window.onload = updateExchangeRates;
setInterval(updateExchangeRates, 3600000);


