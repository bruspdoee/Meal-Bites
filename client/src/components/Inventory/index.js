import React from "react";
import { postings as postingsAPI } from "../../utils/API";
// import { render } from "react-dom";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.user.userName,
      donatedHistory: [],
    };
  }

  componentDidMount() {
    console.log(this.state.userName + " is mounted");
    postingsAPI
      .findAll()
      .then((res) => {
        console.log(res);

        this.setState({
          donatedHistory: res.data.map((donation) => {
            const donationTime =
              donation.createdAt[6] +
              "/" +
              donation.createdAt[8] +
              donation.createdAt[9] +
              "/2020";

            return {
              userName: donation.userName,
              donatedItem: donation.donatedItem,
              donatedItemCategory: donation.donatedItemCategory,
              quantity: donation.quantity,
              date: donationTime,
              comments: donation.comments,
            };
          }),
        });

        console.log(this.state.donatedHistory);
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div class="donate-content fixed-width">
        <h3 class="h2">Watch people donating live!</h3>

        {this.state.donatedHistory.map((donatedItem) => (
          <div class="donate-grid">
            <div class="donate-container">
              <p class="donate-item">
                {donatedItem.userName} donated {donatedItem.quantity}{" "}
                {donatedItem.donatedItem} on {donatedItem.date}
              </p>
              <p class="donate-comment border-accent">
                {" "}
                {donatedItem.comments}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Inventory;
