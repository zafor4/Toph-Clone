import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { PiNotificationThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import './Header.css';
import { connect } from 'react-redux';
import { logOut } from '../../Redux/AuthActionCreaters'; // Ensure you import your logout action correctly

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
  };
};

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const handleJoinToph = () => {
    props.logout();
    navigate('/');
  };

  let links = null;
  if (props.token !== null) {
    links = (
      <NavItem>
        <NavLink href="/leaderboard" className="text-decoration-none text-dark">
          Leaderboard
        </NavLink>
      </NavItem>
    );
  }

  let logINLink = null;
  if (!props.token) {
    logINLink = (
      <NavItem>
        <NavLink href="/authentication" className="text-decoration-none">
          Log in
        </NavLink>
      </NavItem>
    );
  }

  let profileIcon = null;
  if (props.token) {
    profileIcon = (
      <div>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mt: { xs: 1, md: 0 } }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 0 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleJoinToph}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <div className="tw-px-4 md:tw-px-16 lg:tw-px-24 tw-border-b-2">
      <Navbar expand="md">
        <NavbarBrand href="/">Toph</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/contests" className="text-decoration-none text-dark">
                Contests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/problems" className="text-decoration-none text-dark">
                Problems
              </NavLink>
            </NavItem>
            {links}
            <NavItem>
              <NavLink href="/tutorials" className="text-decoration-none text-dark">
                Tutorials
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="me-auto md:tw-absolute md:tw-right-0" navbar>
            <div className="d-flex flex-column flex-md-row">
              <form className="d-flex tw-mb-5 md:tw-mb-0">
                <input className="tw-border-b-2" type="search" placeholder="Search" aria-label="Search" />
                <CiSearch type="submit" className="tw-text-2xl md:tw-mt-2" />
              </form>
              <PiNotificationThin className="tw-text-2xl md:tw-mt-2 md:tw-ms-3" />
              {logINLink}
              <NavItem>{profileIcon}</NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
