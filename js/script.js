

function enableTextarea() {
    var checkbox = document.getElementById("email-send").checked;
    var textarea = document.getElementById("email-to-us");
    if(checkbox ===true){
        textarea.disabled = false;
    }else{
        textarea.disabled = true;
    }
}
function enableButton() {
    var agree = document.getElementById("agree-terms").checked;
    var btn = document.getElementById("submit");
    if(agree ===true){
        btn.disabled = false;
    }else{
        btn.disabled = true;
    }
}