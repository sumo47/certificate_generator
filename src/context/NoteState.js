import NoteContext from './NoteContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const NoteState = (props) => {

  const url = "https://living-possible-wish.glitch.me";
  // const url = "http://localhost:4000";

  let navigate = useNavigate()

  //*Login
  const login = async (credential, showAlert) => {

    const { email, password } = credential

    await axios.post(`${url}/login`, { email, password })
      .then((res) => {
        const token = res.data.token
        localStorage.setItem('x-api-key', token)
        showAlert("Logged in succcessfully!", "success")
        navigate('/')
      })
      .catch((err) => {
        // Wow what a nice logic // err will not console everytime while error occurs by user
        if (err.response.data.status === false) {
          showAlert(`${err.response.data.message}`, "danger")
        } else {
          console.log(err)
        }

      })
  }


  //*SignUp
  const SignUp = async (credentials, showAlert) => {
    const { name, email, password } = credentials

    axios.post(`${url}/createUser`, { name, email, password })
      .then((res) => {
        localStorage.setItem("x-api-key", res.data.token)
        showAlert("Signed in successfully!", "success")
        navigate('/')
      })
      .catch((err) => {
        if (!err.response.data.status) {
          showAlert(`${err.response.data.message}`, "danger")
        } else {
          console.log(err)
        }
      })
  }

  return (
    <NoteContext.Provider value={{ login, SignUp}} >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;