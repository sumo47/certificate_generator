import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './componenets/Login'
import SignUp from './componenets/SignUp'
import Navbar from './componenets/Navbar'
import NoteState from './context/NoteState'
import Home from './componenets/Home'
import Alert from './componenets/Alert'

function App() {

    const [alert, setAlert] = useState(null)

    const alertFunction = (message, type) => {
        setAlert({
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    return (
        <BrowserRouter>
            <NoteState>
                <Navbar />
                <Alert alert = {alert} />
                <Routes>
                    <Route path='/' element={<Home showAlert={alertFunction} />} />
                    <Route path='/login' element={<Login showAlert={alertFunction} />} />
                    <Route path='/signup' element={<SignUp showAlert = {alertFunction}/>} />
                </Routes>
            </NoteState>
        </BrowserRouter>
    )
}

export default App