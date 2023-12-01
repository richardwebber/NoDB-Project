import React from 'react'

const Phone = (props) => {
    const {isEditing, value, onRateChange} = props;

  return isEditing ? (
    <div>
        <input
        type="text"
        value={value}
        onChange = {(e) => onRateChange(e.target.value)}
        />
    </div>
  ) : (
    <div>
        {value}
    </div>
  )
}

export default Phone