import React from "react";
import { InputBaseProps } from "@mui/material";
import styles from "./LoginFormInput.module.css";
import { InputStyled } from "./LoginFormInput.styles";

interface Props extends InputBaseProps {
   errorMessage?: string;
}

const LoginFormInput = React.forwardRef<React.Ref<unknown> | undefined, Props>(
   ({ errorMessage, ...props }, ref) => (
      <div className={`${styles.wrapper}`}>
         <InputStyled ref={ref} {...props} />
         {/* {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null} */}
      </div>
   )
);

export default LoginFormInput;
