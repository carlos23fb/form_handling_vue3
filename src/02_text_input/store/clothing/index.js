const state = {
    clothin_list: []
}

const mutations = {
    ADD_CLOTHING_ITEM(state, payload) {
        state.clothin_list.push(payload)
    }
}

const actions = {
    addClothingItem({commit}, request_object) {
        commit('ADD_CLOTHING_ITEM', request_object)
    }
}

const getters = {
    clothin_list: state => state.clothin_list,
    clothin_total: state => state.clothin_list.length
}

const clothingModule = {
    state,
    mutations,
    actions,
    getters
}

export default clothingModule;