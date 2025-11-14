function getPosts() {
    // created an instance of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // defined the method and the api endpoint
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    // listening to the response
    xhr.onload = () => {
        div.innerText = xhr.responseText;
    }

    // finally sending the request
    xhr.send();
}

const btn = document.getElementById('btn');
const div = document.getElementById('posts');

btn.addEventListener('click', getPosts);