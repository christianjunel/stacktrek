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
                <h2>The cat rocket has launched!</h2>
                <img src="https://media2.giphy.com/media/5xaOcLGm3mKRQuDYCgU/giphy.gif"/>
                `;
                countdownTimer.innerHTML = `${counter} (๑✪ᆺ✪๑)`;
                clearInterval(myInterval);
            }
            counter--;
        }, 1000);
        
    }
}