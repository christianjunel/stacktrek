window.onload = function onload() {

    let promise = new Promise((resolve, reject) => {
        
        if (document.readyState === 'complete') {
            resolve();
        } else {
            reject();
        }

    });

    promise.then(() => {

        const cjInfo = { 
            name: 'Christian Junel Moriones',
            age: 25,
            weightInKG: 140,
            heightInCM: 182,
            weightGoalInKG: 90,
            activity: 'Sedentary',
            reminderToSelf: "Hi CJ! Keep on working hard. You know it's for your health. Lose weight and eat healthy food so you can live longer and be with your family for a long, long time."
        };

        const bmiScore = () => {
            return ((cjInfo.weightInKG / cjInfo.heightInCM / cjInfo.heightInCM) * 10000).toFixed(1);
        };

        const bmiStatus = () => {
            if (bmiScore() < 18.5) {
                return 'Underweight';
            } else if (bmiScore() >= 18.5 && bmiScore() <= 24.9) {
                return 'Normal Range';
            } else if (bmiScore() >= 25 && bmiScore() <= 29.9) {
                return 'Overweight';
            } else if (bmiScore() >= 30) {
                return 'Obese';
            } 
        };

        const bmiDesc = () => {
            if (bmiScore() < 18.5) {
                return 'If your BMI is less than 18.5, it falls within the underweight range.';
            } else if (bmiScore() >= 18.5 && bmiScore() <= 24.9) {
                return 'If your BMI is 18.5 to <25, it falls within the healthy weight range.';
            } else if (bmiScore() >= 25 && bmiScore() <= 29.9) {
                return 'If your BMI is 25.0 to <30, it falls within the overweight range.';
            } else if (bmiScore() >= 30) {
                return 'If your BMI is 30.0 or higher, it falls within the obesity range.';
            } 
        };

        const header = document.getElementById("header");
        const rootDiv = document.getElementById("root");
        const footer = document.getElementById("footer");

        header.innerHTML = `
        <a href="#" class="logo"><img src="images/somactive-logo-small.png" alt="somactive logo"></a>
        <nav class="nav">   
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Nutrition</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="menu-right">
                <li><a class="btn-join" href="workouts.html">Start Workout</a></li>
                <li><a href="index.html" class="login">Logout</a></li>
            </ul>
        </nav>
        <div class="profile-hero">
            <img class="profile-image" src="images/cj-image.jpg" alt="profile picture">
            <h2>${cjInfo.name}</h2>
            <p>${cjInfo.reminderToSelf}</p>
        </div>
        `;

        rootDiv.innerHTML = `
        <main>
            <div class="flexbox-container">
                <div class="flexbox-item flexbox-item-1">
                    <img src="https://img.icons8.com/ios-filled/500/d50c3a/fat-man-cry.png">
                </div>
                <div class="flexbox-item flexbox-item-2">
                    <h2>Overview</h2>
                    <p class="bmi-p">Age: <strong>${cjInfo.age} years old</strong></p>
                    <p class="bmi-p">Weight (kg): <strong>${cjInfo.weightInKG} kg</strong></p>
                    <p class="bmi-p">Height (cm): <strong>${cjInfo.heightInCM} cm</strong></p>
                    <p class="bmi-p">Weight Goal (kg): <strong>${cjInfo.weightGoalInKG} kg</strong></p>
                    <p class="bmi-p">Activity: <strong>${cjInfo.activity}</strong></p>
                    <div class="bmi-overview">
                        <h2>Your BMI is ${bmiScore()}</h2>
                        <p class="bmi" id="bmi">${bmiStatus()}</p>
                        <p class="bmi-p">${bmiDesc()}</p>
                    </div>
                </div>
            </div>
        </main>
        `;

        footer.innerHTML = `
        <div>
            <a href="#"><img src="images/somactive-logo-small.png" alt="somactive logo"/></a>
            <p>DISCLAIMER: It's strongly recommended that you talk to your doctor before starting our exercises and to stop immediately if you start to feel any kind of pain or dizziness. As a result, SomActive isn't legally liable if you weren't healthy enough to exercise in the first place or if you get sick or injured while exercising. Any statements regarding dietary supplements are to be used at your discretion and are not intended to diagnose, treat, cure or prevent any disease. If you tried to take us to court, we would argue that you knew all about the risks and proceeded anyway.<br>
        </div>
        <div class="socmed-icons">
            <a target="_blank" href="https://www.facebook.com/christianjunel.moriones.9" class="fa fa-facebook fa-lg"></a>
            <a target="_blank" href="https://twitter.com/juneldaexplorer" class="fa fa-twitter fa-lg"></a>
            <a target="_blank" href="https://www.instagram.com/cjmoriones/" class="fa fa-linkedin fa-lg"></a>
            <a target="_blank" href="https://www.linkedin.com/in/christianjunelmoriones/" class="fa fa-instagram fa-lg"></a>
            <a target="_blank" href="mailto:christianjunelm@gmail.com?subject=Inquiry Via Website&body=Hi there, I find your services interesting. Let's hop on a call?" class="fa fa-envelope fa-lg"></a>
        </div>
        `;

    }).catch(error => {
        document.write(error);
    })

}