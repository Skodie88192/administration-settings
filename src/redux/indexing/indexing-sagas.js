import { call, put } from "redux-saga/effects";
import IndexingActions from "./indexing-actions";
import * as api from "../../services/api";

export function* indexSubscribers() {
    // make the call to the api
    const response = yield call(api.indexSubscribers);

    //success?
    if (response.ok) {
        yield put(IndexingActions.indexSubscribersSuccess(response.data));
    } else {
        yield put(IndexingActions.indexSubscribersFailure(response.data))
    }
}

export function* indexPayments() {
    // make the call to the api
    const response = yield call(api.indexPayments);

    //success?
    if (response.ok) {
        yield put(IndexingActions.indexPaymentsSuccess(response.data));
    } else {
        yield put(IndexingActions.indexPaymentsFailure(response.data))
    }
}

export function* indexSignupRequest() {
    // make the call to the api
    const response = yield call(api.indexSignupRequests);

    console.log(response);
    //success?
    if (response.ok) {
        yield put(IndexingActions.indexSignupSuccess(response.data));
    } else {
        yield put(IndexingActions.indexSignupFailure(response.data))
    }
}

export function* indexCustomers() {
    // make the call to the api
    const response = yield call(api.indexCustomers);

    //success?
    if (response.ok) {
        yield put(IndexingActions.indexCustomersSuccess(response.data));
    } else {
        yield put(IndexingActions.indexCustomersFailure(response.data))
    }
}

export function* indexPaymentSchedules() {
    // make the call to the api
    const response = yield call(api.indexPaymentsSchedules);

    //success?
    if (response.ok) {
        yield put(IndexingActions.indexPaymentSchedulesSuccess(response.data));
    } else {
        yield put(IndexingActions.indexPaymentSchedulesFailure(response.data))
    }
}

export function* indexPlans() {
    // make the call to the api
    const response = yield call(api.indexPlans);

    //success?
    if (response.ok) {
        yield put(IndexingActions.indexPlansSuccess(response.data));
    } else {
        yield put(IndexingActions.indexPlansFailure(response.data))
    }
}