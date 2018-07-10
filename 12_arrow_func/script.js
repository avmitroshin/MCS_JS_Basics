let pocket = Number.parseFloat(prompt("Сколько у вас денег?"));
let ApplesQty = Number.parseInt(prompt("Сколько куплено яблок?"));
let BreadQty = Number.parseInt(prompt("Сколько куплено батонов хлеба?"));
let ApplesPrc = Number.parseFloat(prompt("Сколько стоит яблоко?"));
let BreadPrc = Number.parseFloat(prompt("Сколько стоит батон?"));
let result = pocket >= (ApplesQty*ApplesPrc + BreadQty*BreadPrc);

function haveEnough(pocket, applsQty,breadQty,applesPrc,breadPrc){
  return pocket >= (ApplesQty*ApplesPrc + BreadQty*BreadPrc) ? "Вам хватает денег" : "Вам НЕ хватает денег";
}

console.log(haveEnough(100,5,3,15,10));
