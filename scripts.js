function generateRandomNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    if (min >= max) {
        alert("O valor mínimo precisa ser menor que o valor máximo");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector(".result-number").textContent = result;

}
