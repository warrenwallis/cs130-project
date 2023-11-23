import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ButtonWithLink from '@/components/ButtonWithLink'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase/firebase'

export default function Login({ setLoggedUser }) {
  return (
    <section className="join join-vertical">
      <LoginBox />
    </section>
  )
}

function LoginBox({ setLoggedUser }) {
  const errRef = useRef()

  const { push } = useRouter()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false) // on success, transport to home page

  const handleSubmit = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, user, pwd)
      .then((userCred) => {
        console.log(userCred)
      }).catch((error) => {
        console.log(error)
      })

    setUser('')
    setPwd('')
  }

  return (
    <div>
      <p ref={ errRef } className={ errMsg ? 'errmsg' : 'offscreen' } aria-live='assertive'>{ errMsg }</p>

      <form className="join join-vertical" onSubmit={ handleSubmit }>
        <h1>Login</h1>
        <div className="join join-vertical">
          <label htmlFor='username'>Username: </label>
          <input 
            type='text' 
            id='username' 
            name='username' 
            className='information'
            autoComplete='off'
            onChange={ (e) => setUser(e.target.value) }
            value={ user }
            required
          />
          <label htmlFor='password'>Password: </label>
          <input 
            type='password' 
            id='password' 
            name='password' 
            className='information'
            onChange={ (e) => setPwd(e.target.value) }
            value={ pwd }
            required
          />
        </div>
        <button className="btn btn-wide btn-accent" type='submit'>Submit</button>
        <p>
          Need an Account?<br />
          <span className='line'>
            <ButtonWithLink href='/login/signup'>Sign up</ButtonWithLink>
          </span>
        </p>
      </form>
    </div>
  )
}