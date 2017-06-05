thread = new Thread("world.worker.js", "TestWorker");

thread.on('answer', function (message) {
    console.log('message', message);
});

thread.emit('offer', {});