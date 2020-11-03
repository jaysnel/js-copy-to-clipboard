let button = document.getElementById("copytext");
button.onclick = function() {
    copyToClipboard();
}

function copyToClipboard() {
    //Using the value from a input field that was already created.
    //This way works if data is NOT being created dynamically
    let copiedtext = document.getElementById("copyme");
    copiedtext.select();

    var success = document.execCommand("copy");
    success ? alert('Copied succcesfully.') : alert('Copied was unsuccessful.');


    //Creating a element, then populate that element.
    //This way works if data is being created dynamically
    // let copiedtext = document.createElement("textarea");
    // copiedtext.innerHTML = "I was created and then copied.";
    // document.body.appendChild(copiedtext);
    // copiedtext.select();

    // let success = document.execCommand("copy");
    // success ? alert('Copied succcesfully.') : alert('Copied was unsuccessful.');

    // document.body.removeChild(copiedtext);
}  