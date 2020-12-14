import { makeStyles } from '@material-ui/core/styles';

import ISLAND_DATA from './islandData';

import CardImage from '../../components/card-image/card-image.component';
import useWindowPosition from '../../hooks/useWindowPosition';

const useStyles = makeStyles( theme => ({
    root: {
        minHeight: '100vh',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    }
}));

const HomePage = () => {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    const islandData = Object.keys(ISLAND_DATA);
    return (
        <div className={classes.root} id='homepage'>
            {
                islandData.map( island => <CardImage key={ISLAND_DATA[island]['name']} island={ISLAND_DATA[island]} checked={checked}/>)
            }
        </div>
    )
};

export default HomePage;