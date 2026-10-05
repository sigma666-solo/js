document.getElementById("button").addEventListener("click", function() {
    let nameInput = document.getElementById("name").value;
    let resultDiv = document.getElementById("result");

    if (nameInput === "" || nameInput.trim() === "") {
        resultDiv.textContent = "Введите имя";
    } else {
        resultDiv.textContent = "Привет, " + nameInput + "!";
    }
});
