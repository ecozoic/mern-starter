import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { Menu, Container, Image } from 'semantic-ui-react';

import { Paths } from '../../constants';

import logo from '../../../react.png';

const Header = ({ isAuthenticated, onLogoutClick }) => (
  <Menu fixed="top" inverted style={{ borderRadius: 0 }}>
    <Container>
      <Menu.Item
        as={({ className }) => (
          <Link className={className} to={Paths.HOME}>
            <Image
              size="mini"
              shape="circular"
              src={logo}
              style={{ marginRight: '1.5em' }}
            />
            Todo List
          </Link>
        )}
        header
      />
      <Menu.Item
        as={({ className }) => (
          <NavLink className={className} to={Paths.HOME} exact>
            Home
          </NavLink>
        )}
      />
      {!isAuthenticated &&
        <Menu.Item
          as={({ className }) => (
            <NavLink className={className} to={Paths.LOGIN}>
              Login
            </NavLink>
          )}
        />
      }
      {!isAuthenticated &&
        <Menu.Item
          as={({ className }) => (
            <NavLink className={className} to={Paths.REGISTER}>
              Register
            </NavLink>
          )}
        />
      }
      {isAuthenticated &&
        <Menu.Item
          as={({ className }) => (
            <NavLink className={className} to={Paths.ADMIN}>
              Admin
            </NavLink>
          )}
        />
      }
      {isAuthenticated &&
        <Menu.Item as="a" onClick={onLogoutClick}>
          Logout
        </Menu.Item>
      }
    </Container>
  </Menu>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default Header;
