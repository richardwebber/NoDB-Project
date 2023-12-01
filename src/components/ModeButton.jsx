import React from 'react'

const ModeButton = (props) => {
    const {isEditing, changeEditMode, changeNormalMode, deleteRow} = props
  return isEditing ? (
    <div>
        <button onClick={changeNormalMode}> Save </button>
    </div>
  ) : (
    <div>
        <button onClick={deleteRow}>Delete</button>
        <button onClick={changeEditMode}>Edit</button>
    </div>
  )
}

export default ModeButton