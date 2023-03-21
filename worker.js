const { isMainThread, parentPort } = require('worker_threads');

if (!isMainThread) {
    parentPort.on('message', async (data) => {
        console.log('Worker.js Received', data);

        if (data.id === 0) {
            setInterval(async () => {
                try {
                    // 로직 추가
                } catch (err) {
                    console.log('Worker 0 Error...', err);
                }
            }, 60000);
        }

        parentPort.postMessage(data);
    })
}