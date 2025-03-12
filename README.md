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
```

# Usage
Creating a Signal
Use the createSignal method to create a new signal.

```javascript
PiepsSignals.createSignal('myDataChanged');
```

## Connecting a Callback
Use the connectSignal method to connect a callback function to a signal.

```javascript
function handleDataChange(newData) {
  console.log('Data changed:', newData);
}

PiepsSignals.connectSignal('myDataChanged', handleDataChange);
```

## Emitting a Signal
Use the emitSignal method to emit a signal and trigger the connected callbacks.

```javascript
PiepsSignals.disconnectSignal('myDataChanged', handleDataChange);
```

## Disconnecting a Callback
Use the disconnectSignal method to disconnect a callback function from a signal.

```javascript
PiepsSignals.disconnectSignal('myDataChanged', handleDataChange);
```

## Deleting a Signal
Use the deleteSignal method to delete a signal.

```javascript
PiepsSignals.deleteSignal('myDataChanged');
```

# Example

```javascript
import PiepsSignals from './pieps-signals.js';

PiepsSignals.createSignal('userLoggedIn');

function handleLogin(username) {
  console.log(`User logged in: ${username}`);
}

PiepsSignals.connectSignal('userLoggedIn', handleLogin);

PiepsSignals.emitSignal('userLoggedIn', 'JohnDoe');

PiepsSignals.disconnectSignal('userLoggedIn', handleLogin);

PiepsSignals.emitSignal('userLoggedIn', 'JaneDoe'); // Will not trigger handleLogin
```

# Contributing
Contributions are welcome! Feel free to submit pull requests or open issues.

# License
This project is licensed under the MIT 1  License.