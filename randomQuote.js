
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
})
  .then(function(data) {
    console.log(data);
    len = data.length;
    rand = Math.floor(Math.random()*(len+1));
    document.getElementById('Quote').innerHTML = data[rand].text;
    document.getElementById('Author').innerHTML = data[rand].author;
});