import React from 'react'

const ModeButton = (props) => {
    const {isEditing, changeEditMode, changeNormalMode, deleteRow} = props
  return isEditing ? (
    <td>
        <button onClick={changeNormalMode}> Save </button>
    </td>
  ) : (
    <td>
        <button onClick={deleteRow}>Delete</button>
        <button onClick={changeEditMode}>Edit</button>
    </td>
  )
}

export default ModeButton