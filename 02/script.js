document.body.style.backgroundColor =  prompt("Какой сделать цвет страницы?");
document.getElementsByClassName("page")[0].style.color = prompt("Какой сделать цвет текста?");
document.querySelector("span.name").textContent = prompt("Имя?");
document.getElementsByTagName("img")[0].setAttribute("src",prompt("Введите адрес картинки"));
document.getElementsByClassName("shortBio")[0].textContent =  prompt("Введите текст страницы");
document.getElementsByClassName("shortBio")[0].setAttribute("class",document.getElementsByClassName("shortBio")[0].getAttribute("class")+" animated");