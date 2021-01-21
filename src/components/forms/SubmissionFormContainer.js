import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
    const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {/* Submit A Quote Header  */}
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Submit A Quote
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Submit A Quote with Author Attribution</DialogTitle>
        <DialogContent>
          {/* Submit A Quote Text Input Field */}
          <TextField
            autoFocus
            margin="dense"
            id="quoteText"
            label="Quote Text"
            fullWidth
          />
          {/* Author Text Input Field */}
          <TextField
          autoFocus
          margin="dense"
          id="author"
          label="Author"
          fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Submit Quote
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}