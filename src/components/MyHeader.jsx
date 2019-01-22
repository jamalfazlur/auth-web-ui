import React,  { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MyHeader extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
      };
    }
    toggle() {
       this.setState({
         isOpen: !this.state.isOpen
       });
    }


    render(){
        if (this.props.username === ""){ 
            return(
                <div style={{marginBottom:"70px"}}>
                    <Navbar color="light" light expand="md" fixed="top" style={{boxShadow: "0 1px 5px grey"}}>
                    <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/browse"><NavLink>Browse</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/register"><NavLink className="btn btn-default border-warning mr-1" href="/register">Register</NavLink></Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/login"><NavLink className="btn btn-default border-primary"><i className="fas fa-sign-in-alt" /> Login</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                </div>
            );
        }
        return(
            <div style={{marginBottom:"70px"}}>
                <Navbar color="light" light expand="md" fixed="top">
                <NavbarBrand href="/">Semalam Suntuk</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Browse</NavLink>
                        </NavItem>
                        
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Hello, {this.props.username}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem><i className="fas fa-sign-out-alt"></i> Logout </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(MyHeader);