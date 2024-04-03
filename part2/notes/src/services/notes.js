import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
    const nonExisting = {
      id: 10000,
      content: 'This note is not saved to server',
      important: true,
    }
    return await axios.get(baseUrl).then(response => response.data.concat(nonExisting))
}

const create = async newObject => await axios.post(baseUrl, newObject).then(response => response.data)

const update = async (id, newObject) => await axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)

export default { getAll, create, update }