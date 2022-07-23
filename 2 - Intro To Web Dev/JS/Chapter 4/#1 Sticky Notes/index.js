window.onload = function onload() {

    let notes = document.querySelector("#note-display");
    let submitBtn = document.querySelector("#btn");

    const displayNote = () => {
        let addNote = document.querySelector("#note").value;
        return addNote;
    }

    submitBtn.onclick = () => {
        var x=Math.round(0xffffff * Math.random()).toString(16);
        var y=(6-x.length);
        var z="000000";
        var z1 = z.substring(0,y);
        var color= "#" + z1 + x;
        notes.innerHTML += `
        <div class="my-note" style="background-color: ${color};">
            <article>
                <p class="notes-info">${displayNote()}</p>
            </article>
        </div>
        `;
    }

}