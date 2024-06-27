import React from 'react'
import Home from '../src/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Book from '../src/Book/Book'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/Authprovider'
import About from './components/About'
import Contact from './components/Contact'



const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Book' element={authUser?<Book />:<Navigate to={"/signup"}/>} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />

      </Routes>
      <Toaster />
    </>
  )
}

export default App
