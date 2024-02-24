import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import LoadingContainer from "../Components/Common/LoadingContainer/LoadingContainer";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../modules/auth/redux/auth/auth.selectors";

const NotAuthenticated = () => {
   const navigate = useNavigate();

   const [loading, setLoading] = useState<boolean>(true);
   // const authState = useStore()[0];
   const authToken = useSelector(selectAuthToken);

   useEffect(() => {
      setLoading(false)
      if (authToken) {
         navigate("/", { replace: true });
      } else {
         setLoading(false);
      }
   }, [authToken, navigate]);

   if (loading) {
      return <LoadingContainer fullHeight />;
   }

   return <Outlet />;
};

export default NotAuthenticated;
