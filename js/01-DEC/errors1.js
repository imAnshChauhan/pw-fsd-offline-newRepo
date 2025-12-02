// async function loadProfile(userId) {
//     try {
//         const res = await fetch(`/api/users/${userId}`);
//         return res;
//     } catch(error) {

//     }
// }


function sumAmount(arr) {   // [1,2,3,4]
    try {
        if(!Array.isArray(arr))
            return "please provide a valid array!";

        return arr?.reduce((s, n) => {
            return s + Number(n || 0);
        }, 0);
    } catch(error) {
        
    }
}

console.log(sumAmount([1,2,3,"abcd"]));
