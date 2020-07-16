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
            return {
              userName: donation.userName,
              donatedItem: donation.donatedItem,
              donatedItemCategory: donation.donatedItemCategory,
              quantity: donation.quantity,
              date: donation.createdAt,
            };
          }),
        });

        console.log(this.state.donatedHistory);
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <h3>Watch people donating live!</h3>

        {this.state.donatedHistory.map((donatedItem) => (
          <div>
            <p>
              {donatedItem.userName} donated {donatedItem.quantity}{" "}
              {donatedItem.donatedItem} on {donatedItem.date}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Inventory;
