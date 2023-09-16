const os = require('os');
const cluster = require('cluster');
const index = require('./index.js');
const Index = require('./index.js');

if (cluster.isMaster) {
    console.log(`master ${process.pid} is running` );

    let noOfCpus = os.cpus().length;
    for (let i = 0; i < noOfCpus; i++) {
        cluster.fork();        
    }
    
    cluster.on('exit',()=>{
        console.log(`worker ${process.pid} is died`);
        cluster.fork();
    })
}else{
     new Index().inIt();
}
