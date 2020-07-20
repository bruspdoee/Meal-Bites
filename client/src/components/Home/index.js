import React from "react";
import GoogleApi from "../GoogleMaps";


const Home = () => {
  return (
    <div class="">
      <div class="home-content"></div>

      <div class="home-hero fixed-width">
          <div class="home-hero-content">
              <h2 class="h2">Have food lying around that you don't know what to <span class="border-accent">do wi</span>th?</h2>
              <a class="button primary" href="">Donate Now</a>
          </div>
          <div class="home-hero-tree"></div>
      </div>


      <div class="map-container">
        <GoogleApi />
      </div>
    </div>
  );
};

export default Home;
