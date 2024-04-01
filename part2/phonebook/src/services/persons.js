import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => await axios.get(baseUrl).then(response => response.data)

const create = async newObject => await axios.post(baseUrl, newObject).then(response => response.data)

const update = async (id, newObject) => await axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)

const eliminate = async (id) => await axios.delete(`${baseUrl}/${id}`).then(response => response.data)

export default { getAll, create, update, eliminate }