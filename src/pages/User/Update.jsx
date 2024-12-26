import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';


function Update() {

  // const [data, setData] = useState([])
  const {id} = useParams();

  const [values, setValues] = useState({
    email: '',
    paket: ''
  }) 

  const navigate = useNavigate();

  useEffect(()=> {
      axios.get('http://localhost:3000/users/'+ id)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/users/'+id, values)
    .then(res => {
      console.log(res);
      navigate('/userlist')
    })
    .catch(err => console.log(err));
  }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate} >
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email' value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="paket">Paket:</label>
            <input type="text" name='paket' className='form-control' placeholder='Enter Paket' value={values.paket} onChange={e => setValues({...values, paket: e.target.value})}/>
          </div>
          <button className='btn btn-success'>Update</button>
          <Link to="/userlist" className='btn btn-primary ms-3' >Back</Link>
        </form>
      </div>
      update
    </div>
  )
}

export default Update
