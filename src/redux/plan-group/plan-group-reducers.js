import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { PlanGroupTypes } from "./plan-group-actions";

/* ------------- Initial State ------------- */

export const INITIAL_STATE=Immutable({
  fetchingplanGroupGraphed: null,
  fetchingArchived:null,
  planGroupsGraphed: null,
  archiving: null,
  errorArchiving: null,
  errorplanGroupsGraphed: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const graphedRequest = (state) => {
	return { ...state, fetchingplanGroupGraphed: true, planGroupGraphed: null };
};

// request to archive from an api
export const archiveRequest = (state) => {
	return { ...state, archiving: true};
};

// successful api lookup for all entities
export const graphedSuccess = (state, action) => {
	const { planGroupsGraphed } = action;
	return {
		...state,
		fetchingplanGroupsGraphed: false,
		errorplanGroupsGraphed: null,
		planGroupsGraphed,
	};
};

 // successful archiving delete
export const archiveSuccess = (state) => {
	return { ...state, archiving: false, errorArchiving: null, fetchingArchived: null };
};
// Something went wrong fetching all entities.
export const graphedFailure = (state, action) => {
	const { error } = action;
	return {
		...state,
		fetchingplanGroupsGraphed: false,
		errorplanGroupsGraphed: error,
		planGroupsGraphed: null,
	};
};

  // Something went wrong archiving.
export const archiveFailure = (state, action) => {
	const { error } = action;
	return {
		...state,
		archiving: false,
		fetchingArchived: null,
		errorArchiving: error,
	};
};


  /* ------------- Hookup Reducers To Types ------------- */

  export const reducer = createReducer(INITIAL_STATE, {
     [PlanGroupTypes.PLAN_GROUP_GRAPHED_ACTIVE_REQUEST]: graphedRequest,
    [PlanGroupTypes.PLAN_GROUP_GRAPHED_ARCHIVED_REQUEST]:archiveRequest,

    [PlanGroupTypes.PLAN_GROUP_GRAPHED_ACTIVE_SUCCESS]: graphedSuccess,
    [PlanGroupTypes.PLAN_GROUP_GRAPHED_ARCHIVED_SUCCESS]:archiveSuccess,
   
    [PlanGroupTypes.PLAN_GROUP_GRAPHED_ACTIVE_FAILURE]: graphedFailure,
    [PlanGroupTypes.PLAN_GROUP_GRAPHED_ARCHIVED_FAILURE]:archiveFailure,
})