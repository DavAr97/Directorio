import axios from 'axios'

const directorioApi = axios.create({
    baseURL: 'https://directorio-contacts-default-rtdb.firebaseio.com'
})

export default directorioApi