import { call, put } from "redux-saga/effects";
import PaymentScheduleActions from "./payments-actions";
import * as api from "../../services/api";

export function* getPaymentSchedule(action) {
    const { paymentScheduleId } = action;
    // make the call to the api
    const response = yield call(api.getPaymentSchedule, paymentScheduleId);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleSuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleFailure(response.data));
    }
}

export function* getPaymentScheduleCount() {
    // make the call to the api
    const response = yield call(api.getPaymentScheduleCount)

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleCountSuccess(response.data))
    } else {
        yield put(PaymentScheduleActions.paymentScheduleCountFailure(response.data))
    }
}

export function* getPaymentScheduleProjection(action) {
    const { businessId, startDate, endDate } = action;
    // make the call to the api

    const response = yield call(api.getPaymentScheduleProjection, businessId, startDate, endDate);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleProjectionSuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleProjectionFailure(response.data));
    }
}

export function* getPaymentSchedules(action) {
    const { options } = action;
    // make the call to the api

    const response = yield call(api.getPaymentSchedules, options);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleAllSuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleAllFailure(response.data));
    }
}

export function* getPaymentFilteredScheduleCount(action) {
    const { filter } = action;
    // make the call to the api
    const response = yield call(api.getFilterPaymentCount,filter)

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleFilteredCountSuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleFilteredCountFailure(response.data));
    }
}

export function* getPaymentFilteredSchedules(action) {
    const { filter, options } = action;
    // make the call to the api

    const response = yield call(api.getFilterPaymentSchedule, filter, options);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleFilteredSuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleFilteredFailure(response.data));
    }
}

export function* getPaymentScheduleRange(action) {
    const { businessId, startDate, endDate, options } = action;
    // make the call to the api

    const response = yield call(api.getPaymentScheduleRange, businessId, startDate, endDate, options);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleRangeSuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleRangeFailure(response.data));
    }
}

export function* getPaymentScheduleSummary(action) {
    const { businessId, startDate, endDate, currentDate } = action;

    // make the call to the api
    const response = yield call(api.getPaymentScheduleSummary, businessId, startDate, endDate, currentDate);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleSummarySuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleSummaryFailure(response.data));
    }
}

export function* updatePaymentSchedule(action) {
    const { paymentSchedule } = action;
    // make the call to the api
    const idIsNotNull = !!paymentSchedule.id;
    const response = yield call(idIsNotNull ? api.updatePaymentSchedule : api.createPaymentSchedule, paymentSchedule);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleUpdateSuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleUpdateFailure(response.data));
    }
}

export function* notifyPaymentSchedule(action) {
    const { paymentScheduleId } = action;
    // make the call to the api

    const response = yield call(api.notifyPaymentSchedule, paymentScheduleId);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleNotifySuccess(response.data));
    } else {
        yield put(PaymentScheduleActions.paymentScheduleNotifyFailure(response.data));
    }
}

export function* deletePaymentSchedule(action) {
    const { paymentScheduleId } = action;
    // make the call to the api

    const response = yield call(api.deletePaymentSchedule, paymentScheduleId);

    // success?
    if (response.ok) {
        yield put(PaymentScheduleActions.paymentScheduleDeleteSuccess());
    } else {
        yield put(PaymentScheduleActions.paymentScheduleDeleteFailure(response.data));
    }
}
