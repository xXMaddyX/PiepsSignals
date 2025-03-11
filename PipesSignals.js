/**
 * @class PiepsSignalsClass
 * @classdesc A simple signal system that allows creating, connecting, disconnecting, deleting, and emitting signals.
 */
class PiepsSignalsClass {
    /**
     * @constructor
     * @description Creates a new instance of PiepsSignalsClass.
     */
    constructor() {
        /**
         * @private
         * @type {Map<string, function[]>}
         * @description Stores the signals and their associated callbacks.
         */
        this.SignalContainer = new Map();
    };

    /**
     * @method createSignal
     * @description Creates and registers a new signal.
     * @param {string} signalName - The unique name of the signal.
     */
    createSignal(signalName) {
        this.SignalContainer.set(signalName, []); // Array for callbacks
    };

    /**
     * @method connectSignal
     * @description Connects a callback function to a registered signal.
     * @param {string} signalName - The name of the signal to connect the callback function to.
     * @param {function} callback - The function to execute when the signal is emitted.
     * @throws {Error} If the signal does not exist.
     */
    connectSignal(signalName, callback) {
        if (this.SignalContainer.has(signalName)) {
            this.SignalContainer.get(signalName).push(callback);
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };

    /**
     * @method disconnectSignal
     * @description Disconnects a callback function from a signal.
     * @param {string} signalName - The name of the signal to disconnect the callback function from.
     * @param {function} callbackToRemove - The callback function to disconnect.
     * @throws {Error} If the signal does not exist.
     */
    disconnectSignal(signalName, callbackToRemove) {
        if (this.SignalContainer.has(signalName)) {
            const callbacks = this.SignalContainer.get(signalName);
            this.SignalContainer.set(signalName, callbacks.filter(callback => callback !== callbackToRemove));
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };

    /**
     * @method deleteSignal
     * @description Deletes a signal from the signal system.
     * @param {string} signalName - The name of the signal to delete.
     * @throws {Error} If the signal does not exist.
     */
    deleteSignal(signalName) {
        if (this.SignalContainer.has(signalName)) {
            this.SignalContainer.delete(signalName)
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };

    /**
     * @method emitSignal
     * @description Emits a signal and executes the connected callback functions.
     * @param {string} signalName - The name of the signal to emit.
     * @param {...any} args - Additional arguments to pass to the callback functions.
     * @throws {Error} If the signal does not exist.
     */
    emitSignal(signalName, ...args) {
        if (this.SignalContainer.has(signalName)) {
            const callbacks = this.SignalContainer.get(signalName);
            callbacks.forEach(callback => callback(...args));
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };
};

/**
 * @type {PiepsSignalsClass}
 * @description An instance of PiepsSignalsClass used as a singleton.
 */
const PiepsSignals = new PiepsSignalsClass();

export default PiepsSignals;