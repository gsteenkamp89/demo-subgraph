// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Number extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Number entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Number must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Number", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Number | null {
    return changetype<Number | null>(store.get_in_block("Number", id));
  }

  static load(id: string): Number | null {
    return changetype<Number | null>(store.get("Number", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currentAmount(): BigInt {
    let value = this.get("currentAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set currentAmount(value: BigInt) {
    this.set("currentAmount", Value.fromBigInt(value));
  }

  get changes(): Array<string> | null {
    let value = this.get("changes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set changes(value: Array<string> | null) {
    if (!value) {
      this.unset("changes");
    } else {
      this.set("changes", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Change extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Change entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Change must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Change", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Change | null {
    return changetype<Change | null>(store.get_in_block("Change", id));
  }

  static load(id: string): Change | null {
    return changetype<Change | null>(store.get("Change", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get direction(): string {
    let value = this.get("direction");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set direction(value: string) {
    this.set("direction", Value.fromString(value));
  }

  get delta(): BigInt {
    let value = this.get("delta");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set delta(value: BigInt) {
    this.set("delta", Value.fromBigInt(value));
  }
}
