//More dynamic solution than the first one
window.onload = function onload() {

    const dogList = document.getElementById("doglist");
    
    
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

    arrOfDogs.forEach(dog => dogList.innerHTML += `
        <article class = "dogs">
        <h2 id="name">Name: ${dog.name}</h2>
        <img src=${dog.image}>
        <h2 id="dogyears">${dog.age}</h2>
        <h2 id="fave-toys">Fave Toys: ${dog.toys}</h2>
        </article>
        `
    );
};