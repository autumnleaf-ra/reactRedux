import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';

import Navbar from '@components/Navbar';
import Boost from '@components/Boost';
import Footer from '@components/Footer';
import { Card } from '@mui/material';

const MainLayout = ({ children, locale, theme, intl: { formatMessage } }) => (
  <div>
    <Navbar title={formatMessage({ id: 'app_title_header' })} locale={locale} theme={theme} />
    {children}
    <Card />
    <Boost />
    <Footer />
  </div>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
});

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  intl: PropTypes.object,
};

export default injectIntl(connect(mapStateToProps)(MainLayout));
