import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Typography, CircularProgress } from "@mui/material";

const GET_SHOP_NAME = gql`
  query {
    shop {
      name
    }
  }
`;

const HomePage = () => {
  // Use the useQuery hook to fetch data from the GraphQL API
  const result = useQuery(GET_SHOP_NAME);
  const { loading, error, data } = useQuery(GET_SHOP_NAME);

  // Handle loading state
  if (loading) {
    return <CircularProgress />;
  }

  // Handle error state
  if (error) {
    return (
      <Typography variant="h6" color="error">
        Error: {error.message}
      </Typography>
    );
  }

  // Render the shop's name
  return (
    <Typography variant="h4" component="div">
      Welcome to {data.shop.name}
    </Typography>
  );
};

export default HomePage;
