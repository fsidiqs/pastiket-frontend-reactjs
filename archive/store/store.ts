import { useState, useEffect } from "react";
// import { AuthStoreActions } from "../../types/auth.types";
// import { User } from "../../types/user.types";

export interface AuthState {
   publicToken: string | null;
   authToken: string | null;
   user: User | null;
   // showOnboarding: boolean;
}

export type DispatchFunction = (
   actionIdentifier: string,
   payload?: any
) => void;

// export type State = Record<string, any>;

// type Action = {
//    type: string;
//    payload?: any;
// };

let globalState: AuthState;
let listeners: ((state: AuthState) => void)[] = [];
let actions: any = {};

export const useStore = (): [AuthState, DispatchFunction] => {
   const [state, setState] = useState<AuthState>(globalState);

   const dispatch = (actionIdentifier: string, payload?: any): void => {
      const newState = actions[actionIdentifier](globalState, payload);
      globalState = { ...globalState, ...newState };

      for (const listener of listeners) {
         listener(globalState);
      }
   };

   useEffect(() => {
      listeners.push(setState);
      return () => {
         listeners = listeners.filter((li) => li !== setState);
      };
   }, [setState]);
   return [globalState, dispatch];
};

export const initStore = (
   userActions: AuthStoreActions,
   initialState: AuthState
): void => {
   if (initialState) {
      globalState = { ...globalState, ...initialState };
   }
   actions = { ...actions, ...userActions };
};
