//Son sincronas y hacen la modificacion del state



// export const myMutation = (state) => {

// }

export const setContact = (state,entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}


export const updateContact = (state,entry) => {
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
}


export const addContact = (/* state */) => {

}