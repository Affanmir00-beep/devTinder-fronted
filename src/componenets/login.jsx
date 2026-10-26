import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { adduser } from '../utils/userslice.js'
import { useNavigate } from 'react-router-dom' 
import { BASE_URL } from '../utils/constants.js'
const Login = () => {
  const [emailId, setEmailId] = useState('affan14@gmail.com')
  const [password, setPassword] = useState('Affan@12345')
  const dispatch = useDispatch() // this is a hook from react-redux which we can use to dispatch actions to the store. we can use this dispatch function to dispatch actions to the store and we can use the state from the store to show the user if the login is successful or not. we can also use this dispatch function to update the state in the store and we can use this state to show the user if the login is successful or not.
  // here we sue hook knowns as use state to create a state variable for email and password and we can use this state variable to store the value of email and password and we can use this value to send it to the server for authentication.
  const navigate = useNavigate() // this is a hook from react-router-dom which we can use to navigate to different pages in the application. we can use this navigate function to navigate to different pages in the application and we can use this function to show the user if the login is successful or not.
  const  handleLogin = async () => {
    //  here we are makig api call to the server for authentication and we can use the fetch api to send the data to the server and we can use the response from the server to show the user if the login is successful or not.
    // here we can use the email and password to send it to the server for authentication and we can use fetch api to send the data to the server and we can use the response from the server to show the user if the login is successful or not.
    try {
      const res = await axios.post(  BASE_URL+'/login', {
        emailid: emailId,
        password,
      }, {
        withCredentials: true
      })
      dispatch(adduser(res.data.user)) // here we are dispatching the action to the store and we can use this action to update the state in the store and we can use this state to show the user if the login is successful or not.
      console.log('Login successful:', res.status, res.data.message)
      navigate('/')
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
