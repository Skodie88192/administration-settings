import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { PayoutChannelTypes } from './payoutchannel-actions'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingOne: null,
    fetchingAll: null,
    updating: null,
    archiving: null,
    payoutChannel: null,
    payoutChannels: null,
    errorOne: null,
    errorAll: null,
    errorUpdating: null,
    errorDeleting: null,
    errorArchiving: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => { return { ...state, fetchingOne: true, payoutChannel: null } }

// request the data from an api
export const businessRequest = (state) => { return { ...state, fetchingAll: true, payoutChannels: null } }

// request to update from an api
export const updateRequest = (state) => { return { ...state, updating: true } }
// request to delete from an api
export const deleteRequest = (state) => { return { ...state, deleting: true } }
// request to archive from an api
export const archiveRequest = (state) => { return { ...state, archiving: true } }

// successful api lookup for single entity
export const success = (state, action) => {
    const { payoutChannel } = action
    return { ...state, fetchingOne: false, errorOne: null, payoutChannel }
}
// successful api lookup for all entities
export const businessSuccess = (state, action) => {
    const { payoutChannels } = action
    return { ...state, fetchingAll: false, errorAll: null, payoutChannels }
}
// successful api update
export const updateSuccess = (state, action) => {
    const { payoutChannel } = action
    return { ...state, updating: false, errorUpdating: null, payoutChannel }
}
// successful api delete
export const deleteSuccess = (state) => {
    return { ...state, deleting: false, errorDeleting: null, payoutChannel: null }
}
// successful api archive
export const archiveSuccess = (state) => {
    return { ...state, archiving: false, errorArchiving: null, payoutChannel: null }
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
    const { error } = action
    return { ...state, fetchingOne: false, errorOne: error, payoutChannel: null }
}
// Something went wrong fetching all entities.
export const businessFailure = (state, action) => {
    const { error } = action
    return { ...state, fetchingAll: false, errorAll: error, payoutChannels: null }
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
    const { error } = action
    return { ...state, updating: false, errorUpdating: error }
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
    const { error } = action
    return { ...state, deleting: false, errorDeleting: error }
}

// Something went wrong deleting.
export const archiveFailure = (state, action) => {
    const { error } = action
    return { ...state, archiving: false, errorArchiving: error }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [PayoutChannelTypes.PAYOUT_CHANNEL_REQUEST]: request,
    [PayoutChannelTypes.PAYOUT_CHANNEL_BUSINESS_REQUEST]: businessRequest,
    [PayoutChannelTypes.PAYOUT_CHANNEL_UPDATE_REQUEST]: updateRequest,
    [PayoutChannelTypes.PAYOUT_CHANNEL_DELETE_REQUEST]: deleteRequest,
    [PayoutChannelTypes.PAYOUT_CHANNEL_ARCHIVE_REQUEST]: archiveRequest,

    [PayoutChannelTypes.PAYOUT_CHANNEL_SUCCESS]: success,
    [PayoutChannelTypes.PAYOUT_CHANNEL_BUSINESS_SUCCESS]: businessSuccess,
    [PayoutChannelTypes.PAYOUT_CHANNEL_UPDATE_SUCCESS]: updateSuccess,
    [PayoutChannelTypes.PAYOUT_CHANNEL_DELETE_SUCCESS]: deleteSuccess,
    [PayoutChannelTypes.PAYOUT_CHANNEL_ARCHIVE_SUCCESS]: archiveSuccess,

    [PayoutChannelTypes.PAYOUT_CHANNEL_FAILURE]: failure,
    [PayoutChannelTypes.PAYOUT_CHANNEL_BUSINESS_FAILURE]: businessFailure,
    [PayoutChannelTypes.PAYOUT_CHANNEL_UPDATE_FAILURE]: updateFailure,
    [PayoutChannelTypes.PAYOUT_CHANNEL_DELETE_FAILURE]: deleteFailure,
    [PayoutChannelTypes.PAYOUT_CHANNEL_ARCHIVE_FAILURE]: archiveFailure
})
