import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'



function Update() {


    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border rounded bg-secondary text-white p-5 shadow-lg">
      <h2 className="text-center mb-4">Update User</h2>
      <form onSubmit={handleUpdate} >
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
            value={uname}
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
            value={uemail}
            onChange={e => setEmail(e.target.value)}

          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-info w-100">Update</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Update