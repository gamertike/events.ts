import TypedEventEmitter from 'events.ts';
import EventEmitter from 'events';

const emitter = new EventEmitter() as TypedEventEmitter<{ message(message: string): void }>;

emitter.on('message', console.log);
emitter.emit('message', 'Hello World');
