import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStudent = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8081/update/'+id, {name, email})
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center p-3'>
      <div style={{height: 'fit-content'}} className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="student-name">Name</label>
            <input 
              type="text" 
              placeholder='Enter Name' 
              className='form-control' 
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
              />
          </div>
          <div className='mb-2'>
            <label htmlFor="student-email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="" 
              placeholder='Enter Email' 
              className='form-control' 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent