import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import brandRecognition from '@static/images/icon-brand-recognition.svg';
import fullyCustomizable from '@static/images/icon-fully-customizable.svg';
import detailedRecords from '@static/images/icon-detailed-records.svg';
import classes from './style.module.scss';

const Card = () => (
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
      {/* 2 */}
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
      {/* 3 */}
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
);

export default Card;
