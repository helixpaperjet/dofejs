// The DOM is a way that JavaScript code can manipulate HTML (Webpage) content
function getDate() {
    let element = document.getElementById("replace-1");
    let dateString = "";
    let dateObj = new Date();
    dateString = dateObj.toUTCString();
    element.textContent = "This HTML element's textContent has been modified by this script on "+dateString;
    return;
}
