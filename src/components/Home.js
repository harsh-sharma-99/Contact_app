import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector(state => state);
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!")
  }

  const displayContacts = () => contacts.map((contact, id) => {
    return (
      <tr key={id}>
        <td>{contact.id + 1}</td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.number}</td>
        <td>
          <Link to={`/edit/${contact.id}`} className="btn btn-sm btn-primary ">Edit</Link>
          <button type="button" onClick={() => deleteContact(contact.id)} className="btn btn-sm btn-danger mx-3 ">Delete</button>
        </td>
      </tr>
    );
  })

  return (
    <div className="container">
      <div className="row">
        <div style={{ display: "flex", justifyContent: "flex-end" }} className="col-md-12 my-5 ">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-striped table-hover">
            <thead >
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts && displayContacts()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
