import TypedEventEmitter from './mod.ts';
import EventEmitter from 'https://deno.land/std@0.146.0/node/events.ts';

const emitter = new EventEmitter() as TypedEventEmitter<{ message(message: string): void }>;

emitter.on('message', console.log);
emitter.emit('message', 'Hello World');
