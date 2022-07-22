window.onload = function onload() {

    let rootDiv = document.querySelector("#root");
    rootDiv.innerHTML =`
    <h1 id="countdown">Click the button to commence countdown.</h1>
    <button id="btn">Start!</button>
    <div id="launch"></div>
    `;

    let startBtn = document.querySelector("#btn");
    let countdownTimer = document.querySelector("#countdown");
    let launch = document.querySelector("#launch");
    
    startBtn.onclick = () => {
        let counter = 10;
        const myInterval = setInterval(function() {
            countdownTimer.innerHTML = counter;
            if (counter === 0){
                startBtn.remove();
                launch.innerHTML = `
                <br>
                <img src="https://media2.giphy.com/media/5xaOcLGm3mKRQuDYCgU/giphy.gif?cid=ecf05e47b1dwswsc0pq67bpmzus3xcsgv8hmxnjz6nk04ba2&rid=giphy.gif&ct=g"/>
                `;
                countdownTimer.innerHTML = `${counter} ----> Time to take meowff (๑✪ᆺ✪๑)`;
                return clearInterval(myInterval);
            }
            counter--;
        }, 1000);
        
    }
}