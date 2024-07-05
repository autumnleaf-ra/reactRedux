import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { postDataUrl } from '@containers/App/actions';
import { selectUrlList } from '@containers/App/selectors';

import classes from './style.module.scss';
import { Box, Button, TextField, Typography } from '@mui/material';

const Home = ({ urlList }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(postDataUrl('https://facebook.com'));
  };

  {
    /* <Button variant="contained" onClick={() => handleClick()}>
          Fetch
        </Button> */
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.middleWrap}>
        <div>
          <h1>
            <FormattedMessage id="app_project_info" />
          </h1>
          <Typography className={classes.description}>
            <FormattedMessage id="app_project_description" />
          </Typography>
          <Button variant="contained" className={classes.buttonGetStared}>
            <FormattedMessage id="app_button_get_started" />
          </Button>
        </div>
        <div>
          <img src="/src/assets/illustration-working.svg" alt="ilustration-working" style={{ width: '600px' }} />
        </div>
      </div>
      <div className={classes.shortenWrapper}>
        <div className={classes.shortenInput}>
          <TextField className={classes.inputText} placeholder="Shorten a link here..." />
          <Button variant="contained" className={classes.buttonShorten}>
            <FormattedMessage id="app_button_shorted" />
          </Button>
        </div>
      </div>
      <div className={classes.statisticWrapper}>
        <div>
          <Typography className={classes.textStatistic}>
            <FormattedMessage id="app_text_statistic" />
          </Typography>
          <Typography className={classes.smallStatistic}>
            <FormattedMessage id="app_small_statistic" />
          </Typography>
        </div>
        <div className={classes.cardStatistic}>
          <div className={classes.card}>
            <Box height={200} width={200} my={4} display="flex" gap={4} p={2} sx={{ b }}>
              This Box uses MUI System props for quick customization.
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  urlList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  urlList: selectUrlList,
});

export default connect(mapStateToProps)(Home);
