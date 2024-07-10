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
import hamburgerMenu from '@static/images/hamburger-menu.svg';

import { setLocale } from '@containers/App/actions';

import { Button } from '@mui/material';
import logo from '@static/images/logo.svg';
import classes from './style.module.scss';

const Navbar = ({ locale }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const [hamburger, setHamburger] = useState(null);
  const open = Boolean(menuPosition);
  const opened = Boolean(hamburger);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleHamburger = (event) => {
    setHamburger(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const hamburgerClose = () => {
    setHamburger(null);
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
        <Stack direction="row" className={classes.hiddenWrapper}>
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
        <Stack direction="row" className={classes.hiddenHamburger}>
          <Button className={classes.buttonLogin} onClick={handleHamburger}>
            <img src={hamburgerMenu} alt="" />
          </Button>
        </Stack>
        <Menu
          open={open}
          anchorEl={menuPosition}
          onClose={handleClose}
          sx={{ '& .MuiMenu-paper': { backgroundColor: 'white', color: 'black', pt: 1 } }}
        >
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
        <Menu
          open={opened}
          anchorEl={hamburger}
          onClose={hamburgerClose}
          sx={{
            '& .MuiMenu-paper': {
              backgroundColor: 'hsl(257, 27%, 26%)',
              color: 'white',
              pt: 1,
              width: 800,
            },
          }}
        >
          <div className={classes.menuItemlist}>
            <MenuItem className={classes.items}>
              <FormattedMessage id="app_nav_1" />
            </MenuItem>
            <MenuItem className={classes.items}>
              <FormattedMessage id="app_nav_2" />
            </MenuItem>
            <MenuItem className={classes.items}>
              <FormattedMessage id="app_nav_3" />
            </MenuItem>
            <MenuItem className={classes.items}>
              <hr style={{ width: '400px' }} />
            </MenuItem>
            <MenuItem className={classes.items}>
              <FormattedMessage id="app_button_login" />
            </MenuItem>
            <MenuItem className={classes.items}>
              <Button variant="contained">
                <FormattedMessage id="app_button_signup" />
              </Button>
            </MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Navbar;
