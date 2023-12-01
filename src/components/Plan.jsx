import React from 'react'

const Plan = (props) => {
    const {isEditing, value, onPlanChange} = props;
  return isEditing ? (  
    <div>
        <input
            type="text"
            value={value}
            onChange={(e) => onPlanChange(e.target.value)}
        />
    </div>
  ) : (
    <div>
        {value}
    </div>
  )
}

export default Plan