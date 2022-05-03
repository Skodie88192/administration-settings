import { call, put } from "redux-saga/effects";
import EnterpriseActions from "./enterprise-actions";
import * as api from "../../services/api";

export function* getCredential(action) {
  const { businessId } = action;
  // make the call to the api
  const response = yield call(api.getCredential, businessId);

  // success?
  if (response.ok) {
    yield put(EnterpriseActions.enterpriseSuccess(response.data));
  } else {
    yield put(EnterpriseActions.enterpriseFailure(response.data));
  }
}

export function* enableRequest(action) {
  const { businessId } = action;
  // make the call to the api
  const response = yield call(api.enableRequest, businessId);

  // success?
  if (response.ok) {
    yield put(EnterpriseActions.enableSuccess(response.data));
  } else {
    yield put(EnterpriseActions.enableFailure(response.data));
  }
}

export function* generateRequest(action) {
  const { businessId } = action;
  // make the call to the api
  const response = yield call(api.generateRequest, businessId);
  // success?
  if (response.ok) {
    yield put(EnterpriseActions.generateSuccess(response.data));
  } else {
    yield put(EnterpriseActions.generateFailure(response.data));
  }
}

export function* disableRequest(action) {
  const { businessId } = action;
  // make the call to the api
  const response = yield call(api.disableRequest, businessId);
  // success?
  if (response.ok) {
    yield put(EnterpriseActions.disableSuccess(response.data));
  } else {
    yield put(EnterpriseActions.disableFailure(response.data));
  }
}