const express = require('express');
const app = express();



app.get("/",(req,res)=>{

    res.send("I am a get request at home route");
});

// app.get("/about",(req,res)=>{

//     res.send("I am a get request at about route");
// });

// app.get("/contact",(req,res)=>{

//     res.send("I am a get request at contact route");
// });

app.post("/about",(req,res)=>{

    res.send("I am a post request at about route");
    res.end();
});
app.put("/about",(req,res)=>{

    res.send("I am a put request at about route");
    res.end();
});
app.delete("/about",(req,res)=>{

    res.send("I am a delete request at about route");
    res.end();
});



module.exports = app;


