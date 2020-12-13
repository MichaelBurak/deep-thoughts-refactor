import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';

export default function GeneratorBtn() {

  return (
    <div>
      <div>
        <Button variant="contained" size="large" color="primary" startIcon={<MessageIcon />} >
          Generate a New Quote
        </Button>
      </div>
      
    </div>
  );
}