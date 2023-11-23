import ButtonWithLink from '@/components/ButtonWithLink'

export default function Landing() {
  return (
    <main>
        <div>Landing Page</div>
        <div>
            OML-GPT <br />
            A ChatGPT plugin allowing you to use natural language to query databases and understand the data in a conversation manner
        </div>
        <ButtonWithLink href='/login'>Login</ButtonWithLink>
    </main>
  )
}

