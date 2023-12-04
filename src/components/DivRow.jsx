import Name from './Name.jsx';
import Email from './Email.jsx';
import Phone from './Phone.jsx';
import Plan from './Plan';
import ModeButton from './ModeButton.jsx';
import { useState } from 'react';
import axios from 'axios';
import './Component.css'

const DivRow = (props) => {
    
    const {initialInvoiceData, initialEditMode, deleteRow, currentData, setCurrentData, currentImage} = props
    let testImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'

    const [editMode, setIsEditing] = useState(initialEditMode)
    const [name, setName] = useState(initialInvoiceData.name)
    const [email, setEmail] = useState(initialInvoiceData.email)
    const [phone, setPhone] = useState(initialInvoiceData.phone)
    const [plan, setPlan] = useState(initialInvoiceData.plan)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {

        const bodyObj = {
            name,
            phone,
            email, 
            plan
        }
        
        axios.put(`./client/${initialInvoiceData.id}`, bodyObj)
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
            setIsEditing(false)
        })
        .catch((thesehands) => {
            console.log(thesehands)
        })
    }

    return (
        <tr className="row">
            <td>
            <img className="userImg" src={currentImage} alt={testImg} />  
            {/* <div dangerouslySetInnerHTML={{ __html: currentImage }} /> */}
            </td>

            <ModeButton
            isEditing={editMode}
            changeEditMode={changeEditMode}
            changeNormalMode={changeNormalMode}
            deleteRow={deleteRow}
            />
            
            <Name
            isEditing={editMode}
            value={name}
            onValueChange={setName}
            />

            <Phone
            isEditing={editMode}
            value={phone}
            onValueChange={setPhone}
            />

            <Email
            isEditing={editMode}
            value={email}
            onValueChange={setEmail}
            />

            <Plan 
            isEditing={editMode}
            value={plan}
            onValueChange={setPlan}
            />

        </tr>
    )
}

export default DivRow;