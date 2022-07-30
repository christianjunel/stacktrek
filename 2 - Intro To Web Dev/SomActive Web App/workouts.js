window.onload = function onload() {

    let promise = new Promise ((resolve, reject) => {

        if (document.readyState === 'complete') {
            resolve();
        } else {
            reject();
        }

    });

    promise.then(() => {

        const workouts = {
            cardioTraining: ['https://www.youtube.com/embed/cZyHgKtK75A',
            'https://www.youtube.com/embed/PvEnWsPrL4w',
            'https://www.youtube.com/embed/s82_Hi_5ItA',
            'https://www.youtube.com/embed/QKCkO9fy9O4'
            ],
        }

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
                <li><a class="btn-join">Start Workout</a></li>
                <li><a href="login.html" class="login">Logout</a></li>
            </ul>
        </nav>
        <div class="title-hero">
            <h2>Workouts</h2>
            <p>Your healthy and active place.</p>
        </div>
        `;

        let rootString = "";

        const dispCardioWorkouts = () => {
            rootString += `
            <main>
                <div class="container">
                    <h2 class="video-header">Cardio Training</h2>
                    <div class="flexbox-container">
            `;
            for (let link of workouts['cardioTraining']) {
                rootString += `
                        <div class="flexbox-item">
                            <iframe width="400" height="315" src="${link}" frameborder="0" allowfullscreen></iframe>
                </iframe>
                        </div>
                `;
            }
            rootString += `
                    </div>
                </div>
            </main>
            `;

            return rootString;
        };

        rootDiv.innerHTML = dispCardioWorkouts();

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