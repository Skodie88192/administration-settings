import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    settlementRequest: ['settlementId'],
    settlementBusinessRequest: ['businessId', 'options'],
    settlementAllRequest: ['options'],
    settlementCountRequest: [],
    settlementFilterRequest: ['filter', 'options'],
    settlementUpdateRequest: ['settlement'],
    settlementDeleteRequest: ['settlementId', 'options'],

    settlementSuccess: ['settlement'],
    settlementBusinessSuccess: ['settlement'],
    settlementAllSuccess: ['settlements'],
    settlementCountSuccess: ['count'],
    settlementFilterSuccess: ['filtered'],
    settlementUpdateSuccess: ['settlement'],
    settlementDeleteSuccess: [],

    settlementFailure: ['error'],
    settlementBusinessFailure: ['error'],
    settlementAllFailure: ['error'],
    settlementCountFailure: ['error'],
    settlementFilterFailure: ['error'],
    settlementUpdateFailure: ['error'],
    settlementDeleteFailure: ['error'],
})

export const SettlementTypes = Types
export default Creators