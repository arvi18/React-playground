const express=require('express');
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('home page');
});

app.post('/api/register/', (req, res)=>{
    console.log(req.body)
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