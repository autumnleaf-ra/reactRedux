import React from 'react';
import classes from './style.module.scss';
import { Button, TextField } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const FormInput = () => {
  return (
    <div className={classes.shortenWrapper}>
      <div className={classes.shortenInput}>
        <TextField
          className={classes.inputText}
          sx={{ input: { color: 'black' } }}
          placeholder="Shorten a link here..."
        />
        <Button variant="contained" className={classes.buttonShorten} onClick={() => handleClick()}>
          <FormattedMessage id="app_button_shorted" />
        </Button>
      </div>
    </div>
  );
};

export default FormInput;
