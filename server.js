const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/isAlive", (req, res)=>{
    res.send("yes");
});

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(PORT, ()=>{ console.log(`Deploy and Listening to ${PORT}`)});