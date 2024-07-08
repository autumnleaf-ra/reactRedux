import { FormattedMessage } from 'react-intl';
import { Button } from '@mui/material';
import classes from './style.module.scss';

const SectionBoost = () => (
  <div className={classes.boostWrap}>
    <div className={classes.boostHead}>
      <h1>
        <FormattedMessage id="app_boost" />
      </h1>
      <Button variant="contained" className={classes.buttonGetStared}>
        <FormattedMessage id="app_button_get_started" />
      </Button>
    </div>
  </div>
);

export default SectionBoost;
