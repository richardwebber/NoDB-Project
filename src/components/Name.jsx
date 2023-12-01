import React from 'react'

const Name = (props) => {
    const {isEditing, value, onValueChange} = props;

  return isEditing ? (
    <div>
        <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        />
    </div>
  ) : (
    <div>
        {value}
    </div>
  )
}

export default Name