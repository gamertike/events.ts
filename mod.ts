import BaseEventEmitter from 'node:events';

/**
 * A map that specifies arguments for events
 * @example { message: [message: string] }
 */
export type EventMap = Record<string | symbol, unknown[]>;

/**
 * An event Listener
 * @example
 * Listener<[message: string]>
 * // makes
 * (message: string) => void
 */
export type Listener<T extends unknown[]> = (...args: T) => void;

/**
 * Type safe event emitter
 *
 * @example
 * const emitter = new EventEmitter<{ message(message: string): void }>();
 *
 * emitter.on('message', console.log);
 * emitter.emit('message', 'Hello, World!');
 */
export class EventEmitter<Events extends EventMap = EventMap> extends BaseEventEmitter {}

export interface EventEmitter<Events extends EventMap = EventMap> extends BaseEventEmitter {
	addListener<T extends keyof Events>(event: T, listener: Listener<Events[T]>): this;
	emit<T extends keyof Events>(event: T, ...args: Events[T]): boolean;
	eventNames(): Exclude<keyof Events, number>[];
	listenerCount(type: keyof Events): number;
	listeners<T extends keyof Events>(type: T): Listener<Events[T]>[];
	off<T extends keyof Events>(event: T, listener: Listener<Events[T]>): this;
	on<T extends keyof Events>(event: T, listener: Listener<Events[T]>): this;
	once<T extends keyof Events>(event: T, listener: Listener<Events[T]>): this;
	prependListener<T extends keyof Events>(event: T, listener: Listener<Events[T]>): this;
	prependOnceListener<T extends keyof Events>(event: T, listener: Listener<Events[T]>): this;
	rawListeners<T extends keyof Events>(type: T): Listener<Events[T]>[];
	removeAllListeners(type?: keyof Events): this;
	removeListener<T extends keyof Events>(event: T, listener: Listener<Events[T]>): this;
}

export default EventEmitter;
