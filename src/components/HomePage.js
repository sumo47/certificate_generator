import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../app.css";
import DeleteButton from "./DeleteButton";

//! Why you used onDelete method on DeleteButton

export default function HomePage() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [state, setState] = useState({ firstName: "", lastName: "", email: "", mobile: "" })
  const [id, setid] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:4000/getUsers")
      .then((res) => {
        setData(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message + err.response.status + " Error");
      });
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  //Update user
  const ref = useRef(null)
  const refClose = useRef(null)

  const handleClick = (id) => {
    ref.current.click()
    setid(id)
  }

  const onchange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value })
  }

  const update = async (credential) => {

    let { firstName, lastName, email, mobile } = credential

    await axios.put(`http://localhost:4000/updateUser/${id}`, { firstName, lastName, email, mobile })
      .then((res) => {
        refClose.current.click()
      })
      .catch((err) => {
        alert(err.response.data.message + " " + err.response.status + " Error");
      })
  }

  return (
    <div>
      <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name"> First Name</label>
              <input type="text" className="form-control" id="firstName" onChange={onchange} />
              <label htmlFor="name"> Last Name</label>
              <input type="text" className="form-control" id="lastName" onChange={onchange} />
              <label htmlFor="email"> Email</label>
              <input type="text" className="form-control" id="email" onChange={onchange} />
              <label htmlFor="number"> Number</label>
              <input type="text" className="form-control" id="mobile" onChange={onchange} />
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => { update(state) }}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        {data.map((x) => {
          return (
            <div className="card mx-3 my-3" key={x._id}>
              <div className="dataContainer">
                <div className="container d-flex">
                  <label>Name : </label>
                  <p>
                    <strong>{x.firstName + x.lastName}</strong>
                  </p>
                </div>
                <div className=" container email d-flex">
                  <label>Email :</label>
                  <p>{`${x.email}`}</p>
                </div>
                <div className="container d-flex">
                  <label>Mobile : </label>
                  <p>{x.mobile}</p>
                </div>
                <div className="d-flex justify-content-between  mt-3">
                  <button className="btn btn-warning mx-2" onClick={() => { handleClick(x._id) }}>Update</button>
                  <DeleteButton itemId={x._id} onDelete={handleRefresh} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
