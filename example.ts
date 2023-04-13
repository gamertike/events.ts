import EventEmitter from './mod.ts';

const emitter = new EventEmitter<{ message: [message: string] }>();

emitter.on('message', console.log);
emitter.emit('message', 'Hello, World!');
