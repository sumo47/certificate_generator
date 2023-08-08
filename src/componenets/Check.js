import React, { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/NoteContext'


function Check(props) {

    const { getCert, certDetail } = useContext(NoteContext)
    const [value, setValue] = useState({ id: "" })
    const { showAlert } = props
 
    const OnChange = (e) => {
        setValue({ ...value, [e.target.id]: e.target.value })
    }

    const Check = () => {
        getCert(value, showAlert)

    }

    useEffect(() => {
   
    }, [certDetail])
    

    return (
        <div className='my-2 container'>
            <h3>Check wether generated certificate is orignal or not</h3>

            <div className="form-group d-flex">
                <label className='my-3 mx-3' htmlFor="">ID - </label>
                <input type="text" className='form-control w-50' name="id" id="id" placeholder='id given below in certificate' onChange={OnChange} />
                <button className="btn btn-primary mx-2" onClick={Check}>Check</button>
            </div>

            <div className="container  d-flex justify-content-center mt-3">
                <div className="card quote" style={{ width: "30rem", background: "linear-gradient(135deg, #71b7e6, #9b59b6)", boxShadow: "5px 10px 18px black" }}>
                    <div className="card-body">
                        <div className="number d-flex">
                            <h5 className="card-title" style={{ color: "rgb(14, 14, 187)" }}>Name -</h5>
                            <h4 className='mx-3'>{certDetail?certDetail.name:"xxxx"}</h4>
                        </div>
                        <div className="number d-flex">
                            <h5 className="card-title" style={{ color: "rgb(14, 14, 187)" }}>Subtitle -</h5>
                            <h4 className='mx-2'>{certDetail?certDetail.subtitle:"xxxx"}</h4>
                        </div>
                        <div className="number d-flex">
                            <h5 className="card-title" style={{ color: "rgb(14, 14, 187)" }}>Date -</h5>
                            <h4 className='mx-4'>{certDetail?certDetail.date:"xxxx"}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Check