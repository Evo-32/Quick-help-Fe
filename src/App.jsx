import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Layout from './Components/Layout'
import Contact from"./Components/Contact"
import Signin from "./Components/auth/Signin"
import Employee from "./Components/Employee"
import Signup from './Components/auth/Signup'
import Reset from './Components/auth/Reset'
import Confirmation from './Components/auth/Confirmation'
import Forgotpassword from './Components/auth/Forgotpassword'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot' element={<Forgotpassword/>}/>
        <Route path='/setnew' element={<Reset/>}/>
        <Route path='/confirm' element={<Confirmation/>}/>
      </Routes>
    </Router>
  )
}

export default App