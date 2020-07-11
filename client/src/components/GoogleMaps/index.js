import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import axios from "axios";
import CurrentLocation from "../Map";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    foodBanks: [
    ],
    userZipCode: "",
    foundFoodBanks: [],
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({ userZipCode: event.target.value });
    console.log(this.state.foundFoodBanks);
   
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userZipCode);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA-tikB3rpGVYDMjfuyXWPyMz7rTJRYLWg&query=food+bank+near+" +
      this.state.userZipCode;

    axios.get(proxyurl + url)
    .then((res) => {
      this.setState({foodBanks: res.data.results.map((bank) => bank.geometry.location)})
      console.log(this.state.foodBanks);
    });
  };

  render() {
    return (
      <div>
        <input
          className="userZip"
          type="text"
          placeholder="Enter Zipcode"
          name="userZip"
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleSubmit}>Search</button>

        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          <Marker onClick={this.onMarkerClick} name={"current location"} />
          {this.state.foodBanks.map((location) => (
            <Marker
              position={{
                lat: location.lat,
                lng: location.lng,
              }}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA-tikB3rpGVYDMjfuyXWPyMz7rTJRYLWg",
})(MapContainer);
