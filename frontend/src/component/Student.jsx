import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Student = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setStudents(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/student/'+id);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center p-3'>
        <div style={{height: 'fit-content'}} className='w-50 bg-white rounded p-3 '>
            <Link to={'/create'} className='btn btn-success mb-3'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{fontSize: '14px'}}>
                    {
                        students.map((student, index) => (
                            <tr key={index} className='align-middle'>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`update/${student.id}`}>
                                        <button style={{fontSize: '14px'}} className='btn btn-primary'>Update</button>
                                    </Link>
                                    <button onClick={e => handleDelete(student.id)} style={{fontSize: '14px'}} className='btn btn-danger ms-2'>Delete</button>
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

export default Student