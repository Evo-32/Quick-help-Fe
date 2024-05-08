import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
// import Home from "./Components/Home"
// import About from "./Components/About"
// import Contact from"./Components/Contact"
// import Signin from "./Components/auth/Signin"
// import Employee from "./Components/Employee"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        {/* <Route path='/home' element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/employee" element={<Employee/>}/>2
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<Signin/>}/> */}
      </Routes>
    </Router>
  )
}

export default App