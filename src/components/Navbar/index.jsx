import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { setLocale } from '@containers/App/actions';

import { Button } from '@mui/material';
import logo from '@static/images/logo.svg';
import classes from './style.module.scss';

const Navbar = ({ locale }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  const iconStyle = {
    width: '1.5rem',
    height: '1.5rem',
  };

  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <div className={classes.title}>
            <img src={logo} alt="" width={80} />
          </div>
          <div className={classes.nav}>
            <ul>
              <li>
                <FormattedMessage id="app_nav_1" />
              </li>
              <li>
                <FormattedMessage id="app_nav_2" />
              </li>
              <li>
                <FormattedMessage id="app_nav_3" />
              </li>
            </ul>
          </div>
        </div>
        <Stack direction="row">
          <Button className={classes.buttonLogin}>
            <FormattedMessage id="app_button_login" />
          </Button>
          <Button variant="contained" className={classes.buttonSignUp}>
            <FormattedMessage id="app_button_signup" />
          </Button>
          <IconButton onClick={handleClick}>
            <Avatar src={locale === 'id' ? '/id.png' : '/en.png'} sx={iconStyle} />
          </IconButton>
        </Stack>
        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Navbar;
