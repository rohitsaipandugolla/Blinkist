import React ,{useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Button from '@material-ui/core/Button';
import TextField from '../../atoms/TextField';
import { makeStyles } from '@material-ui/core/styles';

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

 

export default function DraggableDialog({open,handleClose,getBookDetails}) {
    const classes = useStyles();
    const [bookId, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');
    const [image,setImage]=useState('');

    const handleCloseDialog = () => {
        handleClose(false);
    };

    const sendBookDetails=()=>{
        if(title!=='' && bookId!=='' && author!=='' && category!==''&& time!==''){
            let newBook=[bookId,title,author,time,category,image]
            getBookDetails(newBook);
            console.log(newBook);
        }
    }

return(
    <Dialog
        open={open}
        PaperComponent={PaperComponent}
        className={classes.popup}
        aria-labelledby="draggable-dialog-title"
      >
          <div style={{display:'flex',columnGap:'395px'}}>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Add Book
        </DialogTitle>
        <DialogTitle onClick={handleCloseDialog} style={{ cursor: 'pointer' }} id="draggable-dialog-title">
          X
        </DialogTitle>
        </div>
        <DialogContent>
     
    <TextField value='' name="BookId" variant="outlined" onChange={event => { setId(event.target.value); }} /><br></br>
    <TextField value='' name="Title" variant="outlined" onChange={event => { setTitle(event.target.value); }} /><br></br>
    <TextField value='' name="Author" variant="outlined" onChange={event => { setAuthor(event.target.value); }} /><br></br>
    <TextField value='' name="Time" variant="outlined" onChange={event => { setTime(event.target.value); }} /><br></br>
    <TextField value='' name="Category" variant="outlined" onChange={event => { setCategory(event.target.value); }} /><br></br>
    <TextField value='' name="Image" variant="outlined" onChange={event => { setImage(event.target.value); }} /><br></br>
    
    <Button onClick={sendBookDetails}>Submit</Button>
    </DialogContent>
      </Dialog>
);
  }

