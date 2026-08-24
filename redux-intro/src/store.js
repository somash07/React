// import { combineReducers, createStore } from "redux";

import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const initialStateCustomer = {
//   fullname: "",
//   nationalId: "",
//   createdAt: "",
// };

// function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.loan,
//         loanPurpose: action.payload.loanPurpose,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     default:
//       return state;
//   }
// }

// function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName": return {...state, fullname: action.payload.fullname}
//     default : return state
//   }
// }

// const rootReducer = combineReducers({accountReducer, customerReducer});

// const store= createStore(rootReducer)
// store.dispatch({ type: "account/deposit", payload: 500 });

// // action-creators
// function deposit(amount) {
//   return {
//     type: "account/deposit",
//     payload: amount,
//   };
// }
// function withdraw(amount) {
//   return {
//     type: "account/withdraw",
//     payload: amount,
//   };
// }
// function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       loan: amount,
//       loanPurpose: purpose,
//     },
//   };
// }
// function payLoan() {}

// function createCustomer(fullname, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullname: fullname,
//       nationalId: nationalId,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// function updateName(fullname) {
//   return {
//     type: "customer/updateName",
//     payload: fullname,
//   };
// }

// store.dispatch(createCustomer("somash", "7283794"))
// console.log(store.getState())

// store.dispatch(deposit(500))
// store.dispatch(requestLoan(500, "car"))
// console.log(store.getState())

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store 
