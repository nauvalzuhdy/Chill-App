import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux' 
//Halaman Home

function UserList() {

    const users = useSelector((state) => state.users);
    console.log(users)

    const [data, setData] = useState([])
    // const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like to Delete?");
        if(confirm) {
            axios.delete('http://localhost:3000/users/'+id)
            .then(res => {
                location.reload();
            }).catch (err => console.log(err));
        }
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-black vh-100'>
        <h1>List of Users</h1>
        <div className='w-75 rounded bg-black border shadow p-4'>
            <div className='d-flex justify-content-end bg-success fw-bold'>
                <Link to="/create" className='btn btn-success'>Add+</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Paket</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.email}</td>
                                <td>{d.paket}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info '>Read</Link>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                    <button onClick={ e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
