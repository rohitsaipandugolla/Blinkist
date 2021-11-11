import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeSearch from "../../molecules/SearchInput";
import BookCard from "../../molecules/BookCard";
import { Grid } from "@material-ui/core";
const data1 = require("../../../data/books.json");

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
  },
  tab: {
    color: "#22C870",
  },
  inactive: {
    color: "#6D787E",
  },
  font: {
    fontSize: "2.25rem",
    lineHeight: "2.8125rem",
    fontFamily: "arial",
    color: "#03314B",
    marginBottom: "0",
    fontWeight: theme.typography.fontWeight,
  },
  popup: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    backgroundColor: "white",
  },
  popupInner: {
    position: "absolute",
    left: "25%",
    right: "25%",
    top: "25%",
    bottom: "25%",
    margin: "auto",
    background: "white",
  },
  open: {
    display: "block",
    height: "43vh",
    backgroundColor: "#f1f6f4",
    zIndex: "315",
    position: "fixed",
    width: "150vh",
    marginTop: ""
  },
  close: {
    display: "none",
  },
  divider: {
    borderBottom: "1px solid",
  },
  modal:{
    backgroundColor:"#ddd",
    position: "fixed",
    width: "200px",
    height: "100px",
    left: "50%",
    top: "0%",
    marginLeft: "-100px",
  }
}));

export default function CategoryBooks({  getExploreCategory,booksList1}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const filterCategory = (bookId) => {
    getExploreCategory(bookId);
  };

  return (
    <div>
       <div style={{marginTop:"75px"}}>
        <HomeSearch 
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {booksList1
          .filter((book) => {
            if (searchTerm === "") {
              return book;
            } else if (
              book.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return book;
            } else if (
              book.author.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return book;
            }
          })
          .map((book) => {
            return (
              <Grid item xs={4}>
                <div>
                  <BookCard
                   onClick={()=>filterCategory(book.id)}
                    buttonTitle="Add to Library"
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    time={book.time}
                    image={book.image}
                  />
                </div>
              </Grid>
            );
          })}
          </div>
      </div>
    </div>
  );
}