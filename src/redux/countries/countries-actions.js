import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    countriesRequest: ["options"],
    identityDocumentRequest: ["idDocId"],
    identityDocumentsCountRequest: ["countryId"],
    identityDocumentsRequest: ["countryId", "options"],
    updateDocumentRequest: ["identityDocument"],
    createDocumentRequest: ["identityDocument"],
    disableIdentityDocumentRequest: ["idDocId"],

    countriesSuccess: ["countries"],
    identityDocumentSuccess: ["identityDocument"],
    identityDocumentsCountSuccess: ["count"],
    identityDocumentsSuccess: ["identityDocuments"],
    updateDocumentSuccess: ["identityDocument"],
    createDocumentSuccess: ["identityDocument"],
    disableIdentityDocumentSuccess: [],

    countriesFailure: ["error"],
    identityDocumentFailure: ["error"],
    identityDocumentsCountFailure: ["error"],
    identityDocumentsFailure: ["error"],
    updateDocumentFailure: ["error"],
    createDocumentFailure: ["error"],
    disableIdentityDocumentFailure: ["error"],

    saveCountry: ["country"],
});



export const CountriesTypes = Types;
export default Creators;
