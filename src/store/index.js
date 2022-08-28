import { createStore } from 'vuex'
import directorio from "../modules/contacts/store/directorio"

const store = createStore({
    modules:{
        directorio
    }
    //esto se deja asi porque el modulo se llama igual que la importacion
})

export default store