class Logger {
    // success/general info, message (error), error (error object)
    log(param1, param2) {
        if(typeof param1 === "string" && !param2) {
            console.log(`INFO: ${param1}`);
        } else if(param1 instanceof Error) {
            console.log(`Error : ${param1.message}`);
        } else if(typeof param1 === "string" && param2 instanceof Error) {
            console.log(`ERROR: ${param1} -> ${param2.message}`);
        }
    }

    // log(message) {

    // }

    // log(error) {

    // }

    // log(message, error) {

    // }
}


let logger = new Logger();

logger.log("success");
logger.log("user validated");

logger.log(new Error("Something went wrong!"));

logger.log("Something went wrong", new SyntaxError("Code issue!"));