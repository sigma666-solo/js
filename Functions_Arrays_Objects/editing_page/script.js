document.getElementById("button").addEventListener("click", function() {
    document.getElementById("title").textContent = "Новая страница";
    document.getElementById("text").textContent = "Текст изменен!";
    document.getElementById("title").style.color = "blue";
    document.getElementById("title").style.fontSize = "48px";
});
