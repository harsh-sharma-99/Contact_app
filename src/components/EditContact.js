import React from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="Display-3 my-5 text-center">
          <h1>Edit Contact {id}</h1>
        </div>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control" />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Update Student"
                className="btn  btn-dark "
              />
              <Link to="/" className="ml-3 btn btn-danger ">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
