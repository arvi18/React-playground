const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/MERN')

const User = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    quote:{type:String}
    },
    {
        collection:'user-data'
    }
)
const model=mongoose.model('UserData', User)

app.get('/', (req, res)=>{
    res.send('home page');
});

app.post('/api/register/', async (req, res)=>{
    console.log(req.body)
    try{
        const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.json({status:'ok'})
    }
    catch(err){}
    res.json({status:'error', error:'Duplicate email'})
});

app.post('/api/login/', async (req, res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(user){
            return res.json({status:'ok', user:true})
        }else{
            return jsonn({error:"hmm"})
        }
    }
    catch(err){}
    res.json({status:'error', error:'Duplicate email'})
});

function getMethodsOf(obj){
    const methods = {}
    Object.getOwnPropertyNames( Object.getPrototypeOf(obj) ).forEach(methodName => {
      methods[methodName] = obj[methodName]
    })
    return methods
  }


app.listen(8000, (err)=>{
    if(err){
        console.log('Aww man! somethinng gone wrong ig:', err);
    }
});