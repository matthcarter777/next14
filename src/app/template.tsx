import { CounterContextProvider } from "./hooks/useCounter";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <CounterContextProvider>
      {children}
    </CounterContextProvider>
  )
}