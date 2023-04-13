<div align="center">
    <h1 style="font-size: 4rem;">Events.ts</h1>
</div>

Events.ts is a [Deno](https://deno.land) module that implements typings to the [Node.js](https://nodejs.org) [event emtter](https://nodejs.org/api/events.html#class-eventemitter).

## Example

```sh
deno run https://deno.land/x/events_ts/example.ts
```

or

```ts
import EventEmitter from 'https://deno.land/x/events_ts/mod.ts';

const emitter = new EventEmitter<{ message: [message: string] }>();

emitter.on('message', console.log);
emitter.emit('message', 'Hello, World!');
```
