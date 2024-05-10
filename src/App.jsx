import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Layout from './Components/auth/Layout'
import Contact from"./Components/Contact"
// import Signin from "./Components/auth/Signin"
import Employee from "./Components/Employee"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/signin' element={<Signin/>}/> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App