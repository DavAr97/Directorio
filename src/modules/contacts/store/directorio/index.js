//El index se importa en los demas store

import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const directorioModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default directorioModule