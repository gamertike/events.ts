# Events.TS

Events.TS is a Deno module that implements typings to the Node.JS event emtter.

## Example

```ts
import TypedEventEmitter from 'https://deno.land/x/events_ts/mod.ts';
import EventEmitter from 'https://deno.land/std/node/events.ts';

const emitter = new EventEmitter() as TypedEventEmitter<{
    message: (message: string) => void;
}>;

emitter.on('message', console.log);
emitter.emit('message', 'Hello World');
```
