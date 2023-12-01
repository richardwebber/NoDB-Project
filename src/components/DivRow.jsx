import Name from './Name.jsx';
import Email from './Email.jsx';
import Phone from './Phone.jsx';
import Plan from './Plan';
import ModeButton from './ModeButton.jsx';
import { useState } from 'react';
import axios from 'axios';

const DivRow = (props) => {
    
    const {initialInvoiceData, initialEditMode, deleteRow, currentData, setCurrentData} = props

    const [editMode, setIsEditing] = useState(initialEditMode)
    const [name, setName] = useState(initialInvoiceData.name)
    const [email, setEmail] = useState(initialInvoiceData.email)
    const [phone, setPhone] = useState(initialInvoiceData.phone)
}