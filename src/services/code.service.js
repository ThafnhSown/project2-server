'use strict'

const compiler = require('compilex')
const compilexOptions = {
    stats: true,
} 
compiler.init(compilexOptions)
const { Queue, Worker, QueueEvents } = require('bullmq')
const redisOptions = { host: "localhost", port: 6379 }
const codeJobQueue = new Queue('compile', {
    connection: redisOptions,
})

class CodeService {
    
    static async pushCode() {
        // const addJob = async (req, res, next) => {
        //     var code = req.body.code;
        //     var input = req.body.input;
        //     codeJobQueue.add('codeList', {
        //         code: code, 
        //         input: input
        //     });
        // }
        // addJob();

        // const worker = new Worker('compile', async job => {
        //     if(job.name === 'codeList') {
        //         var code = job.data.code
        //         var input = job.data.input
        //         if (!input) {
        //             var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
        //             compiler.compileCPP(envData, code, function (data) {
        //                 if (data.output) {
        //                     res.send(data);
        //                 }
        //                 else {
        //                     res.send({ output: "error" })
        //                 }
        //             });
        //         }
        //         else {
        //             var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
        //             compiler.compileCPPWithInput(envData, code, input, function (data) {
        //                 if (data.output) {
        //                     res.send(data);
        //                }
        //                 else {
        //                     res.send({ output: "error" })
        //                 }
        //             });
        //         } 
        //     }
            
        // })
        // worker.on("error", function () {
        //     console.error("Error")
        // })
    
        // const queueEvents = new QueueEvents('Paint');
        // queueEvents.on('completed', ({ jobId }) => {
        //   console.log('done', jobId);
        // });
        
        // queueEvents.on(
        //   'failed',
        //   ({ jobId, failedReason }) => {
        //     console.error(`error at ${jobId}`, failedReason);
        //   },
        // );
        console.log('done')
    }    
}

module.exports = CodeService