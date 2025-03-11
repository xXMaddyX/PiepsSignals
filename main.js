import PiepsSignals from "./PipesSignals.js";

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

// Attempt to emit a non-existent signal
PiepsSignals.emitSignal("unknownSignal", "This won't work...");