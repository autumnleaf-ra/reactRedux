import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { postDataUrl } from '@containers/App/actions';
import { selectUrlList } from '@containers/App/selectors';
import brandRecognition from '@static/images/icon-brand-recognition.svg';
import fullyCustomizable from '@static/images/icon-fully-customizable.svg';
import detailedRecords from '@static/images/icon-detailed-records.svg';

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
          <h1 style={{ color: 'black' }}>
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
            <div className={classes.logofirst}>
              <img src={brandRecognition} alt="" />
            </div>
            <Box height={250} width={350} my={4} display="flex" gap={4} p={2} className={classes.boxCard}>
              <Typography>
                <FormattedMessage id="brand-recognition" />
              </Typography>
              <Typography>
                <FormattedMessage id="description_recognition" />
              </Typography>
            </Box>
          </div>
          {/* 2 */}
          <div className={classes.card} style={{marginTop: '50px'}}>
            <div className={classes.logofirst}>
              <img src={detailedRecords} alt="" />
            </div>
            <Box height={250} width={350} my={4} display="flex" gap={4} p={2} className={classes.boxCard}>
              <Typography>
                <FormattedMessage id="brand-recognition" />
              </Typography>
              <Typography>
                <FormattedMessage id="description_recognition" />
              </Typography>
            </Box>
          </div>
          {/* 3 */}
          <div className={classes.card} style={{marginTop: '150px'}}>
            <div className={classes.logofirst}>
              <img src={fullyCustomizable} alt="" />
            </div>
            <Box height={250} width={350} my={4} display="flex" gap={4} p={2} className={classes.boxCard}>
              <Typography>
                <FormattedMessage id="brand-recognition" />
              </Typography>
              <Typography>
                <FormattedMessage id="description_recognition" />
              </Typography>
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
