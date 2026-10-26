import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//  it is the main entery pointof our application, where we render the App component into the root element of the HTML document. The StrictMode component is used to highlight potential problems in the application during development. main.jsx is  the main entry point in a React application, where the root component (App) is rendered into the DOM. It also imports necessary styles and dependencies. basically we are rendering app in main.jsx. eveything is build in the app.jsx