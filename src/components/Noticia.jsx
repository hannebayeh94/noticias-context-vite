import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            height={"250"}
            image={urlToImage}
            component={"img"}
            alt={`imagen de la noticia ${title}`}
          />
        )}

        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>

          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </CardContent>

        <CardActions>
          <Link href={url} target="_blank" color="secondary" textAlign={'center'} variant="button" width={"100%"} sx={{
            textDecoration: 'none',
          }}>
            Ver noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
