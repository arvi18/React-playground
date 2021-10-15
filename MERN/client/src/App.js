import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  async function registerUser(e){
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/register', {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })

    console.log(response);
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
      <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} />
      <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
      <input type="submit" value="Register" />
      </form>

    </div>
  );
}

export default App;