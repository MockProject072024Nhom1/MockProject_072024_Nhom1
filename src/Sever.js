const express = require('express')
const  mongoose  = require('mongoose')
const app = express()
const port = 3000
const apiRoutes=require('./route/userRouter')

app.use('/',apiRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/myapp")
        .then(()=>{
            console.log("db connect success");
            app.listen(port,()=>{
                console.log('sever runing on port:',+port);
            })
        })
        .catch((err)=>{
            console.log(err);
        });
