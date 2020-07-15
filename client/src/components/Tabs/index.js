import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import { Redirect } from "react-router-dom";
import { user as userAPI } from "../../utils/API";
import validateUser from "../../utils/validateUser";

class SignUpIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      zipCode: "",
      email: "",
      userName: "",
      password: "",
      passwordConf: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // on form submit if signing up, need to save all relevant fields into SQL database
  // on form submit if logging back in, need to authenticate
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.setLoading(true);
    if (!this.state.email || !this.state.password || !this.state.passwordConf) {
      this.props.setLoading(false);
      alert("Please fill all required fields");
    } else if (this.state.password.trim() !== this.state.passwordConf.trim()) {
      this.props.setLoading(false);
      alert("Passwords do not match");
    } else {
      alert(
        "Welcome " +
          this.state.firstName +
          " " +
          this.state.lastName +
          ".  " +
          "Your username is " +
          this.state.userName +
          " and your password is " +
          this.state.password
      );

      userAPI
        .signup({
          firstName: this.state.firstName.trim(),
          lastName: this.state.lastName.trim(),
          userName: this.state.userName.trim(),
          address: this.state.address.trim(),
          email: this.state.email.trim(),
          password: this.state.password.trim(),
        })
        .then((res) => {
          if (res.status === 200) {
            this.props.setLoading(false);
            this.props.setUser(res.data);
            alert("Account Created!");
            return <Redirect to="/user" />;
          }
        })
        .catch((err) => {
          this.props.setLoading(false);
          console.log(err);
        });
    }
  };

  handleLogin = (event) => {
    event.preventDefault();

    if (this.state.userName && this.state.password) {
      this.props.setLoading(true);

      userAPI
        .login({
          userName: this.state.userName.trim(),
          password: this.state.password.trim(),
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Welcome back " + this.state.userName)
            console.log(res.status);
            this.props.setLoading(false);
            this.props.setUser(res.data);
            return <Redirect to="/user" />;
          }
        })
        .catch((err) => {
          this.props.setLoading(false);
          console.log(err);
        });
    }
  };

  toggleTab() {
    if (this.state.activeTab === 0) {
      return (
        <div className="content">
          <div className="sign-up">
            <h2> Register</h2>
            <div className="sign-up-form">
              <form>
                <label> First Name:</label>
                <br />
                <input
                  type="text"
                  value={this.state.firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> Last Name:</label>
                <br />
                <input
                  type="text"
                  value={this.state.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> Username:</label>
                <br />
                <input
                  type="text"
                  value={this.state.userName}
                  name="userName"
                  placeholder="User Name"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> Email:</label>
                <br />
                <input
                  type="text"
                  value={this.state.email}
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> Password:</label>
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> Confirm Password:</label>
                <br />
                <input
                  type="password"
                  value={this.state.passwordConf}
                  name="passwordConf"
                  placeholder="Confirm Password"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> Address:</label>
                <br />
                <input
                  type="text"
                  value={this.state.address}
                  name="address"
                  placeholder="Address"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> State:</label>
                <br />
                <select id="states" value={this.state.state} name="state">
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MO</option>
                  <option value="MT">MT</option>
                  <option value="NE">NE</option>
                  <option value="NV">NV</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                </select>
                <br />
                <label> Zip Code:</label>
                <br />
                <input
                  type="text"
                  value={this.state.zipCode}
                  name="zipCode"
                  placeholder="Enter Zip Code"
                  onChange={this.handleInputChange}
                />
                <br />
                <input type="submit" onClick={this.handleFormSubmit} />
              </form>
            </div>
          </div>
          {validateUser(this.props.user) && <Redirect to="/user" />}
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="sign-in">
            <h2> Welcome Back!</h2>
            <div className="sign-in-form">
              <form>
                <label> User Name:</label>
                <br />
                <input
                  type="text"
                  value={this.state.userName}
                  name="userName"
                  placeholder="User Name"
                  onChange={this.handleInputChange}
                />
                <br />
                <label> Password:</label>
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.handleInputChange}
                />
                <br />
                <input type="submit" onClick={this.handleLogin} />
              </form>
            </div>
          </div>
          {validateUser(this.props.user) && <Redirect to="/user" />}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Sign Up</Tab>
          <Tab>Sign In</Tab>
        </Tabs>
        <section>
          <div>{this.toggleTab()}</div>
        </section>
        {validateUser(this.props.user) && <Redirect to="/user" />}
      </div>
    );
  }
}

export default SignUpIn;
