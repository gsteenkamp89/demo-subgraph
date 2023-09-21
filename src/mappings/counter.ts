import { BigInt } from "@graphprotocol/graph-ts";
import {
  Decremented as DecrementedEvent,
  Incremented as IncrementedEvent,
  NumberSet as NumberSetEvent,
} from "../../generated/Counter/Counter";
import { Change, Number } from "../../generated/schema";

const uniquieId: i32 = 1234;
const numberId = BigInt.fromI32(uniquieId).toHexString();

export function handleNumberSet(event: NumberSetEvent): void {
  const entity = new Number(numberId);
  entity.currentAmount = event.params.number;
  entity.save();
}

export function handleIncremented(event: IncrementedEvent): void {
  const changeEntity = new Change(event.transaction.hash.toHexString());

  changeEntity.user = event.params.sender;
  changeEntity.delta = event.params.incremented;
  changeEntity.direction = "INCREASE";
  changeEntity.save();

  const numberEntity = Number.load(numberId);

  if (numberEntity) {
    numberEntity.changes = [event.transaction.hash.toHexString()];
    numberEntity.save();
  }
}

export function handleDecremented(event: DecrementedEvent): void {
  const changeEntity = new Change(event.transaction.hash.toHexString());

  changeEntity.user = event.params.sender;
  changeEntity.delta = event.params.decremented;
  changeEntity.direction = "DECREASE";
  changeEntity.save();

  const numberEntity = Number.load(numberId);

  if (numberEntity) {
    numberEntity.changes = [event.transaction.hash.toHexString()];
    numberEntity.save();
  }
}
