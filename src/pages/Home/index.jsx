import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { postDataUrl } from '@containers/App/actions';
import { selectUrlList } from '@containers/App/selectors';
import brandRecognition from '@static/images/icon-brand-recognition.svg';
import fullyCustomizable from '@static/images/icon-fully-customizable.svg';
import detailedRecords from '@static/images/icon-detailed-records.svg';

import { Box, Button, List, ListItem, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import logo from '@static/images/illustration-working.svg';
import classes from './style.module.scss';

const theme = createTheme();

theme.typography.text = {
  fontFamily: 'Poppins',
  fontWeight: 'bold',
};

theme.typography.textSmall = {
  fontFamily: 'Poppins',
  color: 'gray',
};

const Home = ({ urlList }) => {
  const dispatch = useDispatch();
  const [copy, setCopy] = useState(false);

  const schema = yup.object().shape({
    link: yup
      .string()
      .url(<FormattedMessage id="app_url_input" />)
      .required(<FormattedMessage id="app_url_empty" />),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(postDataUrl(data.link));
  };

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <div className={classes.middleWrap}>
          <div className={classes.middleBar}>
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
            <img src={logo} alt="ilustration-working" className={classes.imageWorking} />
          </div>
        </div>
        <div className={classes.shortenWrapper}>
          <div className={classes.shortenInput}>
            <form className={classes.shortenInput} onSubmit={handleSubmit(onSubmit)}>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    className={classes.inputText}
                    {...field}
                    sx={{ input: { color: 'black' } }}
                    placeholder="Shorten a link here..."
                    helperText={formState.errors?.link?.message}
                    error={!!formState.errors?.link}
                  />
                )}
                name="link"
                control={control}
                defaultValue=""
              />
              <Button variant="contained" className={classes.buttonShorten} type="submit">
                <FormattedMessage id="app_button_shorted" />
              </Button>
            </form>
          </div>
        </div>
        <div className={classes.listWrapper}>
          <List className={classes.list}>
            {urlList.map((data) => (
              <ListItem className={classes.items} key={data.key}>
                <Typography variant="text">{data?.url}</Typography>
                <Typography variant="text">
                  <a href={data?.shrtlnk}>{data?.shrtlnk}</a>
                  <CopyToClipboard text={data?.shrtlnk} onCopy={() => handleCopy()}>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: 'none',
                        marginLeft: '10px',
                        fontFamily: 'Poppins',
                        backgroundColor: copy ? 'hsl(258, 27%, 26%)' : 'hsl(180, 62%, 53%)',
                      }}
                    >
                      {copy ? (
                        <FormattedMessage id="app_button_success_copy" />
                      ) : (
                        <FormattedMessage id="app_button_copy" />
                      )}
                    </Button>
                  </CopyToClipboard>
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
        {/* Card Section */}
        <div className={classes.statisticWrapper}>
          <div className={classes.statisticText}>
            <Typography className={classes.textStatistic}>
              <FormattedMessage id="app_text_statistic" />
            </Typography>
            <Typography className={classes.smallStatistic} sx={{ color: 'gray' }}>
              <FormattedMessage id="app_small_statistic" />
            </Typography>
          </div>
          <div className={classes.cardStatistic}>
            <div className={classes.card}>
              <div className={classes.logofirst}>
                <img src={brandRecognition} alt="" />
              </div>
              <Box height={250} width={350} my={4} display="flex" gap={4} p={2} className={classes.boxCard}>
                <Typography variant="text">
                  <FormattedMessage id="brand_recognition" />
                </Typography>
                <Typography variant="textSmall">
                  <FormattedMessage id="description_recognition" />
                </Typography>
              </Box>
            </div>
            <div>
              <hr />
            </div>
            <div className={classes.card2}>
              <div className={classes.logofirst}>
                <img src={detailedRecords} alt="" />
              </div>
              <Box height={250} width={350} my={4} display="flex" gap={4} p={2} className={classes.boxCard}>
                <Typography variant="text">
                  <FormattedMessage id="detailed_records" />
                </Typography>
                <Typography variant="textSmall">
                  <FormattedMessage id="description_records" />
                </Typography>
              </Box>
            </div>
            <div>
              <hr />
            </div>
            <div className={classes.card3}>
              <div className={classes.logofirst}>
                <img src={fullyCustomizable} alt="" />
              </div>
              <Box height={250} width={350} my={4} display="flex" gap={4} p={2} className={classes.boxCard}>
                <Typography variant="text">
                  <FormattedMessage id="fully_customizable" />
                </Typography>
                <Typography variant="textSmall">
                  <FormattedMessage id="description_customizable" />
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

Home.propTypes = {
  urlList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  urlList: selectUrlList,
});

export default connect(mapStateToProps)(Home);
