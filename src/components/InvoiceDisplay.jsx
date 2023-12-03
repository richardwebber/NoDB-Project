import axios from 'axios'

import AddButton from './AddButton.jsx'
import Name from './Name.jsx'
import Phone from './Phone.jsx'
import Email from './Email.jsx'
import Plan from './Plan.jsx'
import ModeButton from './ModeButton.jsx'
import DivHeader from './DivHeader.jsx'
import DivRow from './DivRow.jsx'
import './Component.css'

import { useState, useEffect } from 'react'

const InvoiceDisplay = () => {
    
    const [currentData, setCurrentData] = useState([])
    const [currentImage, setCurrentImage] =useState('')
    let pokeId = 5;

    useEffect(() => {
        axios.get('/clients')
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`)
        .then((res) => {
            console.log(res.data)
            setCurrentImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const addRow = () => {
        axios.post('/client')
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteRow = (id) => {
        axios.delete(`/client/${id}`)
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const rows = currentData.map((client) => <DivRow
    initialInvoiceData={client}
    initialEditMode={false}
    key={client.id}
    deleteRow={() => deleteRow(client.id)}
    currentData={currentData}
    currentImage={currentImage}
    setCurrentData={setCurrentData}
    />)

    return (
        <div>
            <table>
                <thead>
                    <DivHeader/>
                </thead>

                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <AddButton addRow={addRow}/>
                </tfoot>
            </table>
        </div>
    )
}

export default InvoiceDisplay