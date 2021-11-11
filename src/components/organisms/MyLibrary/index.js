import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BookCard from "../../molecules/BookCard";
import TypographyComponent from "../../atoms/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import theme from "../../../themes/index";



const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "white",
  },
  tab: {
    color: "#22C870",
  },
  inactive: {
    color: "#6D787E",
  },
  tabs:{
    marginTop:"30px",
  },
  font: {
    fontSize: "2.25rem",
    lineHeight: "2.8125rem",
    fontFamily: "arial",
    color: "#03314B",
    marginBottom: "0",
    fontWeight: "bold",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }
var newList1 = [];
export default function MyLibrary({ booksList} ) {
  var allBooks=[];
  for(let i=0;i<booksList.length;i++){
    allBooks.push(booksList[i]);
  }
  console.log(allBooks);
  var newbooks = [ {
    "id": 30,
    "title": "Diary of Young GIrl",
    "author": "Anne Frank",
    "time": "19",
    "category": "Autobiography",
    "image": "https://images.blinkist.io/images/books/601d347c6cee0700078f5ecd/1_1/470.jpg",
},
{
    "id": 40,
    "title": "Killing the Mob",
    "author": "Martin Dugard",
    "time": "10",
    "category": "History",
    "image": "https://images.blinkist.io/images/books/610d461d6cee070007427694/1_1/470.jpg",
}];

  if (newList1.length > 0) {
    let newbooks1 = booksList.filter((val) => !newList1.includes(val));
    for (let i = 0; i < newbooks1.length; i++) {
      newbooks.push(newbooks1[i]);
    }
  } else {
    for (let i = 0; i < booksList.length; i++) {
      newbooks.push(booksList[i]);
    }
  }
 
  allBooks.push(newbooks[0]);
  allBooks.push(newbooks[1]);
  const [readingBooksList, setBooksList] = useState(newbooks);
  const [finishedBooksList, setFinishedBooksList] = useState(newList1);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  let i = 0;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function changeBookStatus(bookId) {
    let newReadingBooks = readingBooksList.filter((book) => book.id !== bookId);
    setBooksList(newReadingBooks);
    let finishedBook = allBooks.find((book) => book.id === bookId);
    if (!finishedBooksList.includes(finishedBook)) {
      setFinishedBooksList((finishedBooksList) => [
        ...finishedBooksList,
        finishedBook,
      ]);
    }
    newList1.push(finishedBook);
  }

  function changeFinishedBooksStatus(bookId) {
    let newFinishedBooks = finishedBooksList.filter(
      (book) => book.id !== bookId
    );
    setFinishedBooksList(newFinishedBooks);
    let readAgainBook = allBooks.find((book) => book.id === bookId);
    let newLibraryBooks = [...readingBooksList];
    if (!newLibraryBooks.includes(newLibraryBooks)) {
      newLibraryBooks.push(readAgainBook);
    }
    setBooksList(newLibraryBooks);
    newList1 = [...newFinishedBooks];
  }

  var newBooks = [];
  if (finishedBooksList.length > 0) {
    newBooks = [...new Set(finishedBooksList.map((book) => book))];
  } else {
    newBooks = [...finishedBooksList];
  }
  var newReads = [];
  if (readingBooksList.length > 0) {
    newReads = [...new Set(readingBooksList.map((book) => book))];
  } else {
    newReads = [...readingBooksList];
  }
  
  return (
    <div style={{marginTop:"60px"}}>
      <TypographyComponent
        variant="alphaHeader3"
        className={classes.font}
        children="My Library"
      />
      <Tabs
        className={classes.tabs}
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab
          label="Currently reading"
          className={value === 0 ? classes.tab : classes.inactive}
        />
        <Tab
          label="Finished"
          className={value === 1 ? classes.tab : classes.inactive}
        />
      </Tabs>
      <TabPanel value={value} key={value} index={value}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {value === 0 && newReads
              ? newReads.map((book) => {
                  console.log(finishedBooksList.length);
                  return (
                    <Grid item xs={4}>
                      <div>
                        <BookCard
                          onClick={() => changeBookStatus(book.id)}
                          key={book.id}
                          buttonTitle="Finished Reading"
                          title={book.title}
                          author={book.author}
                          time={book.time}
                          image={book.image}
                        />
                      </div>
                    </Grid>
                  );
                })
              : newBooks.map((book) => {
                  return (
                    <Grid item xs={4}>
                      <div>
                        <BookCard
                          onClick={() => changeFinishedBooksStatus(book.id)}
                          key={book.id}
                          buttonTitle="Read Again"
                          title={book.title}
                          author={book.author}
                          time={book.time}
                          image={book.image}
                        />
                      </div>
                    </Grid>
                  );
                })}
          </Grid>
        </div>
      </TabPanel>
    </div>
  );
}
