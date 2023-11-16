'use client'
import { useCounter } from "./hooks/useCounter"

export default function Home() {

  const { add, remove, counter} = useCounter();

  return (
    <div>
      <button onClick={add}>Add</button>
      <p>{ counter }</p>
      <button onClick={remove}>Remove</button>
    </div>
  )
}
