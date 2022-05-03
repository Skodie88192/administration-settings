import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    payoutChannelRequest: ['payoutChannelId'],
    payoutChannelBusinessRequest: ['businessId', 'options'],
    payoutChannelUpdateRequest: ['payoutChannel'],
    payoutChannelDeleteRequest: ['payoutChannelId'],
    payoutChannelArchiveRequest: ['payoutChannelId', 'username'],

    payoutChannelSuccess: ['payoutChannel'],
    payoutChannelBusinessSuccess: ['payoutChannels'],
    payoutChannelUpdateSuccess: ['payoutChannel'],
    payoutChannelDeleteSuccess: [],
    payoutChannelArchiveSuccess: [],

    payoutChannelFailure: ['error'],
    payoutChannelBusinessFailure: ['error'],
    payoutChannelUpdateFailure: ['error'],
    payoutChannelDeleteFailure: ['error'],
    payoutChannelArchiveFailure: ['error']
})

export const PayoutChannelTypes = Types
export default Creators
