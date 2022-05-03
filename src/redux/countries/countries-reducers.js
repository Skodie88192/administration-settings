import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { CountriesTypes } from "./countries-actions";

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    fetchingCountries: null,
    fetchingIdentityDocuments: null,
    fetchingIdentityDocument: null,
    fetchingIdentityCount: null,
    updating: null,
    creating: null,
    disabling: null,
    countries: null,
    country: null,
    count: null,
    identityDocument: null,
    identityDocuments: null,
    errorCountries: null,
    errorIdentityDocument: null,
    errorIdentityDocuments: null,
    errorUpdating: null,
    errorCreating: null,
    errorDisabling: null,
    errorIdentityCount: null
});

/* ------------- Reducers ------------- */

export const saveCountry = (state, action) => {
    const { country } = action;
    return { ...state, country }
}

// request the data from an api
export const idDocsCountRequest = (state) => {
    return { ...state, fetchingIdentityCount: true }
}

// request the data from an api
export const idDocRequest = (state) => {
    return { ...state, fetchingIdentityDocument: true }
}


// request the data from an api
export const countriesRequest = (state) => {
    return { ...state, fetchingCountries: true };
};

// request the data from an api
export const idDocsRequest = (state) => {
    return { ...state, fetchingIdentityDocuments: true }
}

// request the data from an api
export const updateDocRequest = (state) => {
    return { ...state, updating: true }
}
// request the data from an api
export const createDocRequest = (state) => {
    return { ...state, creating: true }
}
// request the data from an api
export const disableIdDocRequest = (state) => {
    return { ...state, disabling: true };
};

// successful api lookup for id
export const idDocsCountSuccess = (state, action) => {
    const { count } = action;
    return { ...state, count, fetchingIdentityCount: false, errorIdentityCount: null }
};

// successful api lookup for id
export const idDocSuccess = (state, action) => {
    const { identityDocument } = action;
    return { ...state, identityDocument, fetchingIdentityDocument: false, errorIdentityDocument: null }
};

// successful api lookup for countries
export const countriesSuccess = (state, action) => {
    const { countries } = action;
    return { ...state, countries, fetchingCountries: false, errorCountries: null, }
};

// successful api lookup for updating
export const updateDocSuccess = (state, action) => {
    const { identityDocument } = action;
    return { ...state, identityDocument, updating: false, errorUpdating: null, }
};

// successful api lookup for creating
export const createDocSuccess = (state, action) => {
    const { identityDocument } = action;
    return { ...state, identityDocument, creating: false, errorCreating: null, }
};

// successful api lookup for ids
export const idDocsSuccess = (state, action) => {
    const { identityDocuments } = action;
    return { ...state, identityDocuments, fetchingIdentityDocuments: false, errorIdentityDocuments: null }
};
// successful api lookup for delete
export const disableIdDocSuccess = (state) => {
    return { ...state, disabling: false, errorDisabling: null };
};

// Something went wrong fetching id
export const idDocsCountFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIdentityCount: false, errorIdentityCount: error }
};

// Something went wrong fetching id
export const idDocFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIdDocument: false, errorIdDocument: error }
};

// Something went wrong fetching countries
export const countriesFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingCountries: false, errorCount: error }
};

// Something went wrong fetching id
export const idDocsFailure = (state, action) => {
    const { error } = action;
    return { ...state, fetchingIdentityDocuments: false, errorIdentityDocuments: error }
};

// Something went wrong creating
export const createDocFailure = (state, action) => {
    const { error } = action;
    return { ...state, creating: false, errorCreating: error }
};

// Something went wrong updating
export const updateDocFailure = (state, action) => {
    const { error } = action;
    return { ...state, updating: false, errorUpdating: error }
};
// Something went wrong updating
export const disableIdDocFailure = (state, action) => {
    const { error } = action;
    return { ...state, disabling: false, errorDisabling: error };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [CountriesTypes.COUNTRIES_REQUEST]: countriesRequest,
    [CountriesTypes.IDENTITY_DOCUMENT_REQUEST]: idDocRequest,
    [CountriesTypes.IDENTITY_DOCUMENTS_COUNT_REQUEST]: idDocsCountRequest,
    [CountriesTypes.IDENTITY_DOCUMENTS_REQUEST]: idDocsRequest,
    [CountriesTypes.UPDATE_DOCUMENT_REQUEST]: updateDocRequest,
    [CountriesTypes.CREATE_DOCUMENT_REQUEST]: createDocRequest,
    [CountriesTypes.DISABLE_IDENTITY_DOCUMENT_REQUEST]: disableIdDocRequest,

    [CountriesTypes.COUNTRIES_SUCCESS]: countriesSuccess,
    [CountriesTypes.IDENTITY_DOCUMENT_SUCCESS]: idDocSuccess,
    [CountriesTypes.IDENTITY_DOCUMENTS_COUNT_SUCCESS]: idDocsCountSuccess,
    [CountriesTypes.IDENTITY_DOCUMENTS_SUCCESS]: idDocsSuccess,
    [CountriesTypes.UPDATE_DOCUMENT_SUCCESS]: updateDocSuccess,
    [CountriesTypes.CREATE_DOCUMENT_SUCCESS]: createDocSuccess,
    [CountriesTypes.DISABLE_IDENTITY_DOCUMENT_SUCCESS]: disableIdDocSuccess,

    [CountriesTypes.COUNTRIES_FAILURE]: countriesFailure,
    [CountriesTypes.IDENTITY_DOCUMENT_FAILURE]: idDocFailure,
    [CountriesTypes.IDENTITY_DOCUMENTS_COUNT_FAILURE]: idDocsCountFailure,
    [CountriesTypes.IDENTITY_DOCUMENTS_FAILURE]: idDocsFailure,
    [CountriesTypes.UPDATE_DOCUMENT_FAILURE]: updateDocFailure,
    [CountriesTypes.CREATE_DOCUMENT_FAILURE]: createDocFailure,
    [CountriesTypes.DISABLE_IDENTITY_DOCUMENT_FAILURE]: disableIdDocFailure,

    [CountriesTypes.SAVE_COUNTRY]: saveCountry,
})