import React from 'react';

const DataSizeSelector = props => {

  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  
  return (
    <div>
      <button onClick={() => props.onSelect(smallUrl)}>32 пользователя</button>
      <button onClick={() => props.onSelect(bigUrl)}>1000 пользователей</button>
    </div>
  )
}

export default DataSizeSelector;