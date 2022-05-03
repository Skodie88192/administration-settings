import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  businessRequest: ["businessId"],
  businessesCountRequest: [],
  businessAllRequest: ["options"],
  businessUpdateRequest: ["business"],
  businessDeleteRequest: ["businessId"],

  businessSuccess: ["business"],
  businessesCountSuccess: ["businessesCount"],
  businessAllSuccess: ["businesses"],
  businessUpdateSuccess: ["business"],
  businessDeleteSuccess: [],

  businessFailure: ["error"],
  businessesCountFailure: ["error"],
  businessAllFailure: ["error"],
  businessUpdateFailure: ["error"],
  businessDeleteFailure: ["error"],
});

export const BusinessTypes = Types;
export default Creators;
