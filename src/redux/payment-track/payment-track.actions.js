import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    paymentTrackRangeRequest: ['businessId', 'startDate', 'endDate', 'options'],

    paymentTrackRangeSuccess: ['paymentTrackRange'],

    paymentTrackRangeFailure: ['error'],
})

export const PaymentTrackTypes = Types
export default Creators