import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";

import LoadingContainer from "../Components/Common/LoadingContainer/LoadingContainer";
// import { logout } from "../services";
import { useSnackbar } from "notistack";
import jwt_decode from "jwt-decode";
// import { useStore } from "../modules/auth/store/store";
import { UserJWT } from "../modules/types/user.types";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken } from "../modules/auth/redux/auth/auth.selectors";

const Authenticated = () => {
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();
   const [loading, setLoading] = useState<boolean>(true);
   const [authenticated, setAuthenticated] = useState<boolean>(true);
   // const [authState, dispatchAuthState] = useStore();
   const authToken = useSelector(selectAuthToken);

   // useIdleTimer({
   //    timeout: 1000 * 60 * 15,
   //      onIdle: (event) => {
   //         if (!authState.authToken) return;
   //         const decoded = jwt_decode<UserJWT>(authState.authToken);
   //         logout({
   //            request: {
   //               email: decoded.data.email,
   //            },
   //            onSuccess: () => {
   //               dispatchAuthState("REMOVE_AUTH_TOKEN");
   //            },
   //            onError: () => {
   //               dispatchAuthState("REMOVE_AUTH_TOKEN");
   //            },
   //         });
   //      },
   //    crossTab: {
   //       emitOnAllTabs: true,
   //       type: "localStorage",
   //    },
   //    debounce: 1000,
   // });

   useEffect(() => {
      if (!authToken) {
         setAuthenticated(false);
         setLoading(false);
      } else {
         const decoded = jwt_decode<UserJWT>(authToken);
       
         setLoading(false);
      }
   }, [authToken, dispatch, enqueueSnackbar]);
   // aspiron debugger
   console.log("aspiron before loading");
   console.log();
   // aspiron debugger
   if (loading) {
      return <LoadingContainer fullHeight />;
   }
   // aspiron debugger
   console.log("aspiron before authenticated");
   console.log();
   // aspiron debugger
   // TODO! uncomment this line
   // if (!authenticated) {
      // return <Navigate to="/login" replace />;
   // }

   return <Outlet />;
};

export default Authenticated;
