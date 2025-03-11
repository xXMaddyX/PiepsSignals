# PiepsSignals Class

The **PiepsSignalsClass** is a utility for creating, managing, and emitting custom signals in JavaScript applications. This allows you to set up event-driven architectures with minimal overhead and a straightforward API.

---

## Overview

An instance of `PiepsSignalsClass` maintains a registry of signals (referred to as `SignalContainer`) using a `Map`. Each signal can have at most one connected callback, which will be triggered when the signal is emitted. This class provides methods to:

1. **Create a new signal** (`createSignal`)
2. **Connect a callback** to a signal (`connectSignal`)
3. **Disconnect** a signal’s callback (`dissconnectSignal`)
4. **Delete** a signal entirely (`deleteSignal`)
5. **Emit** a signal (`emitSignal`)

This approach makes it easy to separate various concerns in your application, allowing different parts of your code to stay decoupled and only react to relevant events.

---

## Usage

### 1. Import and Initialization

```js
import PiepsSignals from './path/to/PiepsSignals';
