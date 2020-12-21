  import React from 'react';
  import Button from '@material-ui/core/Button';
  import TextField from '@material-ui/core/TextField';
  import Dialog from '@material-ui/core/Dialog';
  import DialogActions from '@material-ui/core/DialogActions';
  import DialogContent from '@material-ui/core/DialogContent';
  import DialogContentText from '@material-ui/core/DialogContentText';
  import DialogTitle from '@material-ui/core/DialogTitle';
  import { useForm, Controller } from "react-hook-form";
  import axios from 'axios'
import api from '../../api';

  export default function SimpleSubmission() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = (data) => {
  api.postQuote( data.QuoteText, data.quoteAuthor)
    .then((response) => {
      debugger 
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Submit A Quote
        </Button>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

    <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">Submit A Quote with Author Attribution</DialogTitle>
          <DialogContent>
            <Controller as={TextField} name="QuoteText" control={control} defaultValue="" label="Quote Text" />
            <Controller as={TextField} name="QuoteAuthor" control={control} defaultValue="" label="Author"/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
            <Button type="submit" onClick={onSubmit} variant="contained" color="secondary">
              Submit Quote
            </Button>
          </DialogActions>
</form>
        </Dialog>
      </div>
    );
  }