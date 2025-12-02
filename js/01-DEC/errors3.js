class JSONParseError extends Error {
    constructor(message) {
        super(message);
        this.name = "JSONParseError";
    }
}

function parseJson(data) {
    try {
        let output = JSON.parse(data);
        console.log(output);
    } catch(error) {
        throw new JSONParseError("Error occured while parsing the JSON");
    }
}

try {
    parseJson("abcd");
} catch(error) {
    console.log(error.message);
}