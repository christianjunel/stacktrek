window.onload = function onload() {

    const dogShawn = document.getElementById("shawn");
    const dogJane = document.getElementById("jane");
    const dogLuke = document.getElementById("luke");
    
    let getDogYears = (year) => {
        const firstTwoHumanYears = 10.5;
        const succHumanYears = 4;
        if (year > 0 && year <= 2) {
            return `Age: Your doggie is ${year * firstTwoHumanYears} years old in dog years!`;
        } else if (year > 2) {
            return `Age: Your doggie is ${((year-2) * succHumanYears) + (firstTwoHumanYears*2)} years old in dog years!`;
        }
    };

    const arrOfDogs = [
        {
            name: 'Shawn',
            age: getDogYears(3),
            image: 'images/shawn-husky.jpg',
            toys: ['ball', 'bone'].join(", ")
        },
        {
            name: 'Jane',
            age: getDogYears(2),
            image: 'images/jane-german-shepherd.jpg',
            toys: ['knots', 'kong'].join(", ")
        },
        {
            name: 'Luke',
            age: getDogYears(1),
            image: 'images/luke-dachshund.jpg',
            toys: ['lickpad', 'plush'].join(", ")
        }
    ];

    dogShawn.innerHTML = `
        <h2 id="name">Name: ${arrOfDogs[0]['name']}</h2>
        <img src=${arrOfDogs[0]['image']} alt="a cute husky">
        <h2 id="dogyears">${arrOfDogs[0]['age']}</h2>
        <h2 id="fave-toys">Fave Toys: ${arrOfDogs[0]['toys']}</h2>
        `;
    dogJane.innerHTML = `
        <h2 id="name">Name: ${arrOfDogs[1]['name']}</h2>
        <img src=${arrOfDogs[1]['image']} alt="a cute german shepherd">
        <h2 id="dogyears">${arrOfDogs[1]['age']}</h2>
        <h2 id="fave-toys">Fave Toys: ${arrOfDogs[1]['toys']}</h2>
        `;
    dogLuke.innerHTML = `
        <h2 id="name">Name: ${arrOfDogs[2]['name']}</h2>
        <img src=${arrOfDogs[2]['image']} alt="a cute dachshund">
        <h2 id="dogyears">${arrOfDogs[2]['age']}</h2>
        <h2 id="fave-toys">Fave Toys: ${arrOfDogs[2]['toys']}</h2>
        `; 
}