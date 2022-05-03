import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    indexSubscribersRequest: [],
    indexPaymentsRequest: [],
    indexSignupRequest: [],
    indexCustomersRequest: [],
    indexPaymentSchedulesRequest: [],
    indexPlansRequest: [],

    indexSubscribersSuccess: [],
    indexPaymentsSuccess: [],
    indexSignupSuccess: [],
    indexCustomersSuccess: [],
    indexPaymentSchedulesSuccess: [],
    indexPlansSuccess: [],

    indexSubscribersFailure: ["error"],
    indexPaymentsFailure: ["error"],
    indexSignupFailure: ["error"],
    indexCustomersFailure: ["error"],
    indexPaymentSchedulesFailure: ["error"],
    indexPlansFailure: ["error"]
});

export const IndexingTypes = Types;
export default Creators;