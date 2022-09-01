import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyC0v7nkQHDfdjhTCcgJncZ3WkdHwHHdcDU'
    }
})

export default authApi