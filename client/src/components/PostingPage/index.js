import React from "react";
import { postings as postingsAPI } from "../../utils/API";
import { Redirect } from "react-router-dom";
import User from "../User";
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
    return (
      <div>
        <h3 class="h2">Welcome {this.state.userName}</h3>
        <form>
          <label>Item to Donate</label>
          <br />
          <input
            type="text"
            id="donatedItem"
            name="donatedItem"
            value={this.state.donatedItem}
            onChange={this.handleInputChange}
          ></input>
          <br />

          <label>Category</label>
          <br />
          <select
            id="donatedItemCategory"
            name="donatedItemCategory"
            value={this.state.donatedItemCategory}
            onChange={this.handleInputChange}
          >
            <option>Please Select Below</option>
            <option value="fruits">Fruit</option>
            <option value="cannedGoods">Canned Goods</option>
            <option value="householdSupplies">Household Supplies</option>
          </select>
          <br />
          <label>Quantity to Donate</label>
          <br />
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleInputChange}
          ></input>
          <br />
          <label>Comments</label>
          <br />
          <input
            type="text"
            id="comments"
            name="comments"
            value={this.state.comments}
            onChange={this.handleInputChange}
          ></input>
          <br />
          <input type="submit" onClick={this.handleFormSubmit}></input>
        </form>
      </div>
    );
  }
}

export default withRouter(newPosting);
