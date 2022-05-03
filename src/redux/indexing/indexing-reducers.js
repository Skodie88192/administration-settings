import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { IndexingTypes } from "./indexing-actions";

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingIndexSubscribers: null,
    fetchingIndexPayments: null,
    fetchingIndexSignupRequests: null,
    fetchingIndexCustomers: null,
    fetchingIndexPaymentSchedules: null,
    fetchingIndexPlans: null,
    errorIndexSubscribers: null,
    errorIndexPayments: null,
    errorIndexSignupRequests: null,
    errorIndexCustomers: null,
    errorIndexPaymentSchedules: null,
    errorIndexPlans: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const indexSubscribersRequest = (state) => {
    return { ...state, fetchingIndexSubscribers: true };
};

// request the data from an api
export const indexPaymentsRequest = (state) => {
    return { ...state, fetchingIndexPayments: true };
};

// request the data from an api
export const indexSignupRequest = (state) => {
    return { ...state, fetchingIndexSignupRequests: true };
};

// request the data from an api
export const indexCustomersRequest = (state) => {
    return { ...state, fetchingIndexCustomers: true };
};

// request the data from an api
export const indexPaymentSchedulesRequest = (state) => {
    return { ...state, fetchingIndexPaymentSchedules: true };
};

// request the data from an api
export const indexPlansRequest = (state) => {
    return { ...state, fetchingIndexPlans: true };
};


// successful api lookup for indexSubscribers
export const indexSubscribersSuccess = (state) => {
    return { ...state, fetchingIndexSubscribers: false, errorIndexSubscribers: null };
};

// successful api lookup for indexPayments
export const indexPaymentsSuccess = (state) => {
    return { ...state, fetchingIndexPayments: false, errorIndexPayments: null };
};

// successful api lookup for indexSignRequests
export const indexSignupSuccess = (state) => {
    return { ...state, fetchingIndexSignupRequests: false, errorIndexSignupRequests: null };
};

// successful api lookup for indexCustomers
export const indexCustomersSuccess = (state) => {
    return { ...state, fetchingIndexCustomers: false, errorIndexCustomers: null };
};

// successful api lookup for indexPaymentsSchedules
export const indexPaymentSchedulesSuccess = (state) => {
    return { ...state, fetchingIndexPaymentSchedules: false, errorIndexPaymentSchedules: null };
};

// successful api lookup for indexPlans
export const indexPlansSuccess = (state) => {
    return { ...state, fetchingIndexPlans: false, errorIndexPlans: null };
};


// Something went wrong fetching indexSubscribers
export const indexSubscribersFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIndexSubscribers: false, errorIndexSubscriber: error };
};

// Something went wrong fetching indexPayments
export const indexPaymentsFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIndexPayments: false, errorIndexPayments: error };
};

// Something went wrong fetching indexSignRequests
export const indexSignupFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIndexSignupRequests: false, errorIndexSignupRequests: error };
};

// Something went wrong fetching indexCustomers
export const indexCustomersFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIndexCustomers: false, errorIndexCustomers: error };
};

// Something went wrong fetching indexPaymentsSchedules
export const indexPaymentSchedulesFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIndexPaymentSchedules: false, errorIndexPaymentSchedules: error };
};

// Something went wrong fetching  indexPlans
export const indexPlansFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIndexPlans: false, errorIndexPlans: error };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [IndexingTypes.INDEX_SUBSCRIBERS_REQUEST]: indexSubscribersRequest,
    [IndexingTypes.INDEX_PAYMENTS_REQUEST]: indexPaymentsRequest,
    [IndexingTypes.INDEX_SIGNUP_REQUEST]: indexSignupRequest,
    [IndexingTypes.INDEX_CUSTOMERS_REQUEST]: indexCustomersRequest,
    [IndexingTypes.INDEX_PAYMENT_SCHEDULES_REQUEST]: indexPaymentSchedulesRequest,
    [IndexingTypes.INDEX_PLANS_REQUEST]: indexPlansRequest,

    [IndexingTypes.INDEX_SUBSCRIBERS_SUCCESS]: indexSubscribersSuccess,
    [IndexingTypes.INDEX_PAYMENTS_SUCCESS]: indexPaymentsSuccess,
    [IndexingTypes.INDEX_SIGNUP_SUCCESS]: indexSignupSuccess,
    [IndexingTypes.INDEX_CUSTOMERS_SUCCESS]: indexCustomersSuccess,
    [IndexingTypes.INDEX_PAYMENT_SCHEDULES_SUCCESS]: indexPaymentSchedulesSuccess,
    [IndexingTypes.INDEX_PLANS_SUCCESS]: indexPlansSuccess,

    [IndexingTypes.INDEX_SUBSCRIBERS_FAILURE]: indexSubscribersFailure,
    [IndexingTypes.INDEX_PAYMENTS_FAILURE]: indexPaymentsFailure,
    [IndexingTypes.INDEX_SIGNUP_FAILURE]: indexSignupFailure,
    [IndexingTypes.INDEX_CUSTOMERS_FAILURE]: indexCustomersFailure,
    [IndexingTypes.INDEX_PAYMENT_SCHEDULES_FAILURE]: indexPaymentSchedulesFailure,
    [IndexingTypes.INDEX_PLANS_FAILURE]: indexPlansFailure,
})