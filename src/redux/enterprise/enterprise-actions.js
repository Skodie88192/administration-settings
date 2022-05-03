import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    enterpriseRequest: ["businessId"],
    enableRequest: ["businessId"],
    generateRequest: ["businessId"],
    disableRequest: ["businessId"],

    enterpriseSuccess: ["enterprise"],
    enableSuccess: [],
    generateSuccess: ["enterprise"],
    disableSuccess: [],

    enterpriseFailure: ["error"],
    enableFailure: ["error"],
    generateFailure: ["error"],
    disableFailure: ["error"],
})

export const EnterpriseTypes = Types;
export default Creators;

