import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../atoms/logo.svg";
import Button from "../../atoms/Button";
import MyLibrary from "../MyLibrary";
import CategoryBooks from "../CategoryBooks";
import { ImBook, ImBooks } from "react-icons/im";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DraggableDialog from '../../molecules/DialogPop';
import theme from "../../../themes/index";
import LoginButton from "../../atoms/LoginButton";
import Profile from '../../molecules/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import BookCards from '../BookCards';

const data1 = require("../../../data/books.json");
const category=require("../../../category/categories.json");
const useStyles = makeStyles(() => ({
  root: {
    margin: "250px",
    marginTop: theme.spacing(4.375),
  },
  category:{
    gridTemplateColumns: "auto auto auto",
    display:"grid",
  },
  font: {
    fontWeight: "600",
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  typographyStyle: {
    color: "#03314b",
    fontWeight: "500",
  },
  book: {
    marginTop: "100px",
  },
  explore:{
    display:"contents",
  },
  dropdown:{
    fontSize:"xx-large",
  },
  btn:{
    marginRight: "29px",
    color: "#03314b",
    fontWeight:"bold",
  },
  header:{
    color: "#0365f2",
    fontWeight:"500",
    fontSize:"1rem",
  },
  lib:{
    marginLeft:"50px",
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
  },open: {
    display: "block",
    height: "fit-content",
    backgroundColor: "#f1f6f4",
    zIndex: "315",
    position: "fixed",
    width: "150vh",
    marginTop: ""
  },
  close: {
    display: "none",
  },
  icon:{
    marginLeft: "-35px",
    marginTop: "18px",
  }
}));
var newLibraryBooks=[];
var newTwo=[];

const Modal = ({ handleClose, show, children }) => {
  const classes = useStyles();
  console.log(show);
  return (
    <div className={show ? classes.open : classes.close}>
      <div className="modal-container">{children}</div>
    </div>
  );
};

function TopNavBar() {
  const classes = useStyles();
  const [library, setLibrary] = useState(true);
  const [categoryBooks, setCategoryBooks] = useState(data1);
  const [showAllBooks,setBooks]=useState(false);
  const [libraryBooks,setLibraryBooks]=useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [categorySelected,setCategory]=useState([]);
  const { user, isAuthenticated } = useAuth0();

  // if(!isAuthenticated){
  //   setLibrary(false);
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (close) => {
    setOpen(close);
  };

  const getBookDetails=(book)=>{
    let newBook={id:book[0],title:book[1],author:book[2],time:book[3],category:book[4],image:book[5]}
    newLibraryBooks.push(newBook);
    setLibraryBooks(libraryBooks=>[...libraryBooks,newBook]);
    newTwo.push(newBook);
    for(let j=0;j<newTwo.length;j++){
    setCategoryBooks(categoryBooks=>[...categoryBooks,newTwo[j]]);
    }
  };

  

  function myLibrary() {
    setLibrary(true);
    // setExplore(false);
    setButtonPopup(false);
  }


  const getExploreCategory = bookId => {
   let libraryBook=data1.find((book)=>book.id===bookId);
   newLibraryBooks.push(libraryBook);
   setLibraryBooks(newLibraryBooks);
  };

   function explore() {
    // setExplore(true);
     setBooks(!showAllBooks);
  }

  const buttonClick = (category) => {
    let newCategoryBooks = categoryBooks.filter((book) => book.category === category);
    setCategory(newCategoryBooks);
    setBooks(!showAllBooks);
    setButtonPopup(true); 
    setLibrary(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2} style={{marginTop:"2.5px"}}>
          <img src={logo} className={classes.logo} alt="Blinkist logo" />
        </Grid>
        <Grid item xs={6} className={classes.explore} onClick={explore}>
          <Button className={classes.btn} title="Explore"> </Button>
            {showAllBooks?<ExpandLessIcon className={classes.icon}/>:<ExpandMoreIcon className={classes.icon}/>}
        </Grid>
        {isAuthenticated && <Grid item xs={2} onClick={myLibrary} className={classes.lib}>
          <Button title="My Library" className={classes.btn}/>
        </Grid>}
        {isAuthenticated && <Grid item xs={2} >
        <div>
        <Button title="Add Book" className={classes.btn} onClick={handleClickOpen}/>
      <DraggableDialog open={open}  handleClose={(open)=>handleClose(open)} getBookDetails={(book)=>getBookDetails(book)}/>
    </div>
        </Grid>}
        <Grid item xs={2} className={classes.lib}>
           <LoginButton />
        </Grid>
      </Grid>
      <Profile />
      <Modal  class={classes.modal} show={showAllBooks}>
        <div>
          <h3 className={classes.header}>Explore by category</h3>
          <div className={classes.divider}></div>
          <div className={classes.category}>
          {category.map((category) => {
            return (
              <div>
             <ImBook />
              <Button onClick={() => buttonClick(category.category)} title={category.category} />
              </div>
            );
          })}
          </div>
        </div>
      </Modal>
      {buttonPopup  &&<CategoryBooks getExploreCategory={(id)=>getExploreCategory(id)}  booksList1={categorySelected} />}
      {!isAuthenticated && !buttonPopup && <BookCards booksList={categoryBooks}/>}
      {library && !open && isAuthenticated && <MyLibrary booksList={libraryBooks}/>}
    </div>
  );
}
export default TopNavBar;

