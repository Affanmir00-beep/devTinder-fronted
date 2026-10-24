

import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from "./navbar.jsx";
import Body from "./body.jsx";
import Login from "./login.jsx";
import Profile from "./profile.jsx";
function App() {
 

  return (
    <>


<BrowserRouter basename="/">
{/* // base name is where our application should route to 
// now we create multiple routes inside our browser router and we can use the link component to navigate between them to do that we have to use routes and route component from react-router-dom and we can use the link component to navigate between them. this routes component is just like a wrapper for differnt components inside our routes we can create small small single routes */}
<Routes>
  <Route path="/" element={<Body/>}>
   <Route path="/Login" element={<Login/>}/>
    <Route path="/Profile" element={<Profile/>}/>
  </Route>
  {/* // this element will decide waht will render in this path */}
</Routes>

</BrowserRouter>

   {/* <h1 className="text-3xl font-bold">Hello world</h1>
  <button className="btn btn-primary">Button</button> */}
    </>
   
  )
}

export default App
