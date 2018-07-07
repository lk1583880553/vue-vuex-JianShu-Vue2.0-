import * as types from '../mutation-types'

const state = {
    show: 'home',
    loginSuccess: false
}

const mutations = {
	[types.CHANGELOGIN](state){
        state.loginSuccess = !state.loginSuccess
    }
}

export default{
	state,
	mutations
}