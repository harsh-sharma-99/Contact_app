import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Addcontacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [email, setEmail] = useState('');
  const contacts = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailCheck = contacts.find(contact => contact.email === email);
    const numberCheck = contacts.find(contact => contact.number === Number(number));

    if (!email || !number || !name) {
      return toast.warning("Please fill in all the fields");
    }

    if (emailCheck && email) {
      return toast.error("This email already Exists!")
    }

    if (numberCheck && number) {
      return toast.error("This number already Exists!")
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      number,
      email
    }

    dispatch({ type: "ADD_CONTACT", payload: data })
    toast.success("Student Added Successfully");
    history.push("/");

  }

  return (
    <div className="container">
      <h1 className="Display-3 my-5 text-center">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
              <Link to="/" className="ml-3 btn btn-danger" style={{ float: "right" }}>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addcontacts;
