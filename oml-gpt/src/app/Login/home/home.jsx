export default function Home() {

  return (
    <>
      <div>Home</div>
    
      <Form />
      

    </>
    
  )
}

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
      <button className="btn">Button</button>
    </form>
  )
}

