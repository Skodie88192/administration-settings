import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { SettlementTypes } from './settlement-actions'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingOneSettlement: null,
    fetchingBusiness: null,
    fetchingAll: null,
    fetchingCount: null,
    fetchingFiltered: null,
    updating: null,
    deleting: null,
    count: null,
    filtered: null,
    settlementRequest: null,
    settlement: null,
    settlements: null,
    errorOne: null,
    errorOneSettlement: null,
    errorAll: null,
    errorCount: null,
    errorFiltering: null,
    errorUpdating: null,
    errorDeleting: null,
})

/* ------------- Reducers ------------- */
// request the data from an api
export const oneRequest = (state) => { return { ...state, fetchingOneSettlement: true, settlementRequest: null } }

// request the data from an api
export const businessRequest = (state) => { return { ...state, fetchingBusiness: true, settlement: null } }

// request the data from an api
export const allRequest = (state) => { return { ...state, fetchingAll: true, settlements: null } }

// request the data from an api
export const countRequest = (state) => { return { ...state, fetchingCount: true, count: null } }

// request the data from an api
export const filterRequest = (state) => { return { ...state, fetchingFiltered: true, filtered: null } }
// request to update from an api
export const updateRequest = (state) => { return { ...state, updating: true } }

// request to delete from an api
export const deleteRequest = (state) => { return { ...state, deleting: true } }

// successful api lookup for one entity
export const oneSuccess = (state, action) => {
    const { settlement } = action
    return { ...state, fetchingOneSettlement: false, errorOneSettlement: null, settlementRequest: settlement }
}
// successful api lookup for one entity
export const success = (state, action) => {
    const { settlement } = action
    return { ...state, fetchingBusiness: false, errorOne: null, settlement }
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
    const { settlements } = action
    return { ...state, fetchingAll: false, errorAll: null, settlements }
}
// successful api lookup for all entities
export const countSuccess = (state, action) => {
    const { count } = action
    return { ...state, fetchingCount: false, errorCount: null, count }
}
// successful api lookup for all entities
export const filterSuccess = (state, action) => {
    const { filtered } = action
    return { ...state, fetchingFiltered: false, errorFiltering: null, filtered }
}
// successful api update
export const updateSuccess = (state, action) => {
    const { settlement } = action
    return { ...state, updating: false, errorUpdating: null, settlement }
}
// successful api delete
export const deleteSuccess = (state) => {
    return { ...state, deleting: false, errorDeleting: null, settlement: null }
}

// Something went wrong fetching one entity.
export const oneFailure = (state, action) => {
    const { error } = action
    return { ...state, fetchingOneSettlement: false, settlementRequest: null, errorOneSettlement: error }
}
// Something went wrong fetching one entity.
export const failure = (state, action) => {
    const { error } = action
    return { ...state, fetchingBusiness: false, settlement: null, errorOne: error }
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
    const { error } = action
    return { ...state, fetchingAll: false, settlements: null, errorAll: error }
}
// Something went wrong fetching all entities.
export const countFailure = (state, action) => {
    const { error } = action
    return { ...state, fetchingCount: false, count: null, errorCount: error }
}
// Something went wrong fetching all entities.
export const filterFailure = (state, action) => {
    const { error } = action
    return { ...state, fetchingFiltered: false, filtered: null, errorFiltering: error }
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
    const { error } = action
    return { ...state, updating: false, settlement: state.settlement, errorUpdating: error }
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
    const { error } = action
    return { ...state, deleting: false, settlement: state.settlement, errorDeleting: error }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [SettlementTypes.SETTLEMENT_REQUEST]: oneRequest,
    [SettlementTypes.SETTLEMENT_BUSINESS_REQUEST]: businessRequest,
    [SettlementTypes.SETTLEMENT_ALL_REQUEST]: allRequest,
    [SettlementTypes.SETTLEMENT_COUNT_REQUEST]: countRequest,
    [SettlementTypes.SETTLEMENT_FILTER_REQUEST]: filterRequest,
    [SettlementTypes.SETTLEMENT_UPDATE_REQUEST]: updateRequest,
    [SettlementTypes.SETTLEMENT_DELETE_REQUEST]: deleteRequest,

    [SettlementTypes.SETTLEMENT_SUCCESS]: oneSuccess,
    [SettlementTypes.SETTLEMENT_BUSINESS_SUCCESS]: success,
    [SettlementTypes.SETTLEMENT_ALL_SUCCESS]: allSuccess,
    [SettlementTypes.SETTLEMENT_COUNT_SUCCESS]: countSuccess,
    [SettlementTypes.SETTLEMENT_FILTER_SUCCESS]: filterSuccess,
    [SettlementTypes.SETTLEMENT_UPDATE_SUCCESS]: updateSuccess,
    [SettlementTypes.SETTLEMENT_DELETE_SUCCESS]: deleteSuccess,

    [SettlementTypes.SETTLEMENT_FAILURE]: oneFailure,
    [SettlementTypes.SETTLEMENT_BUSINESS_FAILURE]: failure,
    [SettlementTypes.SETTLEMENT_ALL_FAILURE]: allFailure,
    [SettlementTypes.SETTLEMENT_COUNT_FAILURE]: countFailure,
    [SettlementTypes.SETTLEMENT_FILTER_FAILURE]: filterFailure,
    [SettlementTypes.SETTLEMENT_UPDATE_FAILURE]: updateFailure,
    [SettlementTypes.SETTLEMENT_DELETE_FAILURE]: deleteFailure
})
