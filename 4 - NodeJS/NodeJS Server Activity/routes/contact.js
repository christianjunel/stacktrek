export const fetchJSONContact = async() => {
    
    fetch('http://localhost:8000/my_contacts', {
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
        const contact = document.getElementById('contact');
        contact.innerHTML = `
        <p>Phone number: ${data.phone}</p>
        <p>E-mail address: ${data.emailAddress}</p>
        <p>Website: ${data.website}</p>
        `;
    })
}



