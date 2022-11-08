import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB5ew1Rdb_C3vcuh_k40MxqCfkLcxCGRLU",
  authDomain: "fb-auth-c8.firebaseapp.com",
  projectId: "fb-auth-c8",
  storageBucket: "fb-auth-c8.appspot.com",
  messagingSenderId: "279615595705",
  appId: "1:279615595705:web:fb897bda254a65b64fa768"
};

export default function Login({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    const app = initializeApp(firebaseConfig) // connects to Firebase
    const auth = getAuth(app) // connects us to Firebase Auth
    const response = await signInWithEmailAndPassword(auth, email, password)
      .catch(alert)
    setUser(response.user)
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:{' '}
          <input type="email" name="email"
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder="yourname@domain.com" />
        </label><br />
        <label htmlFor="password">Password:{' '}
          <input type="password" name="password"
            value={password} onChange={e => setPassword(e.target.value)}
            placeholder="•••••••" />
        </label><br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}