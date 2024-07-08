import { FormattedMessage } from 'react-intl';
import { Typography } from '@mui/material';
import classes from './style.module.scss';

const Footer = () => (
  <div className={classes.footerWrapper}>
    <div className={classes.contentFooter}>
      <div>Logo</div>
      <div>
        Features
        <Typography>
          <FormattedMessage id="app_footer_features" />
        </Typography>
        <Typography>
          <FormattedMessage id="app_footer_features" />
        </Typography>
        <Typography>
          <FormattedMessage id="app_footer_features" />
        </Typography>
        <Typography>
          <FormattedMessage id="app_footer_features" />
        </Typography>
      </div>
      <div>
        Resources
        <Typography>
          <FormattedMessage id="app_footer_resources" />
        </Typography>
        <Typography>
          <FormattedMessage id="app_footer_resources" />
        </Typography>
      </div>
      <div>
        Company
        <Typography>
          <FormattedMessage id="app_footer_company" />
        </Typography>
        <Typography>
          <FormattedMessage id="app_footer_company" />
        </Typography>
        <Typography>
          <FormattedMessage id="app_footer_company" />
        </Typography>
        <Typography>
          <FormattedMessage id="app_footer_company" />
        </Typography>
      </div>
      <div>Icon</div>
    </div>
  </div>
);

export default Footer;
