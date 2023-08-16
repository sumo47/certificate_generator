import React, { useContext, useState, useEffect } from 'react'
import { PDFDocument, rgb } from 'pdf-lib'
import PDF from '../asset/Certificate.pdf'
import Font from '../asset/font.ttf'
import fontkit from '@pdf-lib/fontkit';
import NoteContext from '../context/NoteContext'
import { useNavigate } from 'react-router-dom'

function Home(props) {

  let { cerId, certificate } = useContext(NoteContext)
  let { showAlert } = props

  const Navigate = useNavigate()

  const [state, setstate] = useState({ name: "", subtitle: "", signature: "", date: "" })

  useEffect(() => {
    if (!localStorage.getItem('x-api-key')) {
      Navigate('/login')
      showAlert("Please Login first", "warning")
    }
    // eslint-disable-next-line
  }, [])

  const generate = async () => {
    const pdf = await fetch(PDF)
      .then((res) => { return res.arrayBuffer() })

    const font = await fetch(Font)
      .then((res) => { return res.arrayBuffer() })

    const pdfDoc = await PDFDocument.load(pdf)

    pdfDoc.registerFontkit(fontkit)
    const myfont = await pdfDoc.embedFont(font)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    firstPage.drawText(state.name, {
      x: 190,
      y: 400,
      color: rgb(0.7, 0.6, 0.4),
      size: 50,
      font: myfont
    })

    firstPage.drawText(state.date, {
      x: 85,
      y: 150,
      color: rgb(0.7, 0.6, 0.4),
      size: 20,
      font: myfont
    })

    firstPage.drawText(state.signature, {
      x: 350,
      y: 150,
      color: rgb(0.7, 0.6, 0.4),
      size: 40,
      font: myfont
    })
    firstPage.drawText(state.subtitle, {
      x: 170,
      y: 240,
      color: rgb(0.7, 0.6, 0.4),
      size: 40,
      font: myfont
    })

    firstPage.drawText(cerId, {
      x: 200,
      y: 30,
      color: rgb(0.7, 0.6, 0.4),
      size: 15
    })

    const uri = await pdfDoc.saveAsBase64({ dataUri: true })
    document.querySelector("#myPdf").src = uri
    console.log("This is certificate id - " + cerId + typeof (cerId))
  }


  const onChange = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
  }

  const Submit = async () => {
    certificate(state, showAlert)
  }


  // Bhott mehnat lagaya , //!issiliye Promis sikhna padega re baba
  useEffect(() => {
    if (cerId.split("").length === 24) {
      generate()
    }
  }, [cerId])


  return (<>
    <div className='container my-3 w-50'>
      <form onSubmit={handleClick}>
        <div className="form-group my-2">
          <label htmlFor="name"><strong>Name</strong></label>
          <input type="text" className="form-control" id="name" onChange={onChange} placeholder="Enter Name" required />
        </div>
        <div className="form-group my-2">
          <label htmlFor="subtitle"><strong>Subtitle</strong></label>
          <input type="text" className="form-control" id="subtitle" onChange={onChange} placeholder="Enter Subtitle" required />
        </div>
        <div className="form-group my-2">
          <label htmlFor="signature"><strong>Signature</strong></label>
          <input type="text" className="form-control" id="signature" onChange={onChange} placeholder="Enter Signature" required />
        </div>
        <div className="form-group my-2">
          <label htmlFor="Date"><strong>Date</strong></label>
          <input type="Text" className="form-control" id="date" onChange={onChange} placeholder="Enter Date" required />
        </div>

        <button type="submit" className="btn btn-primary my-2" onClick={Submit}>Generate</button>
        <button type="" className="btn btn-warning my-2 mx-2" onClick={() => { Navigate('/check') }}>Check</button>
      </form>
    </div>
    <iframe src='' id='myPdf' style={{ width: "500px", height: "500px", display: "flex", margin: "auto" }}></iframe>

  </>
  )
}

export default Home