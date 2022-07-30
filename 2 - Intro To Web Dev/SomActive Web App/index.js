window.onload = function onload() {

    let promise = new Promise((resolve, reject) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            reject();
        }
    });

    promise.then (() => {

        const header = document.getElementById("header");
        const rootDiv = document.getElementById("root");
        const footer = document.getElementById("footer");

        header.innerHTML = `
            <a href="#" class="logo"><img src="images/somactive-logo-small.png" alt="somactive logo"></a>
            <nav class="nav">   
                <ul class="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Start Now</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul class="menu-right">
                    <li><a class="btn-join">Join Us For Free</a></li>
                    <li><a href="login.html" class="login">Login</a></li>
                </ul>
            </nav>
            <div class="column-2">
                <section>
                    <h2>Workout And Eat Healthily Using SomActive.</h2>
                    <p>The SomActive app is a web-based platform that you can use to do some home workouts while unable to go to the gym. Curious about your BMI? Go ahead!</p>
                    <a href="#" class="btn-bmi btn-column-1" id="btn-bmi">Calculate My BMI</a>
                </section>
                <aside>
                    <img id="header-image" src="images/hero-image.png"/>
                </aside>
            </div>      
        `;

        rootDiv.innerHTML += `
            <main>
                <div class="flexbox-container-two-columns">
                    <div class="flexbox-item flexbox-item1">
                        <h2 id="h-workout-benefits">Get Some Workout Benefits</h2>
                        <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.</p>
                    </div>
                    <div class="flexbox-container-two-columns">
                        <div class="flexbox-column-1">
                            <div class="flexbox-item-2 flexbox-item-2-1">
                                <h2><img src="https://img.icons8.com/ios-glyphs/40/d50c3a/energy-care.png" alt="energy"/> Energic Life</h2>
                                <p>Take the boost of energy you feel when you're working a sweat by living an active life, for instance. Your passion will save you!</p>
                            </div>
                            <div class="flexbox-item-2 flexbox-item-2-2">
                                <h2><img src="https://img.icons8.com/ios-filled/40/d50c3a/body.png" alt="healthy body"/> Healthy Body</h2>
                                <p>Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.</p>
                            </div>
                        </div>
                        <div class="flexbox-column-2">
                            <div class="flexbox-item-2 flexbox-item-3-1">
                                <h2><img src="https://img.icons8.com/ios-filled/40/d50c3a/cool.png" alt="confident"/> More Confident</h2>
                                <p>Confidence isn't about feeling superior to others. It's a quiet inner knowledge that you're capable. Confident people: feel secure rather than insecure.</p>
                            </div>
                            <div class="flexbox-item-2 flexbox-item-3-2">
                                <h2><img src="https://img.icons8.com/glyph-neue/40/d50c3a/flex-biceps.png" alt="strong muscle"/> Self-Esteem</h2>
                                <p>In addition to building physical strength, exercise can improve mental health. It's been shown to reduce depression, anxiety and negative moods.</p>
                            </div>
                        </div>
                    </div>  
                </div> 
            </main>
            <div id="bmiModal" class="modal">
                <h2 class="modal-header">BMI Calculator<span class="close">&times;</span></h2>
                <div class="modal-content">    
                    <div class="modal-content-container">
                        <form action="index.html" method="POST" id="bmi-form">
                            <div id="bmi-inputs">
                                <label for="height">Height (in cm)</label>
                                <input type="number" name="height" id="height"/>
                                <label for="weight">Weight (in kg)</label>
                                <input type="number" name="weight" id="weight"/>
                            </div>
                            <input type="button" name="submit" id="submit" value="Calculate"/>
                        </form
                    </div>
                    <div id="bmi-results"></div>
                </div>
            </div>
        `;

        footer.innerHTML = `
        <div id="disclaimer">
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

        const registerBtn = document.querySelector(".btn-join");
        registerBtn.onclick = () => {
            window.location.href = "#";
        }
        // BMI Modal
        const modal = document.getElementById("bmiModal");
        const modalBtn = document.getElementById("btn-bmi");
        const modalCloseSpan = document.getElementsByClassName("close")[0];
        const modalSubmitBtn = document.getElementById("submit");
        const bmiResults = document.getElementById("bmi-results");
        const bmiForm = document.getElementById("bmi-form");

        modalBtn.onclick = () => {
            modal.style.display = "block";
            bmiResults.innerHTML = "";
        }
        

        modalCloseSpan.onclick = () => {
            modal.style.display = "none";
        }

        window.onclick = (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        }
        
        modalSubmitBtn.onclick = () => {

            const weight = document.getElementById("weight").value;
            const height = document.getElementById("height").value;

            //Calculate BMI with Classification and Description
            const bmiScore = () => {
                return ((weight / height / height) * 10000).toFixed(1);
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
                    return `
                    <p>Your BMI is <strong>${bmiScore()}</strong>, indicating your weight of <strong>(${weight} kg)</strong> is in the <span id="bmi-category"><strong>${bmiStatus()}</strong></span> category based on your height of <strong>(${height} cm)</strong>.</p>
                    <p>Talk with your healthcare provider to determine possible causes of underweight and if you need to gain weight.</p>
                    <p>Feeling worried? Don't worry, we'll guide you towards healthy nutrition. <a href="#" id="register"><strong>Join SomActive for free now</strong></a>.</p>
                    `;
                } else if (bmiScore() >= 18.5 && bmiScore() <= 24.9) {
                    return `
                    <p>Your BMI is <strong>${bmiScore()}</strong>, indicating your weight of <strong>(${weight} kg)</strong> is in the <span id="bmi-category"><strong>${bmiStatus()}</strong></span> category based on your height of <strong>(${height} cm)</strong>.</p>
                    <p>Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.</p>
                    <p>Wanna maintain your weight? Don't worry, we'll be able to help you on that. <a href="#" id="register"><strong>Join SomActive for free now</strong></a>.</p>
                    `;
                } else if (bmiScore() >= 25 && bmiScore() <= 29.9) {
                    return `
                    <p>Your BMI is <strong>${bmiScore()}</strong>, indicating your weight of <strong>(${weight} kg)</strong> is in the <span id="bmi-category"><strong>${bmiStatus()}</strong></span> category based on your height of <strong>(${height} cm)</strong>.</p>
                    <p>People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.</p>
                    <p>Feeling worried? Don't worry, we'll guide you towards healthy nutrition and active lifestyle. <a href="#" id="register"><strong>Join SomActive for free now</strong></a>.</p>
                    `;
                } else if (bmiScore() >= 30) {
                    return `
                    <p>Your BMI is <strong>${bmiScore()}</strong>, indicating your weight of <strong>(${weight} kg)</strong> is in the <span id="bmi-category"><strong>${bmiStatus()}</strong></span> category based on your height of <strong>(${height} cm)</strong>.</p>
                    <p>People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.</p>
                    <p>Feeling worried? Don't worry, we'll guide you towards healthy nutrition and active lifestyle. <a href="#" id="register"><strong>Join SomActive for free now</strong></a>.</p>
                    `;
                } 
            };

            bmiResults.innerHTML = bmiDesc();
            bmiForm.reset();

            const registerSpan = document.getElementById("register");

            registerSpan.onclick = () => {
                modal.style.display = "none";
                alert("Registration page not yet available.");
                return false;
            }

        }

    }).catch ((error) => {
        document.write(error);
    })

}
