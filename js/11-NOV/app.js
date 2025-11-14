// (
//     function(exports, require, module, __filename, __dirname) {
//         const users = [];

//         function addUser(user) {
//             users.push(user);
//         }

//         function listUser() {
//             return users;
//         }

//         module.exports = {
//             addUser,
//             listUser
//         }
//     }
// )


// // console.log(module);
// // console.log(exports);
// // console.log(require);
// // console.log(__filename);
// // console.log(__dirname);


const config = require('./config');

console.log(config.appName + " : " + config.version);