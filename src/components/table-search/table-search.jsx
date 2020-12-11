import React, {useState} from 'react';

const TableSearch = props => {

  const [value, setValue] = useState('')

  const valueChangeHandler = event => {
    setValue(event.target.value)
  }

  return (
      <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
          <button 
            className="btn btn-outline-secondary"
            onClick={() => props.onSearch(value)}
            >Поиск</button>
        </div>
        <input 
          className="form-control"  
          type='text'
          value={value}
          onChange={valueChangeHandler}
        />
      </div>
  )
}

export default TableSearch;