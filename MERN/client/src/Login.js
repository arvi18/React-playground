import { useState } from 'react';
import './App.css';

function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  async function loginUser(e){
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/login', {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    const data= await response.json()
    console.log('data:', data)
  }

  return (
    <div className="App">
      <h1>Log In</h1>
      <form onSubmit={loginUser}>
      <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
      <input type="submit" value="Register" />
      </form>

    </div>
  );
}

export default Login;