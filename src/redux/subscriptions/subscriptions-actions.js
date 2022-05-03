import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    subscriptionRequest: ['subscriptionId'],
    subscriptionAllRequest: ['options'],
    subscriptionSearchRequest: ['query', 'filters', 'options'],
    subscriptionDateSearchRequest: ['query', 'businessId', 'startDate', 'endDate', 'options'],
    subscriptionSearchCountRequest: ['query', 'filter', 'options'],
    subscriptionCountRequest: ['options'],

    subscriptionSuccess: ['subscription'],
    subscriptionAllSuccess: ['subscriptions'],
    subscriptionSearchSuccess: ['searchSubscriptions'],
    subscriptionDateSearchSuccess: ['dateSearchSubscriptions'],
    subscriptionSearchCountSuccess: ['count'],
    subscriptionCountSuccess: ['count'],

    subscriptionFailure: ['error'],
    subscriptionAllFailure: ['error'],
    subscriptionSearchFailure: ['error'],
    subscriptionDateSearchFailure: ['error'],
    subscriptionSearchCountFailure: ['error'],
    subscriptionCountFailure: ['error']

})

export const SubscriptionTypes = Types
export default Creators