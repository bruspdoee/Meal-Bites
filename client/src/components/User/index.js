import React from "react";
import { postings as postingsAPI } from "../../utils/API";
// import { render } from "react-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.user.userName,
      // donor: this.props.user.donor,
      // foodbanker: this.props.user.foodbanker,
      userType: this.props.user.userType,
      donatedHistory: [],
      donatedHistoryNumbers: [],
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
          donatedHistory: res.data.map((donation) => {
            const donationTime =
              donation.createdAt[6] +
              "/" +
              donation.createdAt[8] +
              donation.createdAt[9] +
              "/2020";

            return {
              donatedItem: donation.donatedItem,
              donatedItemCategory: donation.donatedItemCategory,
              quantity: donation.quantity,
              date: donationTime,
            };
          }),
        });

        console.log(this.state.donatedHistory);
      })
      .catch((e) => console.log(e));

    postingsAPI
      .findTotalDonationsNumber({
        userName: this.state.userName,
      })
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          donatedHistoryNumbers: resp.data.map((response) => {
            return {
              [response.donatedItemCategory.charAt(0).toUpperCase() +
              response.donatedItemCategory.slice(1)]: response.total,
            };
          }),
        });

        console.log(this.state.donatedHistoryNumbers);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.userType) {
      return (
        <div class="user-profile-container fixed-width">
          <h3 class="h2 border-accent">
            {this.state.userName}, thanks for your donations!
          </h3>
          <h5>Member since 2020</h5>
          <h4 class="h3">Number of items donated</h4>
          {this.state.donatedHistoryNumbers.map((category) => (
            <div>
              <p class="donated-items">
                {Object.keys(category)}: {Object.values(category)}
              </p>
            </div>
          ))}

          <h4>Itemized History</h4>
          {this.state.donatedHistory.map((donatedItem) => (
            <div>
              <p>
                {donatedItem.quantity} {donatedItem.donatedItem} on{" "}
                {donatedItem.date}
              </p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div class="user-profile-container fixed-width">
          <h3 class="h2 border-accent">
            Welcome Back {this.state.userName}, thank you for being our partner!
          </h3>
          <h5>Partners since 2020</h5>
          <h4>Recently Claimed Items </h4>
          {this.state.donatedHistory.map((donatedItem) => (
            <div>
              <p>
                {donatedItem.quantity} {donatedItem.donatedItem} on{" "}
                {donatedItem.date}
              </p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default User;
