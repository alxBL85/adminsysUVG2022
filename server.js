const express = require('express');
const path = require('path');
const mathRoutes = require("./routes/mathRoutes");


const app = express();
const PORT = process.env.PORT || 8080;

app.get("/isAlive", (req, res)=>{
    console.log(">>> yes!");
    res.send("yes");
});

// ------------------------------------------------

app.use("/api/math", mathRoutes);


// --- website ----
app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});



app.listen(PORT, ()=>{ console.log(`Deploy and Listening to port ${PORT}`)});