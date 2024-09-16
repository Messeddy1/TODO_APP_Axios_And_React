import axios from 'axios'

const CustomAxios = axios.create({
    baseURL:'http://localhost:3000/todos'
})
export default CustomAxios