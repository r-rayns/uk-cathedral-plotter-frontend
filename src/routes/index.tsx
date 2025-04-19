import { createFileRoute } from '@tanstack/react-router'
import CathedralMap from '@/components/cathedralMap.tsx';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header
        className=" text-center bg-slate-800 text-white">
        <h1>UK Cathedral Plotter</h1>
      </header>
      <div className="grow">
        <CathedralMap/>
      </div>
    </div>
  )
}
