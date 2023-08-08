import NoteContext from './NoteContext'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'

const NoteState = (props) => {

  const [cerId, setCerId] = useState("")
  const [certDetail, setCertDetail] = useState()

  const url = "https://sumo-certificate-generator.glitch.me";
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

  // Add Certificate
  const certificate = async (credential, showAlert) => {
    const { name, subtitle, date } = credential
    axios.post(`${url}/addCertificate`, { name, subtitle, date }, { headers: { 'x-api-key': localStorage.getItem('x-api-key') } })
      .then((res) => {
        setCerId(res.data.message)
        console.log(res.data, cerId)
        showAlert("Certificate Generated successfully!", "success")
      })
      .catch((err) => {
        if (!err.response.data.status) {
          showAlert(`${err.response.data.message}`, "danger")
        } else {
          console.log(err)
        }
      })
  }

  // Get Certificate
  const getCert = async (credential, showAlert) => {
    const { id } = credential
    axios.post(`${url}/getCertificate`, { id })
      .then((res) => {
        setCertDetail(res.data.message)
        showAlert("Successfully fetched Certificate", "success")
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
    <NoteContext.Provider value={{ login, SignUp, certificate, cerId, getCert, certDetail }} >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;