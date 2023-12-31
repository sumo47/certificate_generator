import React, { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/NoteContext'
import {useNavigate} from 'react-router-dom'


function Login(props) {

    const Navigate = useNavigate()

    const { login } = useContext(NoteContext)
    const [state, setState] = useState({ email: "", password: "" })
    let { showAlert } = props


    useEffect(() => {
        if(localStorage.getItem("x-api-key")){
            Navigate('/')
        }
    }, [])
    

    const onChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        login(state, showAlert)
    }

    return (
        <div className='container'>
            <form onSubmit={handleClick}>
                <h2 className='mt-5'>Please Login to continue Certificate Generator</h2>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={onChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={onChange} type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary my-3">Login</button>
            </form>
        </div>
    )
}

export default Login