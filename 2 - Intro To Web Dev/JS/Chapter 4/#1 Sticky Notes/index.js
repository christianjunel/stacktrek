window.onload = function onload() {

    let notes = document.querySelector("#note-display");
    let submitBtn = document.querySelector("#btn");

    const displayNote = () => {
        let addNote = document.querySelector("#note").value;
        return addNote;
    }

    submitBtn.onclick = () => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        notes.innerHTML += `
        <div class="my-note" style="background-color: ${randomColor};">
            <article>
                <p class="notes-info">${displayNote()}</p>
            </article>
        </div>
        `;
    }

}