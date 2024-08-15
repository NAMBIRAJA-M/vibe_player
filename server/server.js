import express from 'express';
import bodyParser from "body-parser";



const app=express();
const port=4000;
 

app.get("/api",(req,res)=>{
   res.json({"users":"user1"});
   
})


 app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
 })