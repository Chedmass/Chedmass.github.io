let APIKEY = "e7d3dfcdd8dc4fb29a8ecc938b5416fa";

let request = new XMLHttpRequest();
let currencies = `EUR,JPY,GBP,AUD,CAD,CHF,CNH,HKD,NZD`

request.open("GET",`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${APIKEY}&symbols=${currencies},UAH`);
request.send();

request.onload = () => {
    console.log(request);
    if (request.status == 200){
        let rates = JSON.parse(request.response);
        exchangeData = rates.rates;
        console.log(rates);
        
        let uah = parseFloat(rates.rates.UAH);
        let usd = uah;

        let insertTable = `
        <tr>
            <th>Currency code</th>
            <th>Exchange rate</th>
        </tr>
        <tr><th>USD</th><th>${usd.toFixed(2)} UAH</th></tr>`;
        let insertCurrencies = `<option value="USD">USD</option>`;

        currencies.split(',').forEach(currency => {
            let rate = (uah/parseFloat(rates.rates[currency])).toFixed(2);
            insertTable += `<tr><th>${currency}</th><th>${rate} UAH</th></tr>`;
            insertCurrencies += `<option value="${currency}">${currency}</option>`;
        });
        
        document.getElementById('rates').innerHTML = insertTable;
        document.getElementById('currencies').innerHTML = insertCurrencies;

    } else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}