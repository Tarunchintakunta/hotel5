import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-app-clone-mern.herokuapp.com'
})
export default instance;