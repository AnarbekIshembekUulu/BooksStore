import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import "font-awesome/css/font-awesome.min.css";
import BookCard from "./Card";

const Main = () => {
  const [search, setSearch] = useState("");
  const [dataBook, setDataBook] = useState([]);
  console.log(dataBook);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDTKLH3ud-DH6ncgVRJITjDMrgLsKmNOyI"
        )
        .then((res) => setDataBook(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  const searchBookClick = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyDTKLH3ud-DH6ncgVRJITjDMrgLsKmNOyI"
      )
      .then((res) => setDataBook(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div>
          <Heading>Anyone who reads books is never bored</Heading>
        </div>
      </div>
      <div>
        <HeaderForInput>find your book</HeaderForInput>
        <SearchDiv>
          <TextField
            style={{ background: "#fff", borderRadius: "5px" }}
            id="filled-basic"
            label="Enter your book name"
            variant="filled"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchBook}
          />
          <Button variant="contained" onClick={searchBookClick}>
            search
          </Button>
        </SearchDiv>
      </div>
      <Container>
        {dataBook.map((elem) => (
          // console.log(elem.saleInfo.listPrice.amount),
          <BookCard
            title={elem.volumeInfo.title}
            description={elem.saleInfo.country}
            imageUrl={elem.volumeInfo.imageLinks.smallThumbnail}
          />
        ))}
      </Container>
    </div>
  );
};

export default Main;

const Heading = styled("h1")({
  textTransform: "uppercase",
  color: "#fff",
});

const SearchDiv = styled("div")({
  width: "20%",
  height: "6%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
});

const HeaderForInput = styled("h2")({
  textTransform: "uppercase",
  color: "#fff",
});

const Container = styled("div")({
  width: "65%",
  margin: "0 auto",
  marginTop: "25px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 0.5fr))",
  gridGap: "20px",
  boxSizing: "border-box",
});
