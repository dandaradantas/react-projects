import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const book = (props) => {
 
    let item =  props.book;
    

    return (
        <Grid key={props.keyValue} item xs={4}>
            <Card>
                <CardActionArea>
                <CardMedia
                    image={item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : ''}
                    title={item.volumeInfo.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a href={ item.volumeInfo.canonicalVolumeLink}>{ item.volumeInfo.title}</a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { item.volumeInfo.description}
                    </Typography>
                    <p>Category: </p>
                    <Typography color="textSecondary" component="div">
                        {item.volumeInfo.categories ? 
                            item.volumeInfo.categories.map((category, index) => {
                            return (<p key={index}>{category}</p>);
                        }) : null}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default book; 