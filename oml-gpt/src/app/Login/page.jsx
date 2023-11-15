'use client'
import { React, useState, useRef, useEffect } from 'react'

const Login = () => {

  return (
    <section className="join join-vertical">
      Login Page

      <LoginBox />
    </section>
    
  )
}

const LoginBox = () => {
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false) // on success, transport to home page

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd)
    setUser('')
    setPwd('')
    setSuccess(true)
  }

  return (
    <div>
      <p ref={ errRef } className={ errMsg ? 'errmsg' : 'offscreen' } aria-live='assertive'>{ errMsg }</p>

      <form className="join join-vertical" onSubmit={ handleSubmit }>
        <h1>Login</h1>
        <Information 
          user={ user }
          setUser={ setUser }
          pwd={ pwd }  
          setPwd={ setPwd }
        />
        <button className="btn btn-wide" type='submit'>Submit</button>
        <p>
          Need an Account?<br />
          <span className='line'>
            <a href='#'>Sign up</a>
          </span>
        </p>
      </form>
    </div>
  )
}

const Information = ({ user, setUser, pwd, setPwd, props }) => {

  return (
    <div className="join join-vertical">
        <label for='username'>Username: </label>
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
        <label for='password'>Password: </label>
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
  )
}

export default Login