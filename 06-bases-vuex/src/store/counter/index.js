import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,
    
    // Se puede abreviar dejando solo como state ya que como son la misma palabra se torna redundante
    state: state,

    // Se puede abreviar dejando solo como mutations ya que como son la misma palabra se torna redundante
    mutations: mutations,

    // Se puede abreviar dejando solo como actions ya que como son la misma palabra se torna redundante
    actions: actions,

    // Se puede abreviar dejando solo como getters ya que como son la misma palabra se torna redundante
    getters: getters,

}

export default counterStore