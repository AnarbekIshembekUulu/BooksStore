import React from "react";
import { styled } from "@mui/system";
import { Card, Typography } from "@mui/material";

const BookCard = ({ title, description, imageUrl }) => {
  // console.log(imageUrlk);
  return (
    <StyledCard>
      <ImageBook alt={title} src={imageUrl} />
      <CardContentBook>
        <TypographyTitle variant="h6" component="div">
          {title}
        </TypographyTitle>
        <TypographyDescription variant="body2" color="text.secondary">
          {description}
        </TypographyDescription>
      </CardContentBook>
    </StyledCard>
  );
};

export default BookCard;

const StyledCard = styled(Card)({
  background: "red",
  borderRadius: "1rem",
  padding: "0.5rem",
  marginBottom: "10px",
  boxShadow: "0 5px 5px rgba(111, 144, 150, .6)",
  transition: ".5s",
  textAlign: "center",
  position: "relative",
  "&: hover": {
    transform: "scale(1.1)",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
});

const ImageBook = styled("img")({
  width: "100%",
  height: "200px",
  borderRadius: "1rem 1rem 0 0",
});

const CardContentBook = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const TypographyTitle = styled(Typography)({
  fontSize: "0.875rem",
  marginBottom: "2rem",
});

const TypographyDescription = styled(Typography)({
  position: "absolute",
  bottom: "0.625rem",
  left: "10px",
  right: "10px",
  background: "blue",
  color: "#345345",
  fontSize: "0.8125rem",
  fontWeight: "bold",
  padding: "0.2rem",
  borderRadius: "0 0 0.5rem 0.5rem",
});
