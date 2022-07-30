window.onload = function onload() {

    let promise = new Promise((resolve, reject) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            reject();
        }
    });

    promise.then(() => {

        const header = document.getElementById("header");
        header.innerHTML = `
        <a href="#" class="logo"><img src="images/somactive-logo-small-blue.png" alt="somactive logo"></a>
        <nav class="nav">   
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Start Now</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="menu-right">
                <li><a href="#" class="btn-join">Join Us For Free</a></li>
                <li><a href="login.html" class="login">Login</a></li>
            </ul>
        </nav>      
        `;

        const rootDiv = document.getElementById("root");
        rootDiv.innerHTML = `
        <main>
            <form action="login.html" method="POST">
                <div>
                    <div class="container">
                        <h2>Log in to your account</h2>
                        <div class="inputs">
                            <label class="label" for="uname">Username</label>
                            <input type="text" name="uname" id="uname" required/>
                            <label class="label" for="uname">Password</label>
                            <input type="password" name="pword" id="pword" required/>
                        </div>
                        <input type="button" name="submit" id="submit" value="Log In"/>
                        <p><a href="#" class="register">No account yet? <strong>Register here.</strong></a></p>
                    </div>
                <div>
            </form>
        </main>
        `;
        
        const footer = document.getElementById("footer");

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

        const miniDB = [
            { username: 'admin', password: 'testing' },
            { username: 'cjmoriones', password: 'cjngpagbabago' }
        ];

        const checkLogin = () => {
            let username = document.getElementById("uname").value;
            let password = document.getElementById("pword").value;
            let usernameFound = miniDB.some(un => un.username === username);
            let passwordFound = miniDB.some(pw => pw.password === password);

            if(usernameFound && passwordFound){
                window.location.href = "dashboard.html";
            } else {
                return alert(`Wrong username/password! Please try again.`);
            }
        }

        const loginBtn = document.getElementById("submit");
        loginBtn.onclick = () => {
            checkLogin();
        }

        const registerBtn = document.querySelector(".btn-join");
        registerBtn.onclick = () => {
            window.location.href = "dashboard.html";
        }

        const registerBtn2 = document.querySelector(".btn-join");
        registerBtn.onclick = () => {
            window.location.href = "dashboard.html";
        }

    }).catch(error => {
        document.write(error);
    });

}