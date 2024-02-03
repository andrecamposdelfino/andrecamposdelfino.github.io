const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('msg');
const chatElement = document.getElementById('chat');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value !== "") {
        socket.emit("chat message", input.value);
        input.value = "";
    }else {
        alert("Por favor digite algo!!")
    }

})

function keyDown(e) {
    if(e.keyDown == "Enter"){
        socket.on('chat message', (msg) => {
            const li = document.createElement("li");
            li.textContent = msg;
            chatElement.appendChild(li);
        })
    }
}

socket.on('chat message', (msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    chatElement.appendChild(li);
})

