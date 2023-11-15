import React from 'react'

const Login = () => {
  return (
    <div className="join join-vertical">
      Login
      <LoginBox />
    </div>
    
  )
}

const LoginBox = () => {
  return (
    <div className="join join-vertical">
      <Information />
      <button className="btn btn-wide">Submit</button>
    </div>
  )
}

const Information = () => {
  return (
    <div className="join join-vertical">
        <label for='username'>Username: </label>
        <input type='text' id='username' name='username' className='information'/>
        <label for='password'>Password: </label>
        <input type='password' id='password' name='password' className='information'/>
    </div>
  )
}

export default Login