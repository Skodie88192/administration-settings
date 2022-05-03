import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { EnterpriseTypes } from "./enterprise-actions";

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingEnterprise: null,
    enterprise: null,
    enabling: null,
    generating: null,
    disable: null,
    errorFetching: null,
    errorEnable: null,
    errorGenerate: null,
    errorDisable: null,
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
    return { ...state, fetchingEnterprise: true, };
};

// request the data from an api
export const enableRequest = (state) => {
    return { ...state, enabling: true };
};

// request the data from an api
export const generateRequest = (state) => {
    return { ...state, generating: true, enterprise: null };
};

// request the data from an api
export const disableRequest = (state) => {
    return { ...state, disabling: true };
};

// successful api lookup for fecthing enterprise
export const success = (state, action) => {
    const { enterprise } = action;
    return { ...state, fetchingEnterprise: false, enterprise };
};

// successful api lookup for enabling enterprise
export const enableSuccess = (state) => {
    return { ...state, enabling: false, };
};

// successful api lookup for generating enterprise
export const generateSuccess = (state, action) => {
    const { enterprise } = action;
    return { ...state, errorGenerate: null, generating: false, enterprise };
};

// successful api lookup for disabling enterprise
export const disableSuccess = (state) => {
    return { ...state, disabling: false, errorDisable: null };
};

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingEnterprise: false, errorFetching: error, enterprise: null };
};

// Something went wrong enabling.
export const enableFailure = (state, action) => {
    const { error } = action;
    return { ...state, enabling: false, errorEnable: error };
};

// Something went wrong generating.
export const generateFailure = (state, action) => {
    const { error } = action;
    return { ...state, generating: false, errorGenerate: error };
};

// Something went wrong generating.
export const disableFailure = (state, action) => {
    const { error } = action;
    return { ...state, disabling: false, errorDisable: error };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [EnterpriseTypes.ENTERPRISE_REQUEST]: request,
    [EnterpriseTypes.ENABLE_REQUEST]: enableRequest,
    [EnterpriseTypes.GENERATE_REQUEST]: generateRequest,
    [EnterpriseTypes.DISABLE_REQUEST]: disableRequest,

    [EnterpriseTypes.ENTERPRISE_SUCCESS]: success,
    [EnterpriseTypes.ENABLE_SUCCESS]: enableSuccess,
    [EnterpriseTypes.GENERATE_SUCCESS]: generateSuccess,
    [EnterpriseTypes.DISABLE_SUCCESS]: disableSuccess,

    [EnterpriseTypes.ENTERPRISE_FAILURE]: failure,
    [EnterpriseTypes.ENABLE_FAILURE]: enableFailure,
    [EnterpriseTypes.GENERATE_FAILURE]: generateFailure,
    [EnterpriseTypes.DISABLE_FAILURE]: disableFailure,
})