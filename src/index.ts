import express from "express";

const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('OK');
})

app.listen(PORT, () => {
    console.log("App run on port:", PORT);
});
