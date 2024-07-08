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

import { Box, Button, List, ListItem, TextField, Typography } from '@mui/material';
import classes from './style.module.scss';

const Home = ({ urlList }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(postDataUrl('https://mui.com/material-ui/react-list/'));
  };

  useEffect(() => {
    console.log(urlList);
  }, [urlList]);

  // eslint-disable-next-line no-lone-blocks
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
      <div className={classes.listWrapper}>
        <List>
          {urlList.map((data) => (
            <ListItem className={classes.items} key={data.key}>
              <Typography>link asli</Typography>
              <Typography>
                <a href={data?.shrtlnk}>{data?.shrtlnk}</a>
                <Button variant="contained" sx={{ textTransform: 'none', marginLeft: '10px', fontFamily: 'Poppins' }}>
                  Copy
                </Button>
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
      {/* Card Section */}
      <div className={classes.statisticWrapper}>
        <div>
          <Typography className={classes.textStatistic}>
            <FormattedMessage id="app_text_statistic" />
          </Typography>
          <Typography className={classes.smallStatistic} sx={{ color: 'black' }}>
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
          <div className={classes.card} style={{ marginTop: '50px' }}>
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
          <div className={classes.card} style={{ marginTop: '150px' }}>
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
