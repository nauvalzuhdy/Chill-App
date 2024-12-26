
import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Premium from './pages/Premium/premium';
import Write from './component/Write'
import UserList from './pages/User/UserList';
import Create from './pages/User/Create';
import Update from './pages/User/Update';
import Read from './pages/User/Read';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        const excludedPaths = ['/write', '/update', '/read', '/create', '/userlist'];
        if (!excludedPaths.includes(window.location.pathname)) {
          navigate('/', { replace: true });
        }
      } else {
        console.log("Logged Out");
        const excludedPaths = ['/write', '/update', '/read', '/create', '/userlist', '/login'];
        if (!excludedPaths.includes(window.location.pathname)) {
          navigate('/login', { replace: true });
        }
      }
    })
  }, [])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/premium' element={<Premium />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/write' element={<Write />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </div>
  )
}

export default App;