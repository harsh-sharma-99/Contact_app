import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const contacts = useSelector(state => state);
  const currentContact = contacts.find(contact => contact.id === Number(id));
  console.log(currentContact);
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setNumber(currentContact.number);
      setEmail(currentContact.email);
    }
  }, [currentContact]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const emailCheck = contacts.find(contact => contact.id !== Number(id) && contact.email === email);
    const numberCheck = contacts.find(contact => contact.id !== Number(id) && contact.number === Number(number));

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
      id: parseInt(id),
      name,
      number,
      email
    }

    dispatch({ type: "UPDATE_CONTACT", payload: data })
    toast.success("Student Upadted Successfully");
    history.push("/");

  }

  return (
    <div className="container">
      {currentContact ? <>
        <div className="row">
          <div className="Display-3 my-5 text-center">
            <h1>Edit Contact {Number(id) + 1}</h1>
          </div>
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input type="text" placeholder="Name" className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
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

              <div className="form-group mb-3 ">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }} className="form-group mb-3">
                <input
                  type="submit"
                  value="Update Student"
                  className="btn  btn-dark  mr-5"
                />
                <Link to="/" className="ml-3 btn btn-danger">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </> : <div className="Display-3 my-5 text-center">
        <h1>Student Contact with id {Number(id) + 1} does not exists</h1>
      </div>}
    </div>
  );
};

export default EditContact;
