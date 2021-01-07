const express = require('express');
const path = require('path');
const apiRouter = require('./routes/router')

var app = express();
app.use(express.static(__dirname));
app.use(express.static("public"));
app.use(express.json());
app.use('/fetch', apiRouter);

// app.get('/',(req,res)=>{
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname+ '/CORE/CSS/PieMain.css'));
//     //__dirname : It will resolve to your project folder.
// });

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+ '/public/PieMain.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/get', (req,res)=>{
    return res.send("GET!!!!");
})

app.get('/node',(req,res)=>{
    res.sendFile(path.join(__dirname+ '/public/PieMain.html'));
    //__dirname : It will resolve to your project folder.
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> console.log(`Server runs on port ${PORT}`));

module.exports = app;