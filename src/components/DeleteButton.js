import axios from "axios";
import '../app.css'

export default function DeleteButton(props) {
  function handleClick() {
    const confirmed = window.confirm("Are you sure you want to delete?");//confirm
    if (confirmed) {
      axios.delete(`http://localhost:4000/deleteUser/${props.itemId}`)
        .then((res) => {
          props.onDelete();
        })
        .catch((err) => {
          alert(err.response.data.message + err.response.status + " Error");
        });
    }
  }

  return (
      <button className="btn btn-danger" onClick={handleClick}>Delete</button>
  );
}
