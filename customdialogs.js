const custom_alert = document.getElementById("alert");
const okButton = document.getElementById("ok");
const custom_confirm = document.getElementById("confirm");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const custom_prompt = document.getElementById("prompt");
const cancelButton = document.getElementById("cancel");
const output = document.getElementById("showOutput");
const prompt_text = document.getElementById("prompt_text");
okButton.addEventListener("click", ok_clicked);
yesButton.addEventListener("click", yes_clicked);
noButton.addEventListener("click", no_clicked);
custom_prompt.querySelector("form").addEventListener("submit", done_clicked);
cancelButton.addEventListener("click", cancel_clicked);
document.getElementById("alertButton").addEventListener("click", showAlert);
document.getElementById("confirmButton").addEventListener("click", showConfirm);
document.getElementById("promptButton").addEventListener("click", showPrompt);
function showAlert() {
    custom_alert.showModal();
}
function ok_clicked() {
    custom_alert.close();
}
function showConfirm() {
    custom_confirm.showModal();
}
function yes_clicked() {
    document.getElementById("showOutput").textContent = "Confirm Result: True";
    custom_confirm.close();
}
function no_clicked(){
    document.getElementById("showOutput").textContent = "Confirm Result: False";
    custom_confirm.close();
}
function showPrompt() {
    custom_prompt.showModal();
}
function done_clicked(event) {
    event.preventDefault();
    let text_value = prompt_text.value;
    let safe_text = DOMPurify.sanitize(text_value);
    if(text_value == "") {
        output.innerHTML = "User didn't enter anything";
    }
    else {
        output.innerHTML = "Prompt Result: " + safe_text;
    }
    custom_prompt.close();
}
function cancel_clicked() {
    output.innerHTML = "User didn't enter anything";
    custom_prompt.close();
}