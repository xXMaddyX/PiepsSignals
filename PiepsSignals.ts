/**
 * Eine einfache Signal-Systemklasse, die das Erstellen, Verbinden, Trennen, Löschen und Ausgeben von Signalen ermöglicht.
 */
class PiepsSignalsClass {
    private SignalContainer: Map<string, ((...args: any[]) => void)[]> = new Map();

    createSignal(signalName: string): void {
        this.SignalContainer.set(signalName, []);
    }

    connectSignal(signalName: string, callback: (...args: any[]) => void): void {
        if (this.SignalContainer.has(signalName)) {
            this.SignalContainer.get(signalName)?.push(callback);
        } else {
            console.warn(new Error(`Signal "${signalName}" nicht im Speicher gefunden!`));
        }
    }

    disconnectSignal(signalName: string, callbackToRemove: (...args: any[]) => void): void {
        if (this.SignalContainer.has(signalName)) {
            const callbacks = this.SignalContainer.get(signalName) || [];
            this.SignalContainer.set(signalName, callbacks.filter(callback => callback !== callbackToRemove));
        } else {
            console.warn(new Error(`Signal "${signalName}" nicht im Speicher gefunden!`));
        }
    }

    deleteSignal(signalName: string): void {
        if (this.SignalContainer.has(signalName)) {
            this.SignalContainer.delete(signalName);
        } else {
            console.warn(new Error(`Signal "${signalName}" nicht im Speicher gefunden!`));
        }
    }

    emitSignal(signalName: string, ...args: any[]): void {
        if (this.SignalContainer.has(signalName)) {
            const callbacks = this.SignalContainer.get(signalName) || [];
            callbacks.forEach(callback => callback(...args));
        } else {
            console.warn(new Error(`Signal "${signalName}" nicht im Speicher gefunden!`));
        }
    }
}

const PiepsSignals: PiepsSignalsClass = new PiepsSignalsClass();

export default PiepsSignals;