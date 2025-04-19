import type { ReactNode } from "react"

function MarkerList({children}: { children: ReactNode }) {
  return (
    <dl className="w-full">{children}</dl>
  )
}

function Term({children}: { children: ReactNode }) {
  return (
    <dt className="font-semibold mb-0.5">{children}</dt>
  )
}

function Detail({children}: { children: ReactNode }) {
  return (
    <dd className="mb-1">{children}</dd>
  )
}


MarkerList.Term = Term;
MarkerList.Detail = Detail;
export {
  MarkerList,
}
