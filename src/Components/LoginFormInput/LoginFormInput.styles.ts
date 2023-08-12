import styled from 'styled-components';
import { InputBase } from '@mui/material';

export const InputStyled = styled(InputBase)`
    width: 100%;
    padding: 11px 15px;
    border: 1px solid var(--PrimaryColor);
    height: 45px;
    border-radius: 7px;

    input {
        font-size: 15px;
    }

    .MuiIconButton-root {
        padding: 0;
    }

    &.error {
        border: 1px solid red;
    }
`;

