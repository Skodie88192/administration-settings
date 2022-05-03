import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { PaymentTrackTypes } from './payment-track.actions'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingRange: null,
    paymentTrackRange: null,
    errorRange: null,
})

/* ------------- Reducers ------------- */

// request the range of tracks from an api
export const rangeRequest = (state) => { return { ...state, fetchingRange: true, paymentTrackRange: null } }

// successful api lookup for range of schedules
export const rangeSuccess = (state, action) => {
    const { paymentTrackRange } = action
    return {
        ...state,
        fetchingRange: false,
        errorRange: null,
        paymentTrackRange
    }
}

// Something went wrong fetching range of tracks
export const rangeFailure = (state, action) => {
    const { error } = action
    return {
        ...state,
        fetchingRange: false,
        errorRange: error,
        paymentTrackRange: null
    }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [PaymentTrackTypes.PAYMENT_TRACK_RANGE_REQUEST]: rangeRequest,

    [PaymentTrackTypes.PAYMENT_TRACK_RANGE_SUCCESS]: rangeSuccess,

    [PaymentTrackTypes.PAYMENT_TRACK_RANGE_FAILURE]: rangeFailure,
})
