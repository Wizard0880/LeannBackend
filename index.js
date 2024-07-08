require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Suryansh0880")
})

app.get('/instagram',(req,res)=>{
    res.send("<h1>Welcome to Instagram</h1>")
})

app.get('/login',(req,res)=>{
    res.send("<h2>Login Successful</h2>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})