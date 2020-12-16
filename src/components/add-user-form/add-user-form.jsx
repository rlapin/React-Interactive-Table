import React, { useState } from "react";

const AddUserForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    id: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>First Name</label>
          <input
            className="form-control"
            value={state.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name</label>
          <input
            className="form-control"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>ID</label>
        <input
          type="number"
          name="id"
          value={state.id}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={state.email}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={state.phone}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Добавить пользователя
      </button>
    </form>
  );
};

export default AddUserForm;
