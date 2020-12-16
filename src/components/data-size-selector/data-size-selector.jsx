import React from "react";

const DataSizeSelector = (props) => {
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}
    >
      <button
        className="btn btn-outline-primary"
        onClick={() => props.onSelect(smallUrl)}
      >
        32 пользователя
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => props.onSelect(bigUrl)}
      >
        1000 пользователей
      </button>
    </div>
  );
};

export default DataSizeSelector;
