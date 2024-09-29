import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// useSelector

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addUser({
            id: users[users.length - 1].id + 1,
            name,
            email,
        }))
        navigate('/')
    }



    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border rounded bg-secondary text-white p-5 shadow-lg">
          <h2 className="text-center mb-4">Add New User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="nameHelp"
                required
                onChange={e => setName(e.target.value)}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="emailHelp"
                required
                onChange={e => setEmail(e.target.value)}

              />
            </div>
  
            <div className="text-center">
              <button type="submit" className="btn btn-info w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Create;
