import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      background: 'rgba(0,0,0,0.5)',
      margin: '20px'
    },
    media: {
      height: 280,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#fff'
    },
    desc: {
        fontFamily: 'Nunito',
        color: '#ddd',
        fontSize: '1rem'
    }
});

const CardImage = ({island, checked}) => {
    const classes = useStyles();
    const { name, imageUrl, description } = island;

    return (
        <Collapse 
            in={checked}
            {...(checked ? { timeout: 1500 } : {})}
        >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    component="img"
                    image={imageUrl}
                    title={name + ' island'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Collapse>
    );
};

export default CardImage;