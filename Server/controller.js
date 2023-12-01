let CLIENT_DATA = [
    {id: 0, name: 'Rikki', phone: '8013333333', email: 'username@gmail.com', plan: 'platinum', active: true},
    {id: 1, name: 'Doug', phone: '8012222222', email: 'username1@gmail.com', plan: 'gold', active: true},
    {id: 2, name: 'Mike', phone: '8014444444', email: 'username2@gmail.com', plan: 'silver', active: true},
    {id: 3, name: 'John', phone: '8015555555', email: 'username3@gmail.com', plan: 'gold', active: true}
]

let globalId = 4;

const handlerFunctions = {
    getClients: (req, res) => {
        res.send(CLIENT_DATA)
    },

    addClient: (req, res) => {
        const {description} = req.body
        const newRow = {
            id: globalId,
            name: description,
            phone: '',
            email: '',
            plan: ''
        }
        CLIENT_DATA.push(newRow)
        globalId++
        res.send(CLIENT_DATA)
    },

    deleteClient: (req, res) => {
        const {id} =req.params

        const filteredClient = CLIENT_DATA.filter((customer) => customer.id !== +id)
        CLIENT_DATA = filteredClient;
        console.log(CLIENT_DATA)

        res.send(CLIENT_DATA)
    },

    editClient: (req, res) => {
        const {id} = req.params
        const {name, phone, email, plan} = req.body

        const editCustomer = CLIENT_DATA.find((customer) => customer.id === +id)

        editCustomer.name = name
        editCustomer.phone = phone
        editCustomer.email = email
        editCustomer.plan = plan

        res.send(CLIENT_DATA)
    }

}

export default handlerFunctions;