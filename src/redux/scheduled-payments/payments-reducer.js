import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { PaymentScheduleTypes } from './payments-actions'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingOne: null,
    fetchingAll: null,
    fetchingRange: null,
    fetchingProjection: null,
    fetchingSummary: null,
    fetchingFiltered: null,
    fetchingFilteredCount: null,
    fetchingCount: null,
    updating: null,
    notifying: null,
    deleting: null,
    count: null,
    paymentSchedule: null,
    paymentSchedules: null,
    paymentScheduleRange: null,
    paymentScheduleSummary: null,
    filtered: null,
    filteredCount: null,
    projection: null,
    errorOne: null,
    errorAll: null,
    errorRange: null,
    errorProjection: null,
    errorSummary: null,
    errorCount: null,
    errorUpdating: null,
    errorDeleting: null,
    errorNotifying: null,
    errorFiltered: null,
    errorFilteredCount: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
    return { ...state, fetchingOne: true, paymentSchedule: null };
};
// request the data from an api
export const allRequest = (state) => {
    return { ...state, fetchingAll: true, paymentSchedules: null };
};
// request the count of schedules from an api
export const countRequest = (state) => { return { ...state, fetchingCount: true, count: null } }
// request the range of schedules from an api
export const rangeRequest = (state) => {
    return { ...state, fetchingRange: true, paymentScheduleRange: null };
};
// request the projection from an api
export const projectionRequest = (state) => {
    return { ...state, fetchingProjection: true, projection: null };
};
// request the filtered schedules from an api
export const filteredRequest = (state) => {
    return { ...state, fetchingFiltered: true, filtered: null };
};
// request the count of filtered schedules from an api
export const filteredCountRequest = (state) => {
    return { ...state, fetchingFilteredCount: true, filteredCount: null };
};
// request the summary from an api
export const summaryRequest = (state) => {
    return { ...state, fetchingSummary: true, paymentScheduleSummary: null };
};
// request to update from an api
export const notifyRequest = (state) => {
    return { ...state, notifying: true };
};
// request to update from an api
export const updateRequest = (state) => {
    return { ...state, updating: true };
};
// request to de    }ete from an api
export const deleteRequest = (state) => {
    return { ...state, deleting: true };
};

// successful api lookup for single entity
export const success = (state, action) => {
    const { paymentSchedule } = action;
    return { ...state, fetchingOne: false, errorOne: null, paymentSchedule };
};
// successful api lookup for all entities
export const allSuccess = (state, action) => {
    const { paymentSchedules } = action;
    return { ...state, fetchingAll: false, errorAll: null, paymentSchedules };
};
// successful api lookup for count of all entities
export const countSuccess = (state, action) => {
    const { count } = action
    return { ...state, fetchingCount: false, errorCount: null, count }
}
// successful api lookup for range of schedules
export const rangeSuccess = (state, action) => {
    const { paymentScheduleRange } = action;
    return { ...state, fetchingRange: false, errorRange: null, paymentScheduleRange, };
};
// successful api lookup the projections for a schedule range
export const projectionSuccess = (state, action) => {
    const { projection } = action;
    return { ...state, fetchingProjection: false, errorProjection: null, projection, };
};
// successful api lookup for the filtered range of schedules 
export const filteredSuccess = (state, action) => {
    const { filtered } = action;
    return { ...state, fetchingFiltered: false, errorFiltered: null, filtered };
};
// successful api lookup for the count of filtered range of schedules 
export const filteredCountSuccess = (state, action) => {
    const { filteredCount } = action;
    return { ...state, fetchingFilteredCount: false, errorFilteredCount: null, filteredCount };
};
// successful api lookup for summary of schedules
export const summarySuccess = (state, action) => {
    const { paymentScheduleSummary } = action;
    return { ...state, fetchingSummary: false, errorSummary: null, paymentScheduleSummary, };
};
// successful api update
export const updateSuccess = (state, action) => {
    const { paymentSchedule } = action;
    return { ...state, updating: false, errorUpdating: null, paymentSchedule };
};
// successful api update
export const notifySuccess = (state, action) => {
    const { paymentSchedule } = action;
    return { ...state, notifying: false, errorUpdating: null, paymentSchedule };
};
// successful api delete
export const deleteSuccess = (state) => {
    return { ...state, deleting: false, errorDeleting: null, paymentSchedule: null, };
};

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingOne: false, errorOne: error, paymentSchedule: null, };
};
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingAll: false, errorAll: error, paymentSchedules: null, };
};
// Something went wrong fetching couont of all entities.
export const countFailure = (state, action) => {
    const { error } = action
    return { ...state, fetchingCount: false, count: null, errorCount: error }
}
// Something went wrong fetching range of schedules
export const rangeFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingRange: false, errorRange: error, paymentScheduleRange: null, };
};
// Something went wrong fetching a filtered range of schedules
export const filteredFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingFiltered: false, errorFiltered: error, filtered: null, };
};
// Something went wrong fetching count of filtered range of schedules
export const filteredCountFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingFilteredCount: false, errorFilteredCount: error, filteredCount: null, };
};
// Something went wrong fetching range of schedules
export const projectionFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingProjection: false, errorProjection: error, projection: null, };
};

// Something went wrong fetching summary of schedules
export const summaryFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingSummary: false, errorSummary: error, paymentScheduleSummary: null, };
};

// Something went wrong updating.
export const updateFailure = (state, action) => {
    const { error } = action;
    return { ...state, updating: false, errorUpdating: error, paymentSchedule: state.paymentSchedule, };
};
export const notifyFailure = (state, action) => {
    const { error } = action;
    return { ...state, notifying: false, errorNotifying: error, paymentSchedule: state.paymentSchedule, };
};
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
    const { error } = action;
    return { ...state, deleting: false, errorDeleting: error, paymentSchedule: state.paymentSchedule, };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_REQUEST]: request,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_RANGE_REQUEST]: rangeRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_PROJECTION_REQUEST]: projectionRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_SUMMARY_REQUEST]: summaryRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_ALL_REQUEST]: allRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_UPDATE_REQUEST]: updateRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_DELETE_REQUEST]: deleteRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_NOTIFY_REQUEST]: notifyRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_COUNT_REQUEST]: countRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_REQUEST]: filteredRequest,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_COUNT_REQUEST]: filteredCountRequest,


    [PaymentScheduleTypes.PAYMENT_SCHEDULE_SUCCESS]: success,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_ALL_SUCCESS]: allSuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_RANGE_SUCCESS]: rangeSuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_PROJECTION_SUCCESS]: projectionSuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_SUMMARY_SUCCESS]: summarySuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_UPDATE_SUCCESS]: updateSuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_DELETE_SUCCESS]: deleteSuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_NOTIFY_SUCCESS]: notifySuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_COUNT_SUCCESS]: countSuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_SUCCESS]: filteredSuccess,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_COUNT_SUCCESS]: filteredCountSuccess,


    [PaymentScheduleTypes.PAYMENT_SCHEDULE_FAILURE]: failure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_ALL_FAILURE]: allFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_RANGE_FAILURE]: rangeFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_PROJECTION_FAILURE]: projectionFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_SUMMARY_FAILURE]: summaryFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_UPDATE_FAILURE]: updateFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_DELETE_FAILURE]: deleteFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_NOTIFY_FAILURE]: notifyFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_COUNT_FAILURE]: countFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_FAILURE]: filteredFailure,
    [PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_COUNT_FAILURE]: filteredCountFailure,

});
