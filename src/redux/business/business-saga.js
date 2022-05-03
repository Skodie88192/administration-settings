import { call, put } from "redux-saga/effects";
import BusinessActions from "./business-actions";
import * as api from "../../services/api";

export function* getBusiness(action) {
  const { businessId } = action;
  // make the call to the api
  const response = yield call(api.getBusiness, businessId);

  // success?
  if (response.ok) {
    yield put(BusinessActions.businessSuccess(response.data));
  } else {
    yield put(BusinessActions.businessFailure(response.data));
  }
}

export function* getBusinesses(action) {
  const { options } = action;
  // make the call to the api
  const response = yield call(api.getBusinesses, options);

  // success?
  if (response.ok) {
    yield put(BusinessActions.businessAllSuccess(response.data));
  } else {
    yield put(BusinessActions.businessAllFailure(response.data));
  }
}
export function* getBusinessesCount() {
  // make the call to the api
  const response = yield call(api.getBusinessesCount);

  // success?
  if (response.ok) {
    yield put(BusinessActions.businessesCountSuccess(response.data));
  } else {
    yield put(BusinessActions.businessesCountFailure(response.data));
  }
}

export function* updateBusiness(action) {
  const { business } = action;
  // make the call to the api
  const idIsNotNull = !!business.id;
  const response = yield call(
    idIsNotNull ? api.updateBusiness : api.createBusiness,
    business
  );

  // success?
  if (response.ok) {
    yield put(BusinessActions.businessUpdateSuccess(response.data));
  } else {
    yield put(BusinessActions.businessUpdateFailure(response.data));
  }
}

export function* deleteBusiness(action) {
  const { businessId } = action;
  // make the call to the api
  const response = yield call(api.deleteBusiness, businessId);

  // success?
  if (response.ok) {
    yield put(BusinessActions.businessDeleteSuccess());
  } else {
    yield put(BusinessActions.businessDeleteFailure(response.data));
  }
}
