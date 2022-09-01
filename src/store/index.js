
import { createStore } from 'vuex'
import auth from '../modules/auth/store'
import directorio from '../modules/contacts/store/directorio'

const store = createStore({    
    modules:{
        auth,
        directorio
        
    }

})
    //esto se deja asi porque el modulo se llama igual que la importacion
export default store