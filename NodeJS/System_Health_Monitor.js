const os = require('os');
const fs = require('fs');



function getSystemStats(){

    const stats = {

        timesstamp: new Date().toLocaleString(),
        osType: os.type(),
        osRelease: os.release(),
        cpuCore: os.cpus().length,
        totalMemory: (os.totalmem()/1024/1024/1024).toFixed(2)+" GB",
        freeMemory: (os.freemem()/1024/1024/1024).toFixed(2)+" GB",
        uptime: (os.uptime()/3600).toFixed(2)+ " hours",

    };


    const logData = JSON.stringify(stats,null,2)+"\n";
    fs.appendFile('system_health.log',logData,(err)=>{
        if(err) throw err;

        console.log("System health logged!");



    });

}

setInterval(getSystemStats,5000);














