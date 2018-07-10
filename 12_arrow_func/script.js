let pocket = Number.parseFloat(prompt("Сколько у вас денег?"));
let applesQty = Number.parseInt(prompt("Сколько куплено яблок?"));
let breadQty = Number.parseInt(prompt("Сколько куплено батонов хлеба?"));
let applesPrc = Number.parseFloat(prompt("Сколько стоит яблоко?"));
let breadPrc = Number.parseFloat(prompt("Сколько стоит батон?"));

function haveEnough(pocket, applesQty,breadQty,applesPrc,breadPrc){
  return pocket >= (applesQty*applesPrc + breadQty*breadPrc) ? "Вам хватает денег" : "Вам НЕ хватает денег";
}

console.log(haveEnough(pocket,applesQty,breadQty,applesPrc,breadPrc));
