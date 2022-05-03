import { call, put } from 'redux-saga/effects'
import * as api from "../../services/api";
import SubscriptionActions from './subscriptions-actions'

export function* getSubscription(action) {
    const { subscriptionId } = action
    //make the call to the api
    const response = yield call(api.getSubscription,subscriptionId )

    //success?
    if (response.ok) {
        yield put(SubscriptionActions.subscriptionSuccess(response.data))
    } else {
        yield put(SubscriptionActions.subscriptionFailure(response.data))
    }
}

export function* getAllSubscriptions(action) {
    const { options } = action
    //make the call to the api
    const response = yield call(api.getAllSubscriptions, options)

    //success?
    if (response.ok) {
        yield put(SubscriptionActions.subscriptionAllSuccess(response.data))
    } else {
        yield put(SubscriptionActions.subscriptionAllFailure(response.data))
    }
}

export function* searchSubscriptions(action) {
    const { query, filters, options } = action
    //make the call to the api
    const response = yield call(api.searchSubscriptions, query, filters, options)

    //success?
    if (response.ok) {
        yield put(SubscriptionActions.subscriptionSearchSuccess(response.data))
    } else {
        yield put(SubscriptionActions.subscriptionSearchFailure(response.data))
    }
}

export function* dateFilterSubscriptions(action) {
    const { query, businessId, startDate, endDate, options } = action
    //make the call to the api
    const response = yield call(api.dateFilterSubscriptions, query, businessId, startDate, endDate, options)

    //success?
    if (response.ok) {
        console.log(response);
        yield put(SubscriptionActions.subscriptionDateSearchSuccess(response.data))
    } else {
        yield put(SubscriptionActions.subscriptionDateSearchFailure(response.data))
    }

}

export function* subscriptionSearchCount(action) {
    const { query, filters } = action
    // make api call to the api
    const response = yield call(api.searchSubscriptionCount, query, filters)

    //success?
    if (response.ok) {
        yield put(SubscriptionActions.subscriptionSearchCountSuccess(response.data))
    } else {
        yield put(SubscriptionActions.subscriptionSearchCountFailure(response.data))
    }
}

export function* getCountSubscriptions(action) {
    const { options } = action
    // make api call to the api
    const response = yield call(api.getCountSubscriptions, options)
    //success?
    if (response.ok) {
        yield put(SubscriptionActions.subscriptionCountSuccess(response.data))
    } else {
        yield put(SubscriptionActions.subscriptionCountFailure(response.data))
    }
}
