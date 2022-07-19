let carObj = {
    manufacturer: "Toyota",
    makeAndModel: "Avanza 2022 G",
    engine: "2NR-VE (1.5)",
    bodyStyle: "SUV"
};

const carManufacturer = document.getElementById("manufacturer");
carManufacturer.innerHTML = `Manufacturer: ${carObj.manufacturer}`;
const carMakeAndModel = document.getElementById("make-model");
carMakeAndModel.innerHTML = `Make and Model: ${carObj.makeAndModel}`;
const carEngine = document.getElementById("engine");
carEngine.innerHTML = `Engine: ${carObj.engine}`;
const carBodyStyle = document.getElementById("body-style");
carBodyStyle.innerHTML = `Body Style: ${carObj.bodyStyle}`;

// document.getElementById("manufacturer").innerHTML = `Manufacturer: ${carObj.manufacturer}`;
// document.getElementById("make-model").innerHTML = `Make and Model: ${carObj.makeAndModel}`;
// document.getElementById("engine").innerHTML = `Engine: ${carObj.engine}`;
// document.getElementById("body-style").innerHTML = `Body Style: ${carObj.bodyStyle}`;