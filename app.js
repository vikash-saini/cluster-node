// create server without using cluster

const Server = require('./server.js');

server = new Server();


server.app.get('/api/users',async(req,res)=>{

    let result =0;

    for (let i = 0; i < 100000; i++) {
        result+=i;
        
    }

    return  res.json({'process_id':process.pid,result});
})

server.app.listen(5000,()=>{
        console.log("worker is running on ", process.pid);
})
