import { makeStyles } from '@material-ui/core/styles';
import TestComponent from './test.component';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex'
    }
});

const TestContainer = ({children}) => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            {children}
        </div>
    )
}

export default TestContainer;