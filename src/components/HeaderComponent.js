import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
          <React.Fragment>
            <Jumbotron className='header' fluid >
              <Navbar dark sticky='top'>
                <div className='container'>
                  <div className='row'>
                    <div className='col'>
                      <h1>nerdvana</h1>
                    </div>
                  </div>
                  <NavbarBrand className='mr-auto' href='/'></NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink className='nav-link' to='/home'>
                          <i className='fa fa-home fa-lg' /> HOME
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className='nav-link' to='/aboutus'>
                          <i className='fa fa-info fa-lg' /> ABOUT
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className='nav-link' to='#'>
                          <i className='fa fa-list fa-lg' /> MENU
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className='nav-link' to='#'>
                          <i className='fa fa-list fa-lg' /> ORDER ONLINE
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className='nav-link' to='/contactus'>
                          <i className='fa fa-address-card fa-lg' /> CONTACT US
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                
                </div>
              </Navbar>
            </Jumbotron>
          </React.Fragment>
        )
    }
}

export default Header;