import React from "react";
import { postings as postingsAPI } from "../../utils/API";
// import { Redirect } from "react-router-dom";
// import User from "../User";
import { withRouter } from "react-router-dom";

class newPosting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.user.userName,
      donatedItem: "",
      donatedItemCategory: "",
      quantity: "",
      comments: "",
      donor: this.props.user.donor,
      foodbanker: this.props.user.foodbanker,
    };
  }

  componentDidMount() {
    console.log(this.state.userName);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(event.target.value);
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for donating");
    postingsAPI
      .newPosting({
        userName: this.state.userName,
        donatedItem: this.state.donatedItem,
        donatedItemCategory: this.state.donatedItemCategory,
        quantity: this.state.quantity,
        comments: this.state.comments,
      })
      .then((res) => {
        this.props.history.push("/user");
      })
      .catch((e) => console.log(e));
  };

  render() {
    if (this.state.donor === "Yes") {
      return (
        <div class="posting-page">
          <h3 class="h2 fixed-width">Welcome {this.state.userName}</h3>
          <form class="posting-container">
            <label>Item to Donate</label>
            <input
              type="text"
              id="donatedItem"
              name="donatedItem"
              value={this.state.donatedItem}
              className="input secondary"
              onChange={this.handleInputChange}
            ></input>

            <label>Category</label>
            <select
              id="donatedItemCategory"
              name="donatedItemCategory"
              value={this.state.donatedItemCategory}
              className="input secondary"
              onChange={this.handleInputChange}
            >
              <option>Please Select Below</option>
              <option value="fruits">Fruit</option>
              <option value="cannedGoods">Canned Goods</option>
              <option value="householdSupplies">Household Supplies</option>
            </select>
            <label>Quantity to Donate</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              className="input secondary"
              onChange={this.handleInputChange}
            ></input>
            <label>Comments</label>
            <input
              type="text"
              id="comments"
              name="comments"
              value={this.state.comments}
              className="input secondary"
              onChange={this.handleInputChange}
            ></input>
            <input
              className="button primary"
              type="submit"
              onClick={this.handleFormSubmit}
            ></input>
          </form>
        </div>
      );
    } else if (this.state.foodbanker === "Yes");
    return (
      <div class="donate-content fixed-width">
        <h3 class="h2">Claim recently made donations</h3>
      </div>
    );
  }
}

export default withRouter(newPosting);
