'use client'
import { ReactNode, createContext, useContext } from "react";

interface CounterProviderProps {
  children: ReactNode;
}

type CounterContextProps = {
  counter: number;
  add(): void;
  remove(): void;
}

const CounterContext = createContext({} as CounterContextProps);

export function CounterContextProvider({children}: CounterProviderProps) {
  let counter = 0;

  function add() {
    counter += 1;
  }

  function remove() {
    counter -= 1;
  }

  return(
    <CounterContext.Provider value={{counter, remove, add}}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => useContext(CounterContext);