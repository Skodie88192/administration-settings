import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const {Types,Creators} = createActions({
    planGroupGraphedActiveRequest: ["businessId"],
	planGroupGraphedArchivedRequest: ["businessId"],
	
    planGroupGraphedActiveSuccess: ["planGroupsGraphed"],
    planGroupGraphedArchivedSuccess: ["planGroupsGraphed"],

    planGroupGraphedActiveFailure: ["error"],
    planGroupGraphedArchivedFailure: ["error"],
})

export const PlanGroupTypes = Types
export default Creators