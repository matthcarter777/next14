import { Suspense } from 'react';
import { Repo } from "../components/Repo";
import { User } from "../components/User";

export default function Dashboard() {
  
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>carregando repositórios...</p>}>
        <User />
        <Repo />
      </Suspense>
    </div>
  )
}