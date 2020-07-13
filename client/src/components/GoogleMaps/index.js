import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Map } from "google-maps-react";
import axios from "axios";
// import Map from "../Map";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    foodBanks: [],
    userZipCode: "",
    center: {
      lat: 40.5795,
      lng: -74.1502,
    },
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
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA-tikB3rpGVYDMjfuyXWPyMz7rTJRYLWg&query=food+bank+near+" +
      this.state.userZipCode;

    axios.get(proxyurl + url).then((res) => {
      this.setState({
        foodBanks: res.data.results.map((bank) => bank.geometry.location),
      });
      console.log(this.state.foodBanks);

      console.log(res.data.results[0].geometry.location);

      this.setState({ center: res.data.results[0].geometry.location });
      console.log("center: " + JSON.stringify(this.state.center));
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

        <Map
          zoom={11}
          initialCenter={{
            lat: this.state.center.lat,
            lng: this.state.center.lng,
          }}
          google={this.props.google}
        >
          <Marker onClick={this.onMarkerClick} name={"Current Location"} />
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
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA-tikB3rpGVYDMjfuyXWPyMz7rTJRYLWg",
})(MapContainer);
