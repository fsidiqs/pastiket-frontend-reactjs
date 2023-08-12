import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
    }
    &.full-height {
        height: 100vh;
    }
`;
