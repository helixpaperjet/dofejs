// My own encryption and decryption algorithm
function encrypt(message) {
    let stackA = new Array();
    let stackB = new Array();
    for (let i = 0; i < message.length/2; i++) {
        stackA.push(message[i])
        //console.log(message[i]);
    }
    console.log("end");
    for (let x = Math.round(message.length/2); x < message.length; x++) {
        stackB.push(message[x]);
        //console.log(message[x])
    }
    let stack = new Array();
    let y = 0;
    try {
        while (y < stackA.length) {
            stack.push(stackA[y]);
            if (y < stackB.length) {
                stack.push(stackB[y]);
            }
            else {
                break;
            }
            y++;
        } 
    } catch (e) {}
    let output = "";
    stack.forEach(element => {output += element})
    output += "$//$"
    console.log(output);
}
encrypt("");