import { call, put } from 'redux-saga/effects'
import * as api from "../../services/api";
import PayoutChannelActions from './payoutchannel-actions'

export function* getPayoutChannel(action) {
    const { payoutChannelId } = action
    // make the call to the api
    const response = yield call(api.getPayoutChannel, payoutChannelId)

    // success?
    if (response.ok) {
        console.log('Payout Channel OK')
        yield put(PayoutChannelActions.payoutChannelSuccess(response.data))
    } else {
        console.log('Payout Channel Failed')
        yield put(PayoutChannelActions.payoutChannelFailure(response.data))
    }
}

export function* getPayoutChannels(action) {
    const { businessId, options } = action
    // make the call to the api
    const response = yield call(api.getPayoutChannels, businessId, options)

    // success?
    if (response.ok) {
        console.log('Payout Channels OK')
        yield put(PayoutChannelActions.payoutChannelBusinessSuccess(response.data))
    } else {
        console.log('Payout Channels Failed')
        yield put(PayoutChannelActions.payoutChannelBusinessFailure(response.data))
    }
}

export function* updatePayoutChannel(action) {
    const { payoutChannel } = action
    // make the call to the api
    const idIsNotNull = !!payoutChannel.id
    const response = yield call(idIsNotNull ? api.updatePayoutChannel : api.createPayoutChannel, payoutChannel)

    // success?
    if (response.ok) {
        console.log('Update Payout Channel OK')
        yield put(PayoutChannelActions.payoutChannelUpdateSuccess(response.data))
    } else {
        console.log('Update Payout Channel Failed')
        yield put(PayoutChannelActions.payoutChannelUpdateFailure(response.data))
    }
}

export function* deletePayoutChannel(action) {
    const { payoutChannelId } = action
    // make the call to the api
    const response = yield call(api.deletePayoutChannel, payoutChannelId)

    // success?
    if (response.ok) {
        console.log('Delete Payout Channel OK')
        yield put(PayoutChannelActions.payoutChannelDeleteSuccess())
    } else {
        console.log('Delete Payout Channel Failed')
        yield put(PayoutChannelActions.payoutChannelDeleteFailure(response.data))
    }
}

export function* archivePayoutChannel(action) {
    const { payoutChannelId, username } = action
    // make the call to the api
    const response = yield call(api.archivePayoutChannel, payoutChannelId, username)

    // success?
    if (response.ok) {
        console.log('Archive Payout Channel OK')
        yield put(PayoutChannelActions.payoutChannelArchiveSuccess())
    } else {
        console.log('Archive Payout Channel Failed')
        yield put(PayoutChannelActions.payoutChannelArchiveFailure(response.data))
    }
}
