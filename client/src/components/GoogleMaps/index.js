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
    foodBankNames: [],
    userZipCode: "",
    center: {
      lat: 40.5795,
      lng: -74.1502,
    },
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props);
    console.log(marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

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
      console.log(res.data);
      this.setState({
        foodBanks: res.data.results.map((bank) => {
          const comments = [
            "jbay, bpalaj, and others donated 83 items here",
            "mmastro donated 3 items here",
            "rerlih donated 18 items here",
            "no one's donated here, be the first!",
            "mgoodman donated 95 items here",
            "mgoodman and bpalaj donated 14 items here",
          ];
          const random = Math.floor(Math.random() * comments.length);
          console.log(Math.floor(Math.random() * comments.length));

          return {
            lat: bank.geometry.location.lat,
            lng: bank.geometry.location.lng,
            name: bank.name,
            address: bank.formatted_address,
            comments: comments[random],
          };
        }),
      });

      this.setState({ center: res.data.results[0].geometry.location });
      console.log(this.state.foodBanks);
      console.log("center: " + JSON.stringify(this.state.center));
    });
  };

  render() {
    return (
      <div class="map-content">
        <h2 class="h2">Find a place to donate near you!</h2>
        <input
          className="userZip input primary"
          type="text"
          placeholder="Enter Zipcode"
          name="userZip"
          onChange={this.handleInputChange}
        ></input>
        <button 
        className = "button primary"
        onClick={this.handleSubmit}>Search</button>

        <Map
          className="home-map"
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
              name={location.name}
              address={location.address}
              comments={location.comments}
              onClick={this.onMarkerClick}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
              <p>{this.state.selectedPlace.address}</p>
              <p>{this.state.selectedPlace.comments}</p>
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
