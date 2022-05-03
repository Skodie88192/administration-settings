import { call, put } from "redux-saga/effects";
import CountriesActions from "./countries-actions";
import * as api from "../../services/api";

export function* getIdentityDocument(action) {
    const { idDocId } = action;
    // make the call to the api
    const response = yield call(api.getIdentityDocument, idDocId)

    //success?
    if (response.ok) {
        yield put(CountriesActions.identityDocumentSuccess(response.data));
    } else {
        yield put(CountriesActions.identityDocumentFailure(response.data))
    }
}

export function* getCountries(action) {
    const { options } = action;
    // make the call to the api
    const response = yield call(api.getCountries, options);

    //success?
    if (response.ok) {
        yield put(CountriesActions.countriesSuccess(response.data));
    } else {
        yield put(CountriesActions.countriesFailure(response.data))
    }
}

export function* getIdentityDocuments(action) {
    const { countryId, options } = action;
    // make the call to the api
    const response = yield call(api.getIdentityDocuments, countryId, options)

    //success?
    if (response.ok) {
        yield put(CountriesActions.identityDocumentsSuccess(response.data));
    } else {
        yield put(CountriesActions.identityDocumentsFailure(response.data))
    }
}

export function* updateIdentityDocument(action) {
    const { identityDocument } = action;
    // make the call to the api
    const response = yield call(api.updateIdentityDocuments, identityDocument)

    //success?
    if (response.ok) {
        yield put(CountriesActions.updateDocumentSuccess(response.data));
    } else {
        yield put(CountriesActions.updateDocumentFailure(response.data))
    }
}
export function* createIdentityDocument(action) {
    const { identityDocument } = action;
    // make the call to the api
    const response = yield call(api.createIdentityDocuments, identityDocument)

    //success?
    if (response.ok) {
        yield put(CountriesActions.createDocumentSuccess(response.data));
    } else {
        yield put(CountriesActions.createDocumentFailure(response.data))
    }
}
export function* disableIdentityDocument(action) {
    const { idDocId } = action;
    // make the call to the api
    const response = yield call(api.disableIdentityDocuments, idDocId)
    //success?
    if (response.ok) {
        yield put(CountriesActions.disableIdentitySuccess(response.data));
    } else {
        yield put(CountriesActions.disableIdentityFailure(response.data))
    }
}
export function* getIdentityDocumentsCount(action) {
    const { countryId } = action;
    // make the call to the api
    const response = yield call(api.getIdentityDocumentsCount, countryId);
    //success?
    if (response.ok) {
        yield put(CountriesActions.identityDocumentsCountSuccess(response.data));
    } else {
        yield put(CountriesActions.identityDocumentsCountFailure(response.data))
    }
}