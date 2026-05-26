import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { useState } from 'react'

import NavbarComponent from './components/NavbarComponent'

import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Study from './pages/Study'

function App() {

  const [user, setUser] = useState({
    loggedIn:false,
    admin:false
  })

  return (

    <BrowserRouter>

      {user.loggedIn && (
        <NavbarComponent />
      )}

      <Routes>

        <Route
          path="/login"
          element={
            <Login setIsLoggedIn={setUser} />
          }
        />

        <Route
          path="/"
          element={
            user.loggedIn
            ? <Home />
            : <Navigate to="/login" />
          }
        />

        <Route
          path="/about"
          element={
            user.loggedIn
            ? <About />
            : <Navigate to="/login" />
          }
        />

        <Route
          path="/events"
          element={
            user.loggedIn
            ? <Events user={user} />
            : <Navigate to="/login" />
          }
        />

        <Route
          path="/dashboard"
          element={
            user.loggedIn
            ? <Dashboard />
            : <Navigate to="/login" />
          }
        />

        <Route
          path="/study"
          element={
            user.loggedIn
            ? <Study />
            : <Navigate to="/login" />
          }
        />

        <Route
          path="/contact"
          element={
            user.loggedIn
            ? <Contact />
            : <Navigate to="/login" />
          }
        />

      </Routes>

      {user.loggedIn && (
        <Footer />
      )}

    </BrowserRouter>
  )
}

export default App