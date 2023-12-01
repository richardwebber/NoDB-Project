import React from 'react'

const Phone = (props) => {
    const {isEditing, value, onValueChange} = props;

  return isEditing ? (
    <td>
        <input
        type = "text"
        value = {value}
        onChange = {(e) => onValueChange(e.target.value)}
        />
    </td>
  ) : (
    <td>
        {value}
    </td>
  )
}

export default Phone