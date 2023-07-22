import "./app.css"
import HomePage from "./components/HomePage"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UpdateButton from "./components/UpdateButton"
import Navbar from './components/Navbar'
import CreateUser from './components/CreateUser'

export default function App(){

    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/updateUser/:userId' element={<UpdateButton/>} />
            <Route path='/addUser' element={<CreateUser/>} />
        </Routes>
    </BrowserRouter>
    </>
    )
}