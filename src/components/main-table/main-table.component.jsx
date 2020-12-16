import React from "react";

const MainTable = (props) => (
  <table className="table">
    <thead>
      <tr>
        <th onClick={() => props.onSort("id")}>
          Id {props.sortField === "id" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={() => props.onSort("firstName")}>
          First Name{" "}
          {props.sortField === "firstName" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={() => props.onSort("lastName")}>
          Last Name{" "}
          {props.sortField === "lastName" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={() => props.onSort("email")}>
          Email{" "}
          {props.sortField === "email" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={() => props.onSort("phone")}>
          Phone{" "}
          {props.sortField === "phone" ? <small>{props.sort}</small> : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.users.map((user) => (
        <tr
          key={user.id + user.phone}
          onClick={() => props.onRowSelect(user)}
        >
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MainTable;
