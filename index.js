const Server = require('./server.js');

class Index {

     server = new Server();

    constructor(){
    }

    inIt(){

        this.server.app.get('/api/users',async(req,res)=>{

            let result =0;
        
            for (let i = 0; i < 100000; i++) {
                result+=i;
                
            }
        
          return  res.json({'process_id':process.pid,result});
        })

        this.server.app.listen(4000,()=>{
            console.log("worker is running on ", process.pid);
        });
       
    }
}

module.exports = Index;

