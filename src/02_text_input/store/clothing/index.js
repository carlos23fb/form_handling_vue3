const state = {
    clothin_list : ['Full Stack Benie']
}

const mutations = {
    ADD_CLOTHING_ITEM(state, payload){
        state.clothin_list.push(payload)
    }
}

const actions = {
    addClothingItem({commit}, item){
        commit('ADD_CLOTHING_ITEM', item)
    }
}

const getters = {
    clothin_list: state => state.clothin_list
}

const clothingModule = {
    state,
    mutations,
    actions,
    getters
}

export default clothingModule;