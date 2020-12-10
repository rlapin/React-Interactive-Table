import React from "react";
import "./main-table.scss";

const useSortableData = (users, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  
  const sortedUsers = React.useMemo(() => {
    let sortableUsers = [...users];
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [ users, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key && 
      sortConfig.direction === 'ascending'
      ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction});
  };

  return {users: sortedUsers, requestSort, sortConfig};
};

const MainTable = (props) => {
  const { users, requestSort, sortConfig } = useSortableData(props.users);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th 
              onClick={() => requestSort('id')}
              className={getClassNamesFor('id')}
              >Id</th>
            <th 
              onClick={() => requestSort('firstName')}
              className={getClassNamesFor('firstName')}
              >FirstName</th>
            <th 
              onClick={() => requestSort('lastName')}
              className={getClassNamesFor('lastName')}
            >LastName</th>
            <th 
              onClick={() => requestSort('email')}
              className={getClassNamesFor('email')}
            >email</th>
            <th 
              onClick={() => requestSort('phone')}
              className={getClassNamesFor('phone')}
            >Phone number</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr key={user.id+user.email}>
              <td >{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MainTable;
