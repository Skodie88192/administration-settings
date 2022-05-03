import {call, put } from "redux-saga/effects";
import PlanGroupActions from "./plan-group-actions";
import * as api from "../../services/api";

  export function* getPlanGroupsGraphedActive(action) {
    const { businessId } = action;
    // make the call to the api
    const response = yield call(api.getPlanGroupsGraphedActive, businessId);
  
    // success?
    if (response.ok) {
      yield put(PlanGroupActions.planGroupGraphedActiveSuccess(response.data));
      // console.log(response.data);
    } else {
      yield put(PlanGroupActions.planGroupGraphedActiveFailure(response.data));
    }
  }
  
  export function* getPlanGroupsGraphedArchived(action) {
    const { businessId } = action;
    // make the call to the api
    const response = yield call(api.getPlanGroupsGraphedArchived, businessId);
  
    // success?
    if (response.ok) {
      yield put(PlanGroupActions.planGroupGraphedArchivedSuccess(response.data));
    } else {
      yield put(PlanGroupActions.planGroupGraphedArchivedFailure(response.data));
    }
  }