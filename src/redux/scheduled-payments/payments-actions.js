import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    paymentScheduleRequest: ["paymentScheduleId"],
    paymentScheduleRangeRequest: ["businessId", "startDate", "endDate", "options",],
    paymentScheduleSummaryRequest: ["businessId", "startDate", "endDate", "currentDate",],
    paymentScheduleProjectionRequest: ["businessId", "startDate", "endDate"],
    paymentScheduleAllRequest: ["options"],
    paymentScheduleUpdateRequest: ["paymentSchedule"],
    paymentScheduleDeleteRequest: ["paymentScheduleId"],
    paymentScheduleNotifyRequest: ["paymentScheduleId"],
    paymentScheduleCountRequest: [],
    paymentScheduleFilteredRequest: ["filter","options"],
    paymentScheduleFilteredCountRequest: ["filter"],

    paymentScheduleSuccess: ["paymentSchedule"],
    paymentScheduleRangeSuccess: ["paymentScheduleRange"],
    paymentScheduleSummarySuccess: ["paymentScheduleSummary"],
    paymentScheduleProjectionSuccess: ["projection"],
    paymentScheduleAllSuccess: ["paymentSchedules"],
    paymentScheduleUpdateSuccess: ["paymentSchedule"],
    paymentScheduleDeleteSuccess: [],
    paymentScheduleNotifySuccess: ["paymentSchedule"],
    paymentScheduleCountSuccess: ['count'],
    paymentScheduleFilteredSuccess: ["filtered"],
    paymentScheduleFilteredCountSuccess: ["filteredCount"],

    paymentScheduleFailure: ["error"],
    paymentScheduleRangeFailure: ["error"],
    paymentScheduleSummaryFailure: ["error"],
    paymentScheduleProjectionFailure: ["error"],
    paymentScheduleAllFailure: ["error"],
    paymentScheduleUpdateFailure: ["error"],
    paymentScheduleDeleteFailure: ["error"],
    paymentScheduleNotifyFailure: ["error"],
    paymentScheduleCountFailure: ['error'],
    paymentScheduleFilteredFailure: ["error"],
    paymentScheduleFilteredCountFailure: ["error"],
});

export const PaymentScheduleTypes = Types;
export default Creators;