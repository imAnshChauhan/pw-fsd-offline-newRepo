let currPostId = 1;

const commentsDiv = document.getElementById('comments');

function getComments(postId) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

    xhr.onload = () => {
        // console.log(xhr.responseText);
        commentsDiv.innerText = xhr.responseText;

        if(postId >= 2) {
            clearInterval(stopVal);
            console.log("Running comments are stoped!");
        }
    }

    xhr.send();
}

let stopVal = setInterval(() => {
    getComments(currPostId);
    currPostId++;
}, 5000);