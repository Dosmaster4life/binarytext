
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/:text", (req, res) => {
    res.json({ message: text2Binary(req.params.text.replace("text=","")) });
});
app.get("/api2/:binary", (req, res) => {
    res.json({ message: binary2Text(req.params.binary.replace("binary=","")) });
});

function binary2Text(string) {
    return string.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));
}

function text2Binary(string) {
    return string.split('').map(function (c) {
        return c.charCodeAt(0).toString(2);
    }).join(' ');
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

