import React from "react";
import { Tabs, Tab } from "react-mdl";


class SignUpIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, firstName: "", lastName:"", phoneNumber: "", address: "", state:"", zipCode:"", email: "", userName: "", password: "", passwordConf: "" };
  }

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(event.target.value);
    this.setState({
      [name]: value
    });
  };


  // on form submit if signing up, need to save all relevant fields into SQL database
  // on form submit if logging back in, need to authenticate
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      console.log("Username is: " + this.state.userName + " and password is: " + this.state.password);
      // userAPI.signup({
      //   username: this.state.username,
      //   email: this.state.email,
      //   password: this.state.password,
      //   passwordConf: this.state.passwordConf,

      // })
        // .then(res => {
        //   if(res.status === 200 ){
        //     this.props.authenticate();
        //     return <Redirect to="/books" />
        //   }
        // })
        // .catch(err => {console.log(err)});
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
                <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleInputChange}/>
                <br />
                <label> Last Name:</label>
                <br />
                <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleInputChange}/>
                <br />
                <label> Username:</label>
                <br />
                <input type="text" value={this.state.userName} name="userName" placeholder="User Name" onChange={this.handleInputChange}/>
                <br />
                <label> Phone Number:</label>
                <br />
                <input type="text" value={this.state.phoneNumber} name="phoneNumber" placeholder="Phone Number" onChange={this.handleInputChange}/>
                <br />
                <label> Email:</label>
                <br />
                <input type="text" value={this.state.email} name="email" placeholder="Email Address" onChange={this.handleInputChange}/>
                <br />
                <label> Password:</label>
                <br />
                <input type="password" value={this.state.password} name="password" placeholder="Enter Password" onChange={this.handleInputChange}/>
                <br />
                <label> Confirm Password:</label>
                <br />
                <input type="password" value={this.state.passwordConf} name="passwordConf" placeholder="Confirm Password" onChange={this.handleInputChange}/>
                <br />
                <label> Address:</label>
                <br />
                <input type="text" value={this.state.address} name="address" placeholder="Address" onChange={this.handleInputChange}/>
                <br />
                <label> State:</label>
                <br />
                <select id="states" value={this.state.state} name="state">
                  <option value="NY">New York</option>
                  <option value="NJ">New Jersey</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                </select>
                <br />
                <label> Zip Code:</label>
                <br />
                <input type="text" value={this.state.zipCode} name="zipCode" placeholder="Enter Zip Code" onChange={this.handleInputChange}/>
                <br />
                <input type="submit" onClick={this.handleFormSubmit}/>
              </form>
            </div>
          </div>
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
                <input type="text" value={this.state.userName} name="userName" placeholder="User Name" onChange={this.handleInputChange}/>
                <br />
                <label> Password:</label>
                <br />
                <input type="password" value={this.state.password} name="password" placeholder="Enter Password" onChange={this.handleInputChange}/>
                <br />
                <input type="submit" onClick={this.handleFormSubmit}/>
              </form>
            </div>
          </div>
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
      </div>
    );
  }
}

export default SignUpIn;
