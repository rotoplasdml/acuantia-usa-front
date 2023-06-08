export const state = () => ({
    userPos: null,
    userLat: null,
    userLong: null,
    userCity: 'Hopkins',
    userState: 'TX',
})

export const mutations = {
    SET_USER_LAT(state, userLat) {
        state.userLat = userLat
    },
    SET_USER_LONG(state, userLong) {
        state.userLong = userLong
    },
    SET_USER_REVERSE_LOCATION(state, userPos) {
        state.userPos = userPos
    }
}

export const actions = {
    async getUserReverseLocation ({ commit }) {
        const pos = await this.$axios.$get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+ this.state.userLat + '&longitude=' + this.state.userLong)
        commit('SET_USER_REVERSE_LOCATION', pos)
    }
}