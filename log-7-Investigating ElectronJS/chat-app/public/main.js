let nickname;
const escapeHtml = (unsafe) => {
    return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}
function joinButton() {
    let nick = document.getElementById("nick").value
    postMessage(`${nick} has joined the server!`)
    nickname = nick
}
function onLoadExecute() {
    let element;
    let msgBox = document.getElementById("input-box");
    msgBox.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {  
            element = e;
            if (nickname === undefined) {
                alert("You have yet to make a nickname!")
            }
            if (element === undefined) {
                console.log("INTERNAL ERROR, FIXME");
            }
            sendMessage(nickname, e.target.value)
        }
    });
}
function postMessage(msg) {
    var currentDate = new Date()
    let display = document.getElementById("chat-display")
    let text = `[${currentDate.toLocaleString()}]${msg}`
    display.innerHTML += escapeHtml(text) + "<br />"
}
function sendMessage(name, msg) {
    var currentDate = new Date()
    let display = document.getElementById("chat-display")
    let text = `[${currentDate.toLocaleString()}]<${name}>${msg}`
    display.innerHTML += escapeHtml(text) + "<br />"
}