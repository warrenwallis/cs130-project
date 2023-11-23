import Link from 'next/link'

export default function ButtonWithLink({ href, children }) {
    return (
        <Link href={ href }>
            <button className="btn btn-outline btn-accent">{ children }</button>
        </Link>
    )
}