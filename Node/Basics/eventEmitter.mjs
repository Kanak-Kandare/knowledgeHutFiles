import eventEmitter from 'events';

const emitter = new eventEmitter();

emitter.on('event', (data) => {
    console.log(data);
})

emitter.emit('event', 'Hello Kanak');