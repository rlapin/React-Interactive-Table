import React from 'react';


const MainTable = props => (
  <table className='table'>
    <thead>
      <tr>
        <th 
          onClick={props.onSort.bind(null, 'id')}>
          Id {props.sortField === 'id' ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'firstName')}>
          First Name {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'lastName')}>
          Last Name {props.sortField === 'lastName' ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'email')}>
          Email {props.sortField === 'email' ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'phone')}>
          Phone {props.sortField === 'phone' ? <small>{props.sort}</small> : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.users.map(user => (
        <tr 
          key={user.id + user.phone} 
          onClick={props.onRowSelect.bind(null, user)}
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
)

export default MainTable;