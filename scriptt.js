let pocket = Number.parseFloat(prompt("Сколько у вас денег?"));
let ApplesQty = Number.parseInt(prompt("Сколько куплено яблок?"));
let BreadQty = Number.parseInt(prompt("Сколько куплено батонов хлеба?"));
let ApplesPrc = Number.parseFloat(prompt("Сколько стоит яблоко?"));
let BreadPrc = Number.parseFloat(prompt("Сколько стоит батон?"));
let result = pocket >= (ApplesQty*ApplesPrc + BreadQty*BreadPrc);
document.body.innerHTML = result;