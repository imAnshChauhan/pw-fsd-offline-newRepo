const input = document.getElementById('username');

input.onblur = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://jsonplaceholder.typicode.com/users?username=${input.value}`);
    
    xhr.onload = () => {
        if(xhr.responseText === "[]") {
            console.log("Username is available!");
        } else {
            console.log("Username is taken!");
        }
    }

    xhr.send();
}