import { call, put } from 'redux-saga/effects'
import * as api from "../../services/api";
import SettlementActions from './settlement-actions'

export function* getOneSettlement(action) {
    const { settlementId } = action
    // make the call to the api
    const response = yield call(api.getOneSettlement, settlementId)

    // success?
    if (response.ok) {
        yield put(SettlementActions.settlementSuccess(response.data))
    } else {
        yield put(SettlementActions.settlementFailure(response.data))
    }
}

export function* getSettlement(action) {
    const { businessId, options } = action
    // make the call to the api
    const response = yield call(api.getSettlement, businessId, options)

    // success?
    if (response.ok) {
        yield put(SettlementActions.settlementBusinessSuccess(response.data))
    } else {
        yield put(SettlementActions.settlementBusinessFailure(response.data))
    }
}

export function* getAllSettlements(action) {
    const { options } = action
    // make the call to the api
    const response = yield call(api.getAllSettlements, options)

    // success?
    if (response.ok) {
        yield put(SettlementActions.settlementAllSuccess(response.data))
    } else {
        yield put(SettlementActions.settlementAllFailure(response.data))
    }
}

export function* getSettlementCount() {
    // make the call to the api
    const response = yield call(api.getSettlementCount)

    // success?
    if (response.ok) {
        yield put(SettlementActions.settlementCountSuccess(response.data))
    } else {
        yield put(SettlementActions.settlementCountFailure(response.data))
    }
}

export function* getSettlementFilter(action) {
    const { filter, options } = action
    // make the call to the api
    const response = yield call(api.getFilterSettlements, filter, options)

    // success?
    if (response.ok) {
        yield put(SettlementActions.settlementFilterSuccess(response.data))
    } else {
        yield put(SettlementActions.settlementFilterFailure(response.data))
    }
}

export function* updateSettlement(action) {
    const { settlement } = action
    // make the call to the api
    const idIsNotNull = !!settlement.id
    const response = yield call(idIsNotNull ? api.updateSettlement : api.createSettlement, settlement)

    // success?
    if (response.ok) {
        yield put(SettlementActions.settlementUpdateSuccess(response.data))
    } else {
        yield put(SettlementActions.settlementUpdateFailure(response.data))
    }
}

export function* deleteSettlement(action) {
    const { settlementId, options } = action
    // make the call to the api
    const response = yield call(api.deleteSettlement, settlementId)

    // success?
    if (response.ok) {
        yield put(SettlementActions.settlementDeleteSuccess());
        yield put(SettlementActions.settlementAllRequest(options));
        yield put(SettlementActions.settlementCountRequest());
    } else {
        yield put(SettlementActions.settlementDeleteFailure(response.data))
    }
}
