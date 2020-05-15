import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button,Navbar,NavbarBrand} from 'reactstrap';
class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        console.log("Token Removed");
    }
    render() {
        return (
            <Fragment>
                <Navbar color="light" light expand="md">
                <NavbarBrand  href="/"><strong>Logged Out Successfully</strong></NavbarBrand>
                <Link style={{marginLeft:"70%"}} to="/login"><Button outline color="success" >login</Button></Link>
                </Navbar>
            </Fragment>
        )
    }
}

export default Logout;
