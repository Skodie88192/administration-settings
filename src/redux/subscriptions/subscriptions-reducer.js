import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { SubscriptionTypes } from './subscriptions-actions'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingSubscription:null,
    fetchingSubscriptions: null,
    fetchingDateSearch: null,
    searchingAll: null,
    fetchingSearchCount: null,
    fetchingSubscriptionsCount: null,
    subscription: null,
    subscriptions: null,
    dateSearchSubscriptions: null,
    searchSubscriptions: null,
    searchingCount: null,
    subscriptionsCount: null,
    errorSubscription: null,
    errorSearching: null,
    errorSubscriptions: null,
    errorDateSearch: null,
    errorSearchingCount: null,
    errorSubscriptionsCount: null
})

/* ------------- Reducers ------------- */

// request the range of tracks from an api
export const request = (state) => { return { ...state, fetchingSubscription: true, subscription: null } }
export const allRequest = (state) => { return { ...state, fetchingSubscriptions: true, subscriptions: null } }
export const searchRequest = (state) => { return { ...state, searchingAll: true, searchSubscriptions: null } }
export const datesearchRequest = (state) => { return { ...state, fetchingDateSearch: true, dateSearchSubscriptions: null } }
export const searchSubscriptionCountRequest = (state) => { return { ...state, fetchingSearchCount: true, searchingCount: null } }
export const subscriptionsCountRequest = (state) => { return { ...state, fetchingSubscriptionsCount: true, subscriptionsCount: null } }

// successful api lookup for range of schedules
export const success = (state, action) => {
    const { subscription } = action
    return {
        ...state,
        fetchingSubscription: false,
        errorSubscription: null,
        subscription
    }
}

export const allSuccess = (state, action) => {
    const { subscriptions } = action
    return {
        ...state,
        fetchingSubscriptions: false,
        errorSubscriptions: null,
        subscriptions
    }
}
export const searchSuccess = (state, action) => {
    const { searchSubscriptions } = action
    return {
        ...state,
        searchingAll: false,
        searchSubscriptions,
        errorSearching: null,
    }
}
export const subscriptionDateSearchSuccess = (state, action) => {
    const { dateSearchSubscriptions } = action
    return {
        ...state,
        fetchingDateSearch: false,
        dateSearchSubscriptions,
        errorDateSearch: null,
    }
}
export const searchSubscriptionCountSuccess = (state, action) => {
    const { searchingCount } = action
    return {
        ...state,
        fetchingSearchCount: false,
        searchingCount,
        errorSearchingCount: null,
    }
}
export const subcriptionCountSuccess = (state, action) => {
    const { count } = action
    return {
        ...state,
        fetchingSubscriptionsCount: false,
        subscriptionsCount: count,
        errorSubscriptionsCount: null,
    }
}

// Something went wrong fetching range of tracks
export const failure = (state, action) => {
    const { error } = action
    return {
        ...state,
        fetchingSubscription: false,
        errorSubscription: error,
        subscription: null
    }
}

export const allFailure = (state, action) => {
    const { error } = action
    return {
        ...state,
        fetchingSubscriptions: false,
        errorSubscriptions: error,
        subscriptions: null
    }
}
export const searchFailure = (state, action) => {
    const { error } = action
    return {
        ...state,
        searchingAll: false,
        searchSubscriptions: null,
        errorSearching: error,
    }
}
export const subscriptionDateSearchFailure = (state, action) => {
    const { error } = action
    return {
        ...state,
        fetchingDateSearch: false,
        dateSearchSubscriptions: null,
        errorDateSearch: error,
    }
}
export const searchSubscriptionCountFailure = (state, action) => {
    const { error } = action
    return {
        ...state,
        fetchingSearchCount: false,
        searchingCount: null,
        errorSearchingCount: error
    }
}
export const subscriptionsCountFailure = (state, action) => {
    const { error } = action
    return {
        ...state,
        fetchingSubscriptionsCount: false,
        subscriptionsCount: null,
        errorSubscriptionsCount: error
    }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [SubscriptionTypes.SUBSCRIPTION_REQUEST]: request,
    [SubscriptionTypes.SUBSCRIPTION_ALL_REQUEST]: allRequest,
    [SubscriptionTypes.SUBSCRIPTION_SEARCH_REQUEST]: searchRequest,
    [SubscriptionTypes.SUBSCRIPTION_DATE_SEARCH_REQUEST]: datesearchRequest,
    [SubscriptionTypes.SUBSCRIPTION_SEARCH_COUNT_REQUEST]: searchSubscriptionCountRequest,
    [SubscriptionTypes.SUBSCRIPTION_COUNT_REQUEST]: subscriptionsCountRequest,

    [SubscriptionTypes.SUBSCRIPTION_SUCCESS]: success,
    [SubscriptionTypes.SUBSCRIPTION_ALL_SUCCESS]: allSuccess,
    [SubscriptionTypes.SUBSCRIPTION_SEARCH_SUCCESS]: searchSuccess,
    [SubscriptionTypes.SUBSCRIPTION_DATE_SEARCH_SUCCESS]: subscriptionDateSearchSuccess,
    [SubscriptionTypes.SUBSCRIPTION_SEARCH_COUNT_SUCCESS]: searchSubscriptionCountSuccess,
    [SubscriptionTypes.SUBSCRIPTION_COUNT_SUCCESS]: subcriptionCountSuccess,

    [SubscriptionTypes.SUBSCRIPTION_FAILURE]: failure,
    [SubscriptionTypes.SUBSCRIPTION_ALL_FAILURE]: allFailure,
    [SubscriptionTypes.SUBSCRIPTION_SEARCH_FAILURE]: searchFailure,
    [SubscriptionTypes.SUBSCRIPTION_DATE_SEARCH_FAILURE]: subscriptionDateSearchFailure,
    [SubscriptionTypes.SUBSCRIPTION_SEARCH_COUNT_FAILURE]: searchSubscriptionCountFailure,
    [SubscriptionTypes.SUBSCRIPTION_COUNT_FAILURE]: subscriptionsCountFailure

})
