function login() {
    try {
        let rawContent = "abcd";
    
        let output = JSON.parse(rawContent);
    
        console.log(output);
    } catch(error) {
        console.log(error.stack);
        return {
            status: 500,
            message: "something went wrong!"
        }
    }
    
    console.log("Code Completed!");
}