import express from "express"
import cors from "cors"
import formSchema from "./formSchema.js"
let app=express()
app.use(cors())
app.use(express.json())
app.post("/",async(req,res)=>{
    console.log(req.body);
    try {
        let uploadData=await formSchema.create(req.body)
        if(uploadData){
            res.status(200).send({
                message:"uploaded"
            })
        }
    } catch (error) {
        
    }
})
app.listen(3000,()=>console.log("Node started on 3000"))
