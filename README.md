# PiepsSignals

A simple signal system for JavaScript that allows creating, connecting, disconnecting, deleting, and emitting signals.

## Introduction

PiepsSignals provides a straightforward way to implement a signal/slot pattern in your JavaScript applications. It's designed to be lightweight and easy to use, making it ideal for managing events and communication between different parts of your code.

## Installation

Since this is a single file module, you can directly import it into your project. If you are using npm or yarn you can also create a simple wrapper around it.

For example, if you are using npm:

1.  Create a file named `pieps-signals.js` and paste the code into it.
2.  In your project, you can import it like this:

```javascript
import PiepsSignals from './pieps-signals.js';

Usage
Creating a Signal
Use the createSignal method to create a new signal.

JavaScript

PiepsSignals.createSignal('myDataChanged');
Connecting a Callback
Use the connectSignal method to connect a callback function to a signal.

JavaScript

function handleDataChange(newData) {
  console.log('Data changed:', newData);
}

PiepsSignals.connectSignal('myDataChanged', handleDataChange);
Emitting a Signal
Use the emitSignal method to emit a signal and trigger the connected callbacks.

JavaScript

PiepsSignals.emitSignal('myDataChanged', { value: 42 });
Disconnecting a Callback
Use the disconnectSignal method to disconnect a callback function from a signal.

JavaScript

PiepsSignals.disconnectSignal('myDataChanged', handleDataChange);
Deleting a Signal
Use the deleteSignal method to delete a signal.

JavaScript

PiepsSignals.deleteSignal('myDataChanged');
API
PiepsSignals
A singleton instance of the PiepsSignalsClass.

PiepsSignalsClass
constructor()
Creates a new instance of PiepsSignalsClass.

createSignal(signalName)
Creates and registers a new signal.

signalName (string): The unique name of the signal.
connectSignal(signalName, callback)
Connects a callback function to a registered signal.

signalName (string): The name of the signal to connect the callback function to.
callback (function): The function to execute when the signal is emitted.
Throws: Error if the signal does not exist.
disconnectSignal(signalName, callbackToRemove)
Disconnects a callback function from a signal.

signalName (string): The name of the signal to disconnect the callback function from.
callbackToRemove (function): The callback function to disconnect.
Throws: Error if the signal does not exist.
deleteSignal(signalName)
Deletes a signal from the signal system.

signalName (string): The name of the signal to delete.
Throws: Error if the signal does not exist.
emitSignal(signalName, ...args)
Emits a signal and executes the connected callback functions.

signalName (string): The name of the signal to emit.
...args (any): Additional arguments to pass to the callback functions.
Throws: Error if the signal does not exist.
Example
JavaScript

import PiepsSignals from './pieps-signals.js';

PiepsSignals.createSignal('userLoggedIn');

function handleLogin(username) {
  console.log(`User logged in: ${username}`);
}

PiepsSignals.connectSignal('userLoggedIn', handleLogin);

PiepsSignals.emitSignal('userLoggedIn', 'JohnDoe');

PiepsSignals.disconnectSignal('userLoggedIn', handleLogin);

PiepsSignals.emitSignal('userLoggedIn', 'JaneDoe'); // Will not trigger handleLogin
Contributing
Contributions are welcome! Feel free to submit pull requests or open issues.

License
This project is licensed under the MIT 1  License.   
