import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import WelcomeLogo from "../../Assets/logo.png";

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { login } from "../../modules/auth/auth.services";

import LoginFormInput from "../../Components/LoginFormInput/LoginFormInput";
// import { useStore } from "../../modules/auth/store/store";
import { useDispatch } from "react-redux";

import { ResponseType } from "../../modules/auth/services";
import { useSnackbar } from "notistack";
import { FormControl, Grid, IconButton, InputAdornment } from "@mui/material";
import Validations from "../../utils/validation";
import { colors } from "../../utils/colors";
import Button from "../../Components/Common/Button/Button";
import { setAuthToken } from "../../modules/auth/redux/auth/auth.actions";
type LoginFormInputs = {
   email: string;
   password: string;
};

const LoginPage: React.FC = () => {
   // const dispatch = useStore()[1];
   const dispatch = useDispatch();
   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

   const {
      control,
      watch,
      handleSubmit,
      formState: { errors, isDirty, isValid },
      setError,
   } = useForm<LoginFormInputs>({ mode: "onChange" });
   const [showPassword, setShowPassword] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(false);
   const [isValidLength, setIsValidLength] = useState<boolean>(false);

   const loginHandler: SubmitHandler<LoginFormInputs> = (state) => {
      closeSnackbar();

      login({
         request: {
            email: state.email,
            password: state.password,
         },
         onRequest: (state) => setLoading(state),
         onSuccess: ({ data }) => {
           
            dispatch(setAuthToken(data.auth_token));
         },
         onError: ({ type, invalid_args, message }) => {
            switch (type) {
               case ResponseType.USER_NOT_FOUND:
                  setError("email", {
                     // message: t("validation.email_not_registered"),
                  });

                  break;
               case ResponseType.WRONG_PASSWORD:
                  setError("password", {
                     // message: t("validation.wrong_password"),
                  });

                  break;
               default:
                  enqueueSnackbar(message, { variant: "error" });
            }
         },
      });
   };

   useEffect(() => {
      const subscription = watch((value) => {
         if ((value.email?.length ?? 0) < 8) {
            setIsValidLength(false);
         } else if ((value.password?.length ?? 0) < 8) {
            setIsValidLength(false);
         } else {
            setIsValidLength(true);
         }
      });
      return () => subscription.unsubscribe();
   }, [watch]);

   return (
      <div className={styles.wrapper}>
         <Grid container justifyContent="center">
            <Grid item md={5} lg={4} style={{ maxWidth: 670 }}>
               <div className={styles.content}>
                  <div className={styles.logoContainer}>
                     <img
                        src={WelcomeLogo}
                        alt="a Name"
                        className={styles.logo}
                     />
                     <h3 className="">Login</h3>
                  </div>
                  <form method="post" onSubmit={handleSubmit(loginHandler)}>
                     <Controller
                        name="email"
                        defaultValue="fajar@mindtera.com"
                        control={control}
                        rules={{
                           required: {
                              value: true,
                              message: "email required",
                           },
                           pattern: {
                              value: Validations.email,
                              message: "invalid email",
                           },
                        }}
                        render={({ field }) => (
                           <FormControl className={styles.formControl}>
                              <LoginFormInput
                                 {...field}
                                 placeholder="Email"
                                 type="email"
                                 errorMessage={errors.email?.message}
                                 className={styles.inputWrapper}
                              />
                           </FormControl>
                        )}
                     />
                     <Controller
                        name="password"
                        defaultValue="12345678"
                        control={control}
                        rules={{
                           required: {
                              value: true,
                              message: "password required",
                           },
                        }}
                        render={({ field }) => (
                           <FormControl className={styles.formControl}>
                              <LoginFormInput
                                 className={styles.inputWrapper}
                                 {...field}
                                 placeholder="password"
                                 type={showPassword ? "text" : "password"}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton
                                          onClick={() =>
                                             setShowPassword(
                                                (prevState) => !prevState
                                             )
                                          }
                                       >
                                          {showPassword ? (
                                             <FaRegEyeSlash
                                                size={13}
                                                color={
                                                   errors.password
                                                      ? colors.red
                                                      : colors.purple
                                                }
                                             />
                                          ) : (
                                             <FaRegEye
                                                size={13}
                                                color={
                                                   errors.password
                                                      ? colors.red
                                                      : colors.purple
                                                }
                                             />
                                          )}
                                       </IconButton>
                                    </InputAdornment>
                                 }
                                 autoComplete="off"
                                 errorMessage={errors.password?.message}
                              />
                           </FormControl>
                        )}
                     />
                     <Button
                        type="submit"
                        // disabled={
                        //    !isDirty || !isValid || !isValidLength || loading
                        // }
                        loading={loading}
                     >
                        Login
                     </Button>
                  </form>
               </div>
            </Grid>
         </Grid>
      </div>
   );
};

export default LoginPage;
