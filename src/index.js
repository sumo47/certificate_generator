import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './componenets/Login'
import SignUp from './componenets/SignUp'
import Navbar from './componenets/Navbar'
import NoteState from './context/NoteState'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <>
        <BrowserRouter>
            <NoteState>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />

                </Routes>
            </NoteState>
        </BrowserRouter>
    </>
);
