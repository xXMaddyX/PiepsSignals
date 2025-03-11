class PiepsSignalsClass {
    constructor() {
        this.SignalContainer = new Map();
    };

    /**
     * Creates and registers a new signal.
     * If the signal already exists, it will be overwritten.
     * @param {string} signalName - The unique name of the signal.
     */
    createSignal(signalName) {
        const customSignal = (callback) => callback;
        this.SignalContainer.set(signalName, customSignal);
    };

    /**
     * Connects a callback function to a registered signal.
     * The callback function will be executed when the signal is emitted.
     * Only one callback can be assigned per signal; existing callbacks will be replaced.
     * @param {string} signalName - The name of the signal to connect to.
     * @param {function} callback - The function to execute when the signal is emitted.
     * @throws {Error} If the signal does not exist.
     */
    connectSignal(signalName, callback) {
        if (this.SignalContainer.has(signalName)) {
            let signal = this.SignalContainer.get(signalName);
            this.SignalContainer.set(signalName, signal(callback));
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };

    /**
     * Dissconnect a signal from given callback.
     * @param {string} signalName - The name of the signal to disconnect.
     */
    dissconnectSignal(signalName) {
        if (this.SignalContainer.has(signalName)) {
            this.SignalContainer.set(signalName, null);
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };

    /**
     * Delets a Signal from Signal System.
     * @param {string} signalName - The name of the signal to delete.
     */
    deleteSignal(signalName) {
        if (this.SignalContainer.has(signalName)) {
            this.SignalContainer.delete(signalName)
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };

    /**
     * Emits a signal and executes the connected callback function.
     * Additional arguments can be passed to the callback function.
     * @param {string} signalName - The name of the signal to emit.
     * @param {...any} args - Arguments to pass to the connected callback function.
     * @throws {Error} If the signal does not exist or has no assigned callback.
     */
    emitSignal(signalName, ...args) {
        if (this.SignalContainer.has(signalName)) {
            let signal = this.SignalContainer.get(signalName);
            if (typeof signal === "function") {
                signal(...args);
            } else {
                console.warn(new Error(`Signal "${signalName}" has no assigned callback!`));
            };
        } else {
            console.warn(new Error(`Signal "${signalName}" not found in storage!`));
        };
    };
};

const PiepsSignals = new PiepsSignalsClass();
export default PiepsSignals;
