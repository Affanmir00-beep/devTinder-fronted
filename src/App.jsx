

import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from "./navbar";
function App() {
 

  return (
    <>


<BrowserRouter basename="/">
{/* // base name is where our application should route to 
// now we create multiple routes inside our browser router and we can use the link component to navigate between them to do that we have to use routes and route component from react-router-dom and we can use the link component to navigate between them. this routes component is just like a wrapper for differnt components inside our routes we can create small small single routes */}
<Routes>
  <Route path="/" element={<div> <h1>base Page</h1></div>} />
  <Route path="/login" element={<div> <h1>Login Page</h1></div>} />
    <Route path="/signup" element={<div> <h1>Signup Page</h1></div>} />
  {/* // this element will decide waht will render in this path */}
</Routes>

</BrowserRouter>

<Navbar/>
   <h1 className="text-3xl font-bold">Hello world</h1>
  <button className="btn btn-primary">Button</button>
    </>
   
  )
}

export default App
