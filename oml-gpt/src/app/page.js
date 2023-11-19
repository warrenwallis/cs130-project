import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants"
import Link from "next/link"

export default function Page() {
  return (
    <main>
      <h1>Starting Page</h1>
      <div>
        OML-GPT <br />
        A ChatGPT plugin allowing you to use natural language to query databases and understand the data in a conversation manner
      </div>
      <Link href="/Login">Login</Link>
    </main>
  )
}
