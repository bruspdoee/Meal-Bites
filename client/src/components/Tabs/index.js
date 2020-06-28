import React from "react";
import { Tabs, Tab } from "react-mdl";

class SignUpIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

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
                <input type="text" />
                <br />
                <label> Last Name:</label>
                <br />
                <input type="text" />
                <br />
                <label> Phone Number:</label>
                <br />
                <input type="text" />
                <br />
                <label> Email:</label>
                <br />
                <input type="text" />
                <br />
                <label> Password:</label>
                <br />
                <input type="text" />
                <br />
                <label> Confirm Password:</label>
                <br />
                <input type="text" />
                <br />
                <label> Address:</label>
                <br />
                <input type="text" />
                <br />
                <label> State:</label>
                <br />
                <select id="states">
                  <option value="NY">New York</option>
                  <option value="NJ">New Jersey</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                </select>
                <br />
                <label> Zip Code:</label>
                <br />
                <input type="text" />
                <br />
                <input type="submit" />
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
                <label> Email:</label>
                <br />
                <input type="text" />
                <br />
                <label> Password:</label>
                <br />
                <input type="text" />
                <br />
                <input type="submit" />
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
