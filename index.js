const express = require("express");
const app = express();
const port = 8085;
app.use(express.json())

app.get("/" ,(req,res)=>{
    res.send("home page")
});


app.post("/users", (req,res)=>{
    let {name,email,password,confirmPassword}=(req.body);
    if((name=='' || email=='')|| (password==''|| confirmPassword=='')){
        res.status(406).send("406 Not Acceptable")
    }
    else if(confirmPassword===password){
        res.status(202).send("202 Accepted")
    }
    else{
        res.status(401).send("401 Unauthorized")
    }
   
})






app.use( "*" , (req,res) => {
res.status(404).send("404 not found")
} )


app.listen(port , () => {
    console.log(`server starting running on port ${port}`)
}   )