export const fetchJSON = async() => {
    
    fetch('http://localhost:8000/details', {
    method : 'GET',
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    mode:"cors",
    cache:"default"
    })
    .then(res => res.json())
    .then(data => {
        const bio = document.getElementById('bio');
        bio.innerHTML = `
        <p>My complete name is ${data.name}.</p>
        <p>I am ${data.age} years of age.</p>
        <p>My hobbies include: ${data.hobbies}</p>
        <p>I have a pet ${data.pet}.</p>
        <p>My favorite food/s are ${data.favoriteFood}</p>
        `;
    })
}



