//THIS IS JUST A PRACTICE EXCERCISE

window.onload = function onload() {
    
    let info = document.getElementById("info");
    let result = document.getElementById("result");
    //basic function
    /*function isWinner(dragons, bullets) {   
        info.innerHTML = `There are ${dragons} dragons, and you have ${bullets} bullets. Did you win?`;
        return bullets >= dragons * 2;
    }
    result.innerHTML = isWinner(5, 10);*/

    //arrow function
    const getResult = (dragons, bullets) => {return bullets >= dragons * 2};
    let noOfDragons = 5;
    let noOfBullets = 10;
    info.innerHTML = `There are ${noOfDragons} dragons, and you have ${noOfBullets} bullets. Did you win?`;
    result.innerHTML = getResult(noOfDragons, noOfBullets);
    
};