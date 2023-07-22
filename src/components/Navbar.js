import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import NoteContext from '../context/NoteContext'

export default function Navbar() {

    let Location = useLocation()
    let Navigate = useNavigate()

    useEffect(() => {
    }, [Location])

    const handleAddUser = () => {
        Navigate('/addUser')
    }

    return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">List</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${Location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${Location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>

                    <button className="btn btn-primary mx-2" onClick={handleAddUser}>Add User</button>
                </div>
            </div>
        </nav>
    )
}


