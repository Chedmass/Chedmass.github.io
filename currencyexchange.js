function checkTextarea() {
    if (document.getElementById('currencyA').value>99999999.99)
    {
        document.getElementById('currencyA').value = 99999999.99;
    }
    valueA = document.getElementById('currencyA').value;
    UAHexchangeRate = parseFloat(exchangeData.UAH);
    
    console.log(document.getElementById('currencies').value)
    if (document.getElementById('currencies').value=="USD")
    document.getElementById('currencyB').value=(valueA*UAHexchangeRate).toFixed(2);
    else
    document.getElementById('currencyB').value=(valueA*UAHexchangeRate/parseFloat(exchangeData[document.getElementById('currencies').value])).toFixed(2);
}