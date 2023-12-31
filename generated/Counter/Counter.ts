// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Decremented extends ethereum.Event {
  get params(): Decremented__Params {
    return new Decremented__Params(this);
  }
}

export class Decremented__Params {
  _event: Decremented;

  constructor(event: Decremented) {
    this._event = event;
  }

  get decremented(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Incremented extends ethereum.Event {
  get params(): Incremented__Params {
    return new Incremented__Params(this);
  }
}

export class Incremented__Params {
  _event: Incremented;

  constructor(event: Incremented) {
    this._event = event;
  }

  get incremented(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NumberSet extends ethereum.Event {
  get params(): NumberSet__Params {
    return new NumberSet__Params(this);
  }
}

export class NumberSet__Params {
  _event: NumberSet;

  constructor(event: NumberSet) {
    this._event = event;
  }

  get number(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Counter extends ethereum.SmartContract {
  static bind(address: Address): Counter {
    return new Counter("Counter", address);
  }

  number(): BigInt {
    let result = super.call("number", "number():(uint256)", []);

    return result[0].toBigInt();
  }

  try_number(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("number", "number():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DecrementCall extends ethereum.Call {
  get inputs(): DecrementCall__Inputs {
    return new DecrementCall__Inputs(this);
  }

  get outputs(): DecrementCall__Outputs {
    return new DecrementCall__Outputs(this);
  }
}

export class DecrementCall__Inputs {
  _call: DecrementCall;

  constructor(call: DecrementCall) {
    this._call = call;
  }
}

export class DecrementCall__Outputs {
  _call: DecrementCall;

  constructor(call: DecrementCall) {
    this._call = call;
  }
}

export class IncrementCall extends ethereum.Call {
  get inputs(): IncrementCall__Inputs {
    return new IncrementCall__Inputs(this);
  }

  get outputs(): IncrementCall__Outputs {
    return new IncrementCall__Outputs(this);
  }
}

export class IncrementCall__Inputs {
  _call: IncrementCall;

  constructor(call: IncrementCall) {
    this._call = call;
  }
}

export class IncrementCall__Outputs {
  _call: IncrementCall;

  constructor(call: IncrementCall) {
    this._call = call;
  }
}

export class SetNumberCall extends ethereum.Call {
  get inputs(): SetNumberCall__Inputs {
    return new SetNumberCall__Inputs(this);
  }

  get outputs(): SetNumberCall__Outputs {
    return new SetNumberCall__Outputs(this);
  }
}

export class SetNumberCall__Inputs {
  _call: SetNumberCall;

  constructor(call: SetNumberCall) {
    this._call = call;
  }

  get newNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNumberCall__Outputs {
  _call: SetNumberCall;

  constructor(call: SetNumberCall) {
    this._call = call;
  }
}
