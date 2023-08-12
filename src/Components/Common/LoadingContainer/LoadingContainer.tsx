import { CircularProgress } from '@mui/material';
import { Container } from './LoadingContainer.styles';

type Props = {
    fullHeight?: boolean;
    overlay?: boolean;
};

const LoadingContainer = ({ fullHeight, overlay }: Props) => {
    const classes: string[] = [];
    if (fullHeight) classes.push('full-height');
    if (overlay) classes.push('overlay');

    return (
        <Container className={classes.join(' ')}>
            <CircularProgress />
        </Container>
    );
};

export default LoadingContainer;
