import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button,Navbar,NavbarBrand} from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }

  addItem() {
    return this.props.users.map((user) => {
      return (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name} </td>
            <td>{user.age} </td>
            <td>{user.gender} </td>
            <td>{user.email} </td>
            <td>{user.phoneNo} </td>
          </tr>  
      );
    });
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{marginLeft:"10%"}} href="/"><strong>Dashboard</strong></NavbarBrand>
          <Link style={{marginLeft:"70%"}} to="/logout"><Button outline color="success" >logout</Button></Link>
        </Navbar>
       
        <Table dark>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.addItem()}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(Dashboard);
