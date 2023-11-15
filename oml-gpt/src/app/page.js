import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Starting Page</h1>
      <Link href="/Login">Login</Link>
    </main>
  )
}
