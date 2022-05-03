import { call, put } from 'redux-saga/effects'
import * as api from "../../services/api";
import PaymentTrackActions from './payment-track.actions'

export function* getPaymentTrackRange(action) {
    const { businessId, startDate, endDate, options } = action
    // make the call to the api
    const response = yield call(api.getPaymentTrackRange, businessId, startDate, endDate, options)

    // success?
    if (response.ok) {
        yield put(PaymentTrackActions.paymentTrackRangeSuccess(response.data))
    } else {
        yield put(PaymentTrackActions.paymentTrackRangeFailure(response.data))
    }
}


