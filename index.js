const express = require('express')
const app = express();
app.use(express.json())
const port = 8000;

app.get('/get/api',(req, res)=>{
    res.send({message:"Hello Romel how are you ?"})
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}...`);
})