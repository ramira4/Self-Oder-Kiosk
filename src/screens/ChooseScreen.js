import { Box, Card, CardActionArea, CardContent, CardMedia, Fade, Typography } from '@material-ui/core';
import React, { useContext }  from 'react';
import Logo from '../components/logo';
import { useStyles } from '../styles';
import { Store } from '../store';
import { setOrderType} from '../actions';


export default function ChooseScreen(props) {
    const styles = useStyles();
    const {dispatch} = useContext(Store);

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push('/order');
      };

      
    return (
        <Fade in={true}>
        <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
            <Logo large></Logo>
            <Typography component="h3" variant= "h3" className={styles.ceter} gutterBottom>
                Where will you be eating today?
            </Typography>
            <Box className={styles.cards}>
                <Card className= {[styles.card, styles.space]}>
                    <CardActionArea onClick={()=> chooseHandler('Eat in')}>
                    <CardMedia component="img" alt= "Eat in" image="/images/eatin.png"
                        className={styles.media}/>
                        <CardContent>
                        <Typography gutterBottom variant="h4" color="textPrimary" component="p">
                        Eat In 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className= {[styles.card, styles.space]}>
                    <CardActionArea onClick={()=> chooseHandler('Take Out')}>
                    <CardMedia component="img" alt= "Take out" image="/images/takeout.png"
                        className={styles.media}/>
                        <CardContent>
                        <Typography gutterBottom variant="h4" color="textPrimary" component="p">
                        Take Out
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
        </Box>
        </Fade>
    );
}
