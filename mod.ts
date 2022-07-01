/**
 * The event map.
 * @example { message: (message: string) => void }
 */
export type EventMap = Record<string | symbol, (...args: any[]) => void>;

/**
 * Type safe event emitter.
 * @example
 * import TypedEventEmitter from 'https://deno.land/x/events_ts/mod.ts';
 * import EventEmitter from 'https://deno.land/std/node/events.ts';
 *
 * const emitter = new EventEmitter() as TypedEventEmitter<{ message: (message: string) => void }>;
 * 
 * emitter.on('message', console.log);
 * emitter.emit('message', 'Hello World');
 */
export interface TypedEventEmitter<Events extends EventMap> {
	addListener<K extends keyof Events>(event: K, listener: Events[K]): this;
	emit<K extends keyof Events>(event: K, ...args: Parameters<Events[K]>): boolean;
	eventNames(): (keyof Events)[];
	getMaxListeners(): number;
	listenerCount(type: keyof Events): number;
	listeners(type: keyof Events): Function[];
	off<K extends keyof Events>(event: K, listener: Events[K]): this;
	on<K extends keyof Events>(event: K, listener: Events[K]): this;
	once<K extends keyof Events>(event: K, listener: Events[K]): this;
	prependListener<K extends keyof Events>(event: K, listener: Events[K]): this;
	prependOnceListener<K extends keyof Events>(event: K, listener: Events[K]): this;
	rawListeners(type: keyof Events): Function[];
	removeAllListeners(type?: keyof Events): this;
	removeListener<K extends keyof Events>(event: K, listener: Events[K]): this;
	setMaxListeners(n: number): this;
}

export default TypedEventEmitter;
