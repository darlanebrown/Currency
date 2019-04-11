function eventClick (event) {
  var bar = event.toElement.id;
  if(bar == 'first-currency') {
    alert("1.13 EUR = 1 USD");
  } else if (bar == 'second-currency') {
    alert("1 USD = 1 USD");
  } else if (bar == 'third-currency') {
    alert("1 AUD = 0.722 USD");
  } else if (bar == 'fourth-currency') {
    alert("1 GBP = 1.31 USD");
  } else {
    alert("1 BRL R = 0.26 USD");
  }
}
var currencies = document.getElementsByClassName("currency");
for (var i = 0; i < currencies.length; i++) {
  var elem = currencies[i];   
    elem.addEventListener('click', eventClick);
}
