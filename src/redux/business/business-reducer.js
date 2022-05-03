import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { BusinessTypes } from "./business-actions";

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  fetchingBusinessesCount: null,
  updating: null,
  deleting: null,
  business: null,
  businesses: null,
  businessesCount: null,
  errorOne: null,
  errorAll: null,
  errorUpdating: null,
  errorDeleting: null,
  errorBusinessesCount: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
  return { ...state, fetchingOne: true, business: null };
};
// request the data from an api
export const allRequest = (state) => {
  return { ...state, fetchingAll: true, business: null };
};
// request the data from an api
export const businessesCountRequest = (state) => {
  return { ...state, fetchingCount: true, count: null };
};
// request to update from an api
export const updateRequest = (state) => {
  return { ...state, updating: true };
};
// request to delete from an api
export const deleteRequest = (state) => {
  return { ...state, deleting: true };
};

// successful api lookup for single entity
export const success = (state, action) => {
  const { business } = action;
  return { ...state, fetchingOne: false, errorOne: null, business };
};
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { businesses } = action;
  return { ...state, fetchingAll: false, errorAll: null, businesses };
};
// successful api lookup for all count entities
export const businessesCountSuccess = (state, action) => {
  const { businessesCount } = action;
  return { ...state, fetchingCount: false, errorCount: null, businessesCount: businessesCount };
};
// successful api update
export const updateSuccess = (state, action) => {
  const { business } = action;
  return { ...state, updating: false, errorUpdating: null, business };
};
// successful api delete
export const deleteSuccess = (state) => {
  return { ...state, deleting: false, errorDeleting: null, business: null };
};

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action;
  return { ...state, fetchingOne: false, errorOne: error, business: null };
};
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action;
  return { ...state, fetchingAll: false, errorAll: error, businesses: null };
};
// Something went wrong fetching count entities.
export const businessesCountFailure = (state, action) => {
  const { error } = action;
  return { ...state, fetchingCount: false, errorCount: error, count: null };
};
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action;
  return { ...state, updating: false, errorUpdating: error };
};
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action;
  return { ...state, deleting: false, errorDeleting: error };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [BusinessTypes.BUSINESS_REQUEST]: request,
  [BusinessTypes.BUSINESS_ALL_REQUEST]: allRequest,
  [BusinessTypes.BUSINESSES_COUNT_REQUEST]: businessesCountRequest,
  [BusinessTypes.BUSINESS_UPDATE_REQUEST]: updateRequest,
  [BusinessTypes.BUSINESS_DELETE_REQUEST]: deleteRequest,

  [BusinessTypes.BUSINESS_SUCCESS]: success,
  [BusinessTypes.BUSINESSES_COUNT_SUCCESS]: businessesCountSuccess,
  [BusinessTypes.BUSINESS_ALL_SUCCESS]: allSuccess,
  [BusinessTypes.BUSINESS_UPDATE_SUCCESS]: updateSuccess,
  [BusinessTypes.BUSINESS_DELETE_SUCCESS]: deleteSuccess,

  [BusinessTypes.BUSINESS_FAILURE]: failure,
  [BusinessTypes.BUSINESS_ALL_FAILURE]: allFailure,
  [BusinessTypes.BUSINESSES_COUNT_FAILURE]: businessesCountFailure,
  [BusinessTypes.BUSINESS_UPDATE_FAILURE]: updateFailure,
  [BusinessTypes.BUSINESS_DELETE_FAILURE]: deleteFailure,
});
