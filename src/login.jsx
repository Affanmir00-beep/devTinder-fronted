import { useState } from 'react'
import axios from 'axios'
const Login = () => {
  const [emailId, setEmailId] = useState('affan14@gmail.com')
  const [password, setPassword] = useState('Affan@12345')
  // here we sue hook knowns as use state to create a state variable for email and password and we can use this state variable to store the value of email and password and we can use this value to send it to the server for authentication.
  const  handleLogin = async () => {
    //  here we are makig api call to the server for authentication and we can use the fetch api to send the data to the server and we can use the response from the server to show the user if the login is successful or not.
    // here we can use the email and password to send it to the server for authentication and we can use fetch api to send the data to the server and we can use the response from the server to show the user if the login is successful or not.
    try {
      const res = await axios.post('http://localhost:3000/login', {
        emailid: emailId,
        password,
      }, {
        withCredentials: true
      })
      console.log('Login successful:', res.status, res.data.message)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Login request failed:',
          error.response?.status,
          error.response?.data ?? error.message,
        )
      } else {
        console.error('Unexpected error while logging in:', error)
      }
    }
  }

  return (
    <section className="flex w-full flex-1 items-center justify-center bg-base-200 px-4 py-12">
      <div className="card card-border w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body gap-5">
          <h1 className="card-title text-2xl">Login</h1>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              value={emailId}
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input input-bordered w-full"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              value={password}
              id="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="card-actions justify-end">
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
