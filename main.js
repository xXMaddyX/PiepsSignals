import PiepsSignals from "./PiepsSignals.js";

// Example Usage:

// Function that acts as a callback and prints a message
const printMessage = (message) => {
    console.log("Message received:", message);
};

// Function that acts as a callback and performs a calculation
const addNumbers = (a, b) => {
    console.log(`Sum: ${a} + ${b} = ${a + b}`);
};

// Create and connect the "messageSignal"
PiepsSignals.createSignal("messageSignal");
PiepsSignals.connectSignal("messageSignal", printMessage);

// Create and connect the "mathSignal"
PiepsSignals.createSignal("mathSignal");
PiepsSignals.connectSignal("mathSignal", addNumbers);

// Emit the signals
PiepsSignals.emitSignal("messageSignal", "Hello, this is a message!");
PiepsSignals.emitSignal("mathSignal", 10, 20);

// Korrekter Umgang mit nicht existierenden Signalen
// 1. Prüfe zuerst, ob das Signal existiert oder erstelle es
if (!PiepsSignals.hasSignal("unknownSignal")) {
    console.log("Signal 'unknownSignal' does not exist. Creating it first.");
    PiepsSignals.createSignal("unknownSignal");
    PiepsSignals.connectSignal("unknownSignal", printMessage);
}
// 2. Jetzt kann das Signal sicher emittiert werden
PiepsSignals.emitSignal("unknownSignal", "This will work now!");

// Beispiel für eine sicherere Methode zum Emittieren eines Signals
function safeEmit(signalName, ...args) {
    if (!PiepsSignals.hasSignal(signalName)) {
        console.log(`Signal '${signalName}' does not exist. Creating it first.`);
        PiepsSignals.createSignal(signalName);
    }
    PiepsSignals.emitSignal(signalName, ...args);
}

// Teste die safeEmit-Funktion
safeEmit("anotherSignal", "This signal was created automatically!");