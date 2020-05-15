import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Navbar,NavbarText,Form,Label,Input,Button} from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "hurday@gmail.com" && password === "hurday123") {
      localStorage.setItem("token", "Thisiscradletothegrave");
      this.setState({
        loggedIn: true,
      });
        console.log("token");
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarText style={{marginLeft:"30%",fontSize:100}} href="/"><strong>Welcome User</strong></NavbarText>
          
        </Navbar>
        <Form onSubmit={this.submitForm} style={{maxWidth:"20%",marginLeft:"40%"}}>
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}
          />
          <br />
          <Label for="exampleEmail" className="mr-sm-2">Password</Label>
          <Input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}
          />
          <br />
          <Button type="submit" outline color="success">Login</Button>
          <br />
        </Form>
      </div>
    );
  }
}

export default Login;
