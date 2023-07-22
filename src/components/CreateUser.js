import React, { useState } from 'react'
import axios from 'axios'


function Create(props) {

    const [state, setState] = useState({ firstName: '', lastName: '', email: '', mobile: " " })

    const createUser = async (credential) => {
        let {firstName, lastName, email, mobile} = credential
        await axios.post("http://localhost:4000/createUser", { firstName, lastName, email, mobile })
            .then((res) => {
                alert(`User ${firstName} added succesfully!`)
            })
            .catch((err) => {
                alert(err.response.data.message +" "+ err.response.status + " Error");
            })
    }

    const onChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        createUser(state)
    }

    return (
        <div className='container d-flex justify-content-center'>
        <div className='mx-3 createUser'>
            <h2 className='mt-5'>Create an User</h2>
            <form onSubmit={handleClick}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="Text" className="form-control mb-3" id="firstName" onChange={onChange} placeholder="First Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="Text" className="form-control mb-3" id="lastName" onChange={onChange} placeholder="Last Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email address</label>
                    <input type="email" className="form-control mb-3" id="email" onChange={onChange} required aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="Number">Mobile Number</label>
                    <input type="number" className="form-control mb-3" id="mobile" onChange={onChange} required aria-describedby="emailHelp" placeholder="Enter mObile Number" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
        </div>
    )
}

export default Create