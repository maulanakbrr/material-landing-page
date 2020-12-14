import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpg'} )`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
