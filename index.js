const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser');
const {User}=require("./model/User");

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://kohjt:GOmin334@cluster0.7weogyz.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('MongoDB is connected....'))
.catch(err=>console.log(err))
/*useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false*/
app.get('/', (req, res) => {
  res.send('Hello World!~~')
})

app.post('/register',(req,res)=>{

   
  const user=new User(req.body)

  user.save((err,userInfo)=>{
    if(err) return res.json({success: false,err})
    return res.status(200).json({
      success:true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})