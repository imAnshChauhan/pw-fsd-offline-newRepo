// // step1: require the inbuild node js module https
// const https = require('https');

// // step 2: use the get method of the https to make a get api call
// // by default async method
// https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
    
//     let resp = "";

//     // step 3: read each and every chunk of data which is recieved and store it in data
//     res.on('data', (chunk) => {
//         resp += chunk;
//     });

//     // step 4: listen to the end event, to know if full data is recieved
//     res.on('end', () => {
//         let jsonData = JSON.parse(resp);
//         // console.log(jsonData);

//         console.log(typeof resp);
//         console.log(resp);
//     });
// });


const str = JSON.stringify({name: 'rahul'});

console.log(str);

const json = JSON.parse(str);

console.log(json);