import React from 'react'

const AddButton = (props) => {
    const {addRow} = props

  return (
    <tr>
        <td colspan='4'>
            <button onClick={addRow}>Add</button>
        </td>
    </tr>
  )
}

export default AddButton