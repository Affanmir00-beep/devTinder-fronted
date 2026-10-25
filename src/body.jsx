import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Body = () => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      <Navbar />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Body
