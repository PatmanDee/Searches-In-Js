import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
    },
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(2),
    },
  },
}));

function BlogTravelPost({ title, content, featuredImage }) {
  const classes = useStyles();
  
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} md={4}>
        <img src={featuredImage} alt="featured" className={classes.image} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <Typography variant="body1" component="div">
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}
