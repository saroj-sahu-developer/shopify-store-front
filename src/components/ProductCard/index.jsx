import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GET_PRODUCT = gql`
  query getProduct($productId: String) {
    product(handle: $productId) {
      title
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
          }
        }
      }
    }
  }
`;

const ProductCard = ({
  productId = "gm-womens-ins-big-square-rim-round-face-polarized-light-mens-sunglasses",
}) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });

  if (loading) return <CircularProgress />;
  if (error)
    return (
      <Typography variant="h6" color="error">
        Error: {error.message}
      </Typography>
    );

  const product = data.product;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ position: "relative" }}>
        <Slider {...settings}>
          {product.images.edges.map((image, index) => (
            <CardMedia
              component="img"
              height="140"
              image={image.node.url} // Ensure 'url' is used here
              alt={`Product image ${index + 1}`}
              key={index}
            />
          ))}
        </Slider>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {product.priceRange.minVariantPrice.amount}{" "}
          {product.priceRange.minVariantPrice.currencyCode}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
