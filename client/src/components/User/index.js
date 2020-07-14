import React from "react";
import { postings as postingsAPI } from "../../utils/API";
// import { render } from "react-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "jbay",
      donationItemHistory: [],
      donationQuantityHistory: [],
      donationDate: [],
      donatedHistory: [],
    };
  }

  componentDidMount() {
    console.log(this.state.userName + " is mounted");
    postingsAPI
      .findDonations({
        userName: this.state.userName,
      })
      .then((res) => {
        this.setState({
          donationItemHistory: res.data.map(
            (donationObj) => donationObj.donatedItem
          ),
        });
        this.setState({
          donationQuantityHistory: res.data.map(
            (donateObj) => donateObj.quantity
          ),
        });
        this.setState({
          donationDate: res.data.map((timeObj) => timeObj.createdAt),
        });
        this.setState({
          donatedHistory: [
            this.state.donationItemHistory,
            this.state.donationQuantityHistory,
            this.state.donationDate,
          ],
        });

        console.log(this.state.donatedHistory);
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <h2> Recent Donations</h2>
        <p>Item</p>
        <p>Quantity</p>
        <p>Date of Donation</p>
        
        <p>{this.state.donationItemHistory[0]}</p>
        <p>{this.state.donationQuantityHistory[0]}</p>
        <p>{this.state.donationDate[0]}</p>

        {/* {this.state.donatedHistory.map((donatedItem) => (
          <div>
            <p>{donatedItem}</p>
            
            
          </div>
        ))} */}
      </div>
    );
  }
}

export default User;
