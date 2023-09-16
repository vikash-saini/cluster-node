const express = require('express');



class Server{

 app = express();

 constructor(){
    this.inItRoute()
 }

 inItRoute(){
    this.app.get('/api',(rew,res)=>{
        res.send("success");
    })
 }

}

module.exports = Server;