import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { addUser } from '../../redux/UserReducer'
import { useDispatch, useSelector } from 'react-redux'

function Create() {

  const [values, setValues] = useState({
    email: '',
    paket: ''
  }) 

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let nextId = parseInt(users[users.length - 1].id) + 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({id: nextId.toString(), email: values.email, paket: values.paket}));
    // nextId++;
    axios.post('http://localhost:3000/users', values)
    .then(res => {
      console.log(res);
      navigate('/userlist')
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a New User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email' onChange={e => setValues({...values, email: e.target.value})}/>
          </div>
          <div>
            <label htmlFor="paket">Paket: </label>
            <input type="text" name='paket' className='form-control' placeholder='Enter Paket' onChange={e => setValues({...values, paket: e.target.value})}/>
          </div>
          <button className='btn btn-succes'>Submit</button>
          <Link to="/userlist" className='btn btn-primary ms-3' >Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
