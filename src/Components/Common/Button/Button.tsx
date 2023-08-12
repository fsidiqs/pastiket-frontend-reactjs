import React from 'react';
import { CircularProgress } from '@mui/material';

import { ButtonStyled } from './Button.styles';

type Props = {
    type: 'button' | 'submit',
    children: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    loading?: boolean;
}

const Button: React.FC<Props> = ({ type, children, style, disabled, loading }) => (
    <ButtonStyled type={type} style={style} disabled={disabled}>
        {loading ? (
            <CircularProgress
                size={17}
                style={{
                    color: 'white'
                }}
            />
        ) : children}
    </ButtonStyled>
);

export default Button;
