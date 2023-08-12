import styled from "styled-components";

import { ButtonBase } from "@mui/material";

export const ButtonStyled = styled(ButtonBase)`
   &.MuiButtonBase-root {
      width: 100%;
      border-radius: 7px;
      text-transform: initial;
      padding: 14px;
      background-color: var(--PrimaryColor);
      font-weight: 600;
      font-size: 15px;
      color: white;
   }

   &.Mui-disabled {
      background-color: var(--greyBg);
      color: var(--textColor);
   }
`;
