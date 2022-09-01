import axios from 'axios'

const directorioApi = axios.create({
    baseURL: 'https://directorio-contacts-default-rtdb.firebaseio.com'
})

directorioApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})


export default directorioApi