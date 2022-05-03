import { takeLatest, all } from "redux-saga/effects";
/* ------------- Types ------------- */
import { SettlementTypes } from "./settlements/settlement-actions";
import { PaymentScheduleTypes } from "./scheduled-payments/payments-actions";
import { BusinessTypes } from "./business/business-actions";
import { PaymentTrackTypes } from "./payment-track/payment-track.actions";
import { PayoutChannelTypes } from "./payout-channel/payoutchannel-actions";
import { SubscriptionTypes } from "./subscriptions/subscriptions-actions";
import { PlanGroupTypes } from "./plan-group/plan-group-actions";
import { EnterpriseTypes } from "./enterprise/enterprise-actions";
import { IndexingTypes } from "./indexing/indexing-actions";
import { CountriesTypes } from "./countries/countries-actions";

/* ------------- Sagas ------------- */
import {getSettlement, getAllSettlements, getSettlementCount, updateSettlement, deleteSettlement, getSettlementFilter, getOneSettlement} from "./settlements/settlements-saga";
import {
  getPaymentSchedule, getPaymentScheduleProjection, getPaymentScheduleRange, getPaymentScheduleSummary, getPaymentSchedules, updatePaymentSchedule, 
  deletePaymentSchedule, notifyPaymentSchedule, getPaymentScheduleCount, getPaymentFilteredSchedules, getPaymentFilteredScheduleCount,
} from "./scheduled-payments/payments-sagas";
import {getBusiness, getBusinesses, getBusinessesCount, updateBusiness, deleteBusiness} from "./business/business-saga";
import { getPaymentTrackRange } from "./payment-track/payment-track-saga";
import { getPayoutChannels } from "./payout-channel/payoutchannel-saga";
import {getSubscription, getAllSubscriptions, searchSubscriptions, getCountSubscriptions, dateFilterSubscriptions} from "./subscriptions/subscriptions-saga";
import { getPlanGroupsGraphedArchived, getPlanGroupsGraphedActive } from "./plan-group/plan-group-sagas";
import { getCredential, enableRequest, generateRequest, disableRequest } from "./enterprise/enterprise-sagas";
import { indexSubscribers, indexPayments, indexSignupRequest, indexCustomers, indexPaymentSchedules, indexPlans } from "./indexing/indexing-sagas";
import { getCountries, getIdentityDocument, getIdentityDocuments, getIdentityDocumentsCount, updateIdentityDocument, createIdentityDocument, disableIdentityDocument } from "./countries/countries-sagas";

// saga-method-import-needle

/* ------------- Connect Types To Sagas ------------- */
// import * as api from "./enterprise/enterprise-sagas";

export default function* root() {
  yield all([
    takeLatest(SettlementTypes.SETTLEMENT_REQUEST, getOneSettlement),
    takeLatest(SettlementTypes.SETTLEMENT_BUSINESS_REQUEST, getSettlement),
    takeLatest(SettlementTypes.SETTLEMENT_ALL_REQUEST, getAllSettlements),
    takeLatest(SettlementTypes.SETTLEMENT_COUNT_REQUEST, getSettlementCount),
    takeLatest(SettlementTypes.SETTLEMENT_FILTER_REQUEST, getSettlementFilter),
    takeLatest(SettlementTypes.SETTLEMENT_UPDATE_REQUEST, updateSettlement),
    takeLatest(SettlementTypes.SETTLEMENT_DELETE_REQUEST, deleteSettlement),

    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_REQUEST, getPaymentSchedule),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_ALL_REQUEST, getPaymentSchedules),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_RANGE_REQUEST, getPaymentScheduleRange),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_PROJECTION_REQUEST, getPaymentScheduleProjection),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_SUMMARY_REQUEST, getPaymentScheduleSummary),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_UPDATE_REQUEST, updatePaymentSchedule),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_DELETE_REQUEST, deletePaymentSchedule),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_NOTIFY_REQUEST, notifyPaymentSchedule),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_COUNT_REQUEST, getPaymentScheduleCount),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_REQUEST, getPaymentFilteredSchedules),
    takeLatest(PaymentScheduleTypes.PAYMENT_SCHEDULE_FILTERED_COUNT_REQUEST, getPaymentFilteredScheduleCount),

    takeLatest(BusinessTypes.BUSINESS_REQUEST, getBusiness),
    takeLatest(BusinessTypes.BUSINESSES_COUNT_REQUEST, getBusinessesCount),
    takeLatest(BusinessTypes.BUSINESS_ALL_REQUEST, getBusinesses),
    takeLatest(BusinessTypes.BUSINESS_UPDATE_REQUEST, updateBusiness),
    takeLatest(BusinessTypes.BUSINESS_DELETE_REQUEST, deleteBusiness),

    takeLatest(PaymentTrackTypes.PAYMENT_TRACK_RANGE_REQUEST, getPaymentTrackRange),

    takeLatest(PayoutChannelTypes.PAYOUT_CHANNEL_BUSINESS_REQUEST, getPayoutChannels),

    takeLatest(SubscriptionTypes.SUBSCRIPTION_REQUEST, getSubscription),
    takeLatest(SubscriptionTypes.SUBSCRIPTION_ALL_REQUEST, getAllSubscriptions),
    takeLatest(SubscriptionTypes.SUBSCRIPTION_SEARCH_REQUEST, searchSubscriptions),
    takeLatest(SubscriptionTypes.SUBSCRIPTION_DATE_SEARCH_REQUEST, dateFilterSubscriptions),
    takeLatest(SubscriptionTypes.SUBSCRIPTION_COUNT_REQUEST, getCountSubscriptions),

    takeLatest(PlanGroupTypes.PLAN_GROUP_GRAPHED_ACTIVE_REQUEST, getPlanGroupsGraphedActive),
    takeLatest(PlanGroupTypes.PLAN_GROUP_GRAPHED_ACTIVE_REQUEST, getPlanGroupsGraphedArchived),

    takeLatest(EnterpriseTypes.ENTERPRISE_REQUEST, getCredential),
    takeLatest(EnterpriseTypes.ENABLE_REQUEST, enableRequest),
    takeLatest(EnterpriseTypes.GENERATE_REQUEST, generateRequest),
    takeLatest(EnterpriseTypes.DISABLE_REQUEST, disableRequest),

    takeLatest(IndexingTypes.INDEX_SUBSCRIBERS_REQUEST, indexSubscribers),
    takeLatest(IndexingTypes.INDEX_PAYMENTS_REQUEST, indexPayments),
    takeLatest(IndexingTypes.INDEX_SIGNUP_REQUEST, indexSignupRequest),
    takeLatest(IndexingTypes.INDEX_CUSTOMERS_REQUEST, indexCustomers),
    takeLatest(IndexingTypes.INDEX_PAYMENT_SCHEDULES_REQUEST, indexPaymentSchedules),
    takeLatest(IndexingTypes.INDEX_PLANS_REQUEST, indexPlans),

    takeLatest(CountriesTypes.IDENTITY_DOCUMENT_REQUEST, getIdentityDocument),
    takeLatest(CountriesTypes.IDENTITY_DOCUMENTS_COUNT_REQUEST, getIdentityDocumentsCount),
    takeLatest(CountriesTypes.COUNTRIES_REQUEST, getCountries),
    takeLatest(CountriesTypes.IDENTITY_DOCUMENTS_REQUEST, getIdentityDocuments),
    takeLatest(CountriesTypes.UPDATE_DOCUMENT_REQUEST, updateIdentityDocument),
    takeLatest(CountriesTypes.CREATE_DOCUMENT_REQUEST, createIdentityDocument),
    takeLatest(CountriesTypes.DISABLE_IDENTITY_DOCUMENT_REQUEST, disableIdentityDocument)
  ]);
}
