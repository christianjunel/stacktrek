window.onload = function onload() {

    let fahrenheit = document.querySelector('#fahrenheit');
    let submitBtn = document.querySelector("#btn");

    const convertToF = () => {
        let celsius = document.querySelector("#celsius").value;
        return (celsius * 1.8) + 32;
    }

    submitBtn.onclick = () => {
        fahrenheit.value = `${convertToF().toFixed(2)} °F`;
    }

}