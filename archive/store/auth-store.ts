// import { AuthState, initStore } from "./store";
// // import { AuthStoreActions } from "../../types/auth.types";
// // import { User } from "../../types/user.types";

// const initialState: AuthState = {
//    publicToken: null,
//    authToken: null,
//    user: null,
//    // showOnboarding: false,
// };

// const configureStore = () => {
//    const actions: Authstoreaction = {
//       SET_AUTH_TOKEN: (currState: AuthState, token: string): AuthState => {
//          // aspiron debugger
//          console.log("aspiron inserted authtoken");
//          console.log(token);
//          // aspiron debugger
//          return { ...currState, authToken: token };
//       },
//       REMOVE_AUTH_TOKEN: (currState: AuthState): AuthState => {
//          let updatedUser: User | null;
//          if (currState.user !== null) {
//             updatedUser = {
//                ...currState.user,
//                email: "",
//             };
//          } else {
//             updatedUser = null;
//          }
//          return {
//             ...currState,
//             authToken: null,
//             user: updatedUser,
//          };
//       },
//    };
//    initStore(actions, initialState);
// };

// export default configureStore;
