import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import { Redirect, withRouter } from "react-router-dom";
import { user as userAPI } from "../../utils/API";
import validateUser from "../../utils/validateUser";

class SignUpIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      firstName: "brus",
      lastName: "brus",
      address: "brus",
      state: "",
      zipCode: "10305",
      email: "brus@brus.com",
      userName: "brus",
      password: "brus",
      passwordConf: "brus",
      // donor: "",
      // foodbanker: "",
      userType: false,
    };
  }

  handleInputChange = (event) => {
    let { name, value } = event.target;
    if (name === "userType") {
      value = event.target.checked;
    }
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
      userAPI
        .signup({
          firstName: this.state.firstName.trim(),
          lastName: this.state.lastName.trim(),
          userName: this.state.userName.trim(),
          address: this.state.address.trim(),
          email: this.state.email.trim(),
          password: this.state.password.trim(),
          // donor: this.state.donor.trim(),
          // foodbanker: this.state.foodbanker.trim(),
          userType: this.state.userType,
          zipCode: this.state.zipCode.trim(),
        })
        .then((res) => {
          if (res.status === 200) {
            this.props.setLoading(false);
            this.props.setUser(res.data);
            alert("Account Created!");
            this.props.history.push("/user");
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
            this.props.setLoading(false);
            this.props.setUser(res.data);
            this.props.history.push("/user");
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
        <div className="signup-content fixed-width">
          <div className="sign-up">
            <h2 class="h2"> Register</h2>
            <div className="sign-up-form">
              <form class="sign-up-form">
                <div class="sign-up-fields">
                  <label class="sign-up-label"> First Name:</label>
                  <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label class="sign-up-label"> Last Name:</label>

                  <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label class="sign-up-label"> Username:</label>

                  <input
                    type="text"
                    value={this.state.userName}
                    name="userName"
                    placeholder="User Name"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label class="sign-up-label"> Email:</label>

                  <input
                    type="text"
                    value={this.state.email}
                    name="email"
                    placeholder="Email Address"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label class="sign-up-label"> Password:</label>

                  <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    placeholder="Enter Password"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label class="sign-up-label"> Confirm Password:</label>

                  <input
                    type="password"
                    value={this.state.passwordConf}
                    name="passwordConf"
                    placeholder="Confirm Password"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label class="sign-up-label"> Address:</label>

                  <input
                    type="text"
                    value={this.state.address}
                    name="address"
                    placeholder="Address"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label class="sign-up-label"> State:</label>

                  <select
                    id="states"
                    value={this.state.state}
                    name="state"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  >
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

                  {/* {/* <label class="sign-up-label">
                    {" "}
                    If Donor, say "Yes" here:
                  </label>

                  <input
                    type="text"
                    value={this.state.donor}
                    name="donor"
                    placeholder=""
                    className="input secondary"
                    onChange={this.handleInputChange}
                  /> */}

                  <label class="sign-up-label">
                    {" "}
                    Click here if Foodbank Partner :
                  </label>

                  <input
                    type="checkbox"
                    name="userType"
                    placeholder=""
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />
                  {/* <select
                    id="states"
                    value={this.state.userType}
                    name="state"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  >
                    <option value="Donor">Donor</option>
                    <option value="Foodbank">Foodbank Partner</option>
                  </select> */}

                  <label class="sign-up-label"> Zip Code:</label>

                  <input
                    type="text"
                    value={this.state.zipCode}
                    name="zipCode"
                    placeholder="Enter Zip Code"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />
                </div>

                <input
                  className="button primary"
                  type="submit"
                  onClick={this.handleFormSubmit}
                />
              </form>
            </div>
          </div>
          {validateUser(this.props.user) && <Redirect to="/user" />}
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="signin-content fixed-width">
            <h2 class="h2"> Welcome Back!</h2>
            <div className="sign-in-form">
              <form>
                <div class="sign-in-fields">
                  <label> User Name:</label>

                  <input
                    type="text"
                    value={this.state.userName}
                    name="userName"
                    placeholder="User Name"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />

                  <label> Password:</label>

                  <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    placeholder="Enter Password"
                    className="input secondary"
                    onChange={this.handleInputChange}
                  />
                </div>
                <input
                  className="button primary"
                  type="submit"
                  onClick={this.handleLogin}
                />
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

export default withRouter(SignUpIn);
