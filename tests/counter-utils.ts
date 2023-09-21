import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Decremented,
  Incremented,
  NumberSet
} from "../generated/Counter/Counter"

export function createDecrementedEvent(
  decremented: BigInt,
  sender: Address
): Decremented {
  let decrementedEvent = changetype<Decremented>(newMockEvent())

  decrementedEvent.parameters = new Array()

  decrementedEvent.parameters.push(
    new ethereum.EventParam(
      "decremented",
      ethereum.Value.fromUnsignedBigInt(decremented)
    )
  )
  decrementedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return decrementedEvent
}

export function createIncrementedEvent(
  incremented: BigInt,
  sender: Address
): Incremented {
  let incrementedEvent = changetype<Incremented>(newMockEvent())

  incrementedEvent.parameters = new Array()

  incrementedEvent.parameters.push(
    new ethereum.EventParam(
      "incremented",
      ethereum.Value.fromUnsignedBigInt(incremented)
    )
  )
  incrementedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return incrementedEvent
}

export function createNumberSetEvent(number: BigInt): NumberSet {
  let numberSetEvent = changetype<NumberSet>(newMockEvent())

  numberSetEvent.parameters = new Array()

  numberSetEvent.parameters.push(
    new ethereum.EventParam("number", ethereum.Value.fromUnsignedBigInt(number))
  )

  return numberSetEvent
}
