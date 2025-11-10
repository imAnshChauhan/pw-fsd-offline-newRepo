const btn = document.getElementById("btn");
// btn.onclick = () => {
//     alert("Button clicked, showing popup, using js")
// }

btn.addEventListener('click', () => {
    console.log("Button Clicked!");
});

btn.addEventListener('dblclick', () => {
    console.log("Button is double clicked!");
});

btn.addEventListener('mouseover', () => {
    console.log("Did you just mouse overed the btn!");
});