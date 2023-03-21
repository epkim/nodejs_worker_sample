const { isMainThread, Worker, MessageChannel } = require('worker_threads');

// worker init
const worker = new Worker(__dirname + 'worker.js');
if (isMainThread) {
    worker.on('message', (data) => {
        console.log('Main Received...', data);
    });
    worker.on('error', (err) => {
        console.log(err.message);
    });
    worker.on('exit', (code) => {
        if (code !== 0) {
            throw new Error(`Worker stopped with exit code ${code}`);
        } else {
            logger.info('Worker stopped', code);
        }
    });
}

worker.postMessage({
    id: 0
})