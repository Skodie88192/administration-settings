import { combineReducers } from "redux";
import settings from "./settings/Reducer";
import chatReducer from "./chats/Reducer";
import notesReducer from "./notes/Reducer";
import contactReducer from "./contacts/";
import maincontactReducer from "./contacts/Contacts";
import emailReducer from "./email/";
import maintodoReducer from "./todos/Todos";
import todoReducer from "./todos/";

const Reducers = combineReducers({
  settings,
  chatReducer,
  contactReducer,
  emailReducer,
  notesReducer,
  todoReducer,
  maintodoReducer,
  maincontactReducer,
  settlements: require('./settlements/settlements-reducer').reducer,
  payments: require('./scheduled-payments/payments-reducer').reducer,
  business: require('./business/business-reducer').reducer,
  paymentTrackRange: require('./payment-track/payment-track.reducer').reducer,
  payoutChannels: require('./payout-channel/payoutchannel-reducer').reducer,
  subscriptions: require('./subscriptions/subscriptions-reducer').reducer,
  planGroup: require('./plan-group/plan-group-reducers').reducer,
  enterprise: require('./enterprise/enterprise-reducers').reducer,
  indexing: require('./indexing/indexing-reducers').reducer,
  countries: require('./countries/countries-reducers').reducer,
});

export default Reducers;
