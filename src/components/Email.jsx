import React from 'react'

const Email = (props) => {
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

export default Email