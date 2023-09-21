import {
  Decremented as DecrementedEvent,
  Incremented as IncrementedEvent,
  NumberSet as NumberSetEvent
} from "../generated/Counter/Counter"
import { Decremented, Incremented, NumberSet } from "../generated/schema"

export function handleDecremented(event: DecrementedEvent): void {
  let entity = new Decremented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.decremented = event.params.decremented
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncremented(event: IncrementedEvent): void {
  let entity = new Incremented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.incremented = event.params.incremented
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNumberSet(event: NumberSetEvent): void {
  let entity = new NumberSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.number = event.params.number

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
