//Acciones o tareas asincronas que pueden llamar mutaciones y pueden ser sincronas
//con las acciones llegamos al backend
//la accion hace el commit de la mutacion

import directorioApi from "@/api/directorioApi"



// export const myAction = async (comit) => {

// }


export const loadContact = async ({commit}) => {

   const { data } = await directorioApi.get('/contacto.json')
    const entries = []
    for (let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setContact',entries)
}

export const updateContact = async ( { commit },entry) => {
    
    const {nombre, correo, telefono} = entry
    const dataToSave = {nombre, correo, telefono}

    await directorioApi.put(`/contacto/${entry.id}.json`, dataToSave)

    commit('updateContact',{...entry})
}

export const createContact = async ({ commit },entry) => {

    const {nombre, correo, telefono} = entry
    console.log()
    const dataToSave = {nombre, correo, telefono}
    const {data} = await directorioApi.post(`contacto.json`, dataToSave)

    dataToSave.id = data.name

    commit('createContact',dataToSave)
    return data.name 
}

export const deleteContact = async ( { commit },id ) => {

    await directorioApi.delete(`/contacto/${id}.json`)
    commit('deleteContact',id)
    return id

}
