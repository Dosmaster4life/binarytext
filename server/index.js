
const express = require("express"); // used to easily parse request

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/:text", (req, res) => {
    res.json({ message: text2Binary(req.params.text.replace("text=","")) }); // convert text to binary
});
app.get("/api2/:binary", (req, res) => {
    res.json({ message: binary2Text(req.params.binary.replace("binary=","")) }); // convert binary to text
});

function binary2Text(string) {
    return string.replace(/\d+./g, char => String.fromCharCode(`0b${char}`)); // regex to convert binary to ascii
}

function text2Binary(string) { // converting ascii text to binary
    return string.split('').map(function (c) {
        return c.charCodeAt(0).toString(2);
    }).join(' ');
}

app.listen(PORT, () => { // just to display port, for testing purposes
    console.log(`Server listening on ${PORT}`);
});

