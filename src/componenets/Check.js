import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'


function Check() {

    const { CertCheck } = useContext(NoteContext)

    


    return (
        <div className='my-2 container'>
            <h3>Check wether generated certificate is orignal or not</h3>

            <div className="form-group d-flex">
                <label className='my-3 mx-3' htmlFor="">ID - </label>
                <input type="text" className='form-control w-50' name="" id="id" placeholder='id given below in certificate' />
                <button className="btn btn-primary mx-2">Check</button>
            </div>

           


            <div className="container  d-flex justify-content-center mt-3">
                <div className="card quote" style={{ width: "30rem", background: "linear-gradient(135deg, #71b7e6, #9b59b6)", boxShadow: "5px 10px 18px black" }}>
                    <div className="card-body">
                        <div className="number d-flex">
                            <h5 className="card-title" style={{ color: "rgb(14, 14, 187)" }}>Name -</h5>
                            <h4 className='mx-3'>sumit</h4>
                        </div>
                        <div className="number d-flex">
                            <h5 className="card-title" style={{ color: "rgb(14, 14, 187)" }}>Subtitle -</h5>
                            <h4 className='mx-2'>sumit</h4>
                        </div>
                        <div className="number d-flex">
                            <h5 className="card-title" style={{ color: "rgb(14, 14, 187)" }}>Date -</h5>
                            <h4 className='mx-4'>sumit</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Check