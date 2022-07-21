window.onload = function onload() {

    const rootDiv = document.getElementById("root");
    let stringHTML = "";

    function capitalizeFirstLetter(str) {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }
    
    let groceryList = {
            'meats': ['fish', 'chicken', 'pork','beef'],
            'soaps and shampoos': ['Head n Shoulders', 'Safeguard', 'Dove', 'Rejoice'],
            'vegetables': ['Carrots', 'Petchay', 'Talong', 'Sitaw'],
            'canned goods': ['corned beef', 'sardines', 'spam', 'beef loaf']
        }
    ;

    for (let key in groceryList) {
        stringHTML += `
        <article class="groceries">
            <div class="row-2">
                <div class="column">
                    <h1>${capitalizeFirstLetter(key)}</h1>
        `;
        for (let value of groceryList[key]) {
            stringHTML += `
                    <input type="checkbox" name="${value}" id="${value}" value="{capitalizeFirstLetter(value)}"/>
                    <label for="${value}">${capitalizeFirstLetter(value)}</label>
                    <br>
            `;
        }
        stringHTML += `
                </div>
            </div>
        </article>
        `;
    }

    rootDiv.innerHTML = stringHTML;

}