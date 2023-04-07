const express = require ("express");
const app = express();
const cors = require('cors')

const gmailModel = require( './models/GmailData')

const mongoose = require ('mongoose');

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://User:UserPass123@cluster0.vdmycae.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
})


app.delete('/delete/:gmail',async(req,res)=>{
        
       const gmail = req.params.gmail;
       console.log(gmail)
      await gmailModel.findOneAndDelete({email:gmail})
       
 })
app.get('/read',async(req,res)=>{
    let data = await gmailModel.find();
    res.send(data);
   
})
app.post('/add',async(req,res)=>{
     
    const gmail = req.body.gmail;
    const UserName = req.body.username;

    let gmailobj = new gmailModel({
        email:gmail,
        UserName:UserName
    });
    gmailobj
        .save()
        .then((doc)=>{})
        .catch((err)=>{
            console.log(err);
        });
   
})
app.put('/update',async(req,res)=>{
     
    const newgmail = req.body.gmailUpdate;
    const oldGmail = req.body.oldGmail;
     
   await gmailModel.findOneAndUpdate({email:oldGmail},{email:newgmail},
        {
            new:true

        })

    
   
})
app.listen(3005,()=>{
    console.log('Example app listening on port ${3005}')
})