import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Body from "../components/Body";
import Carousel from "../components/Carousel";
import GoogleMap from "../components/GoogleMap";
import Footer from "../components/Footer";

function HoTroHoanCanh() {
  return (
    <div>
      <Header />
      <Banner />
      <Body />
      <Carousel />
      <GoogleMap />
      <Footer />
    </div>
  );
}

export default HoTroHoanCanh;

// GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=PLT-zKxkjinE9cnHMeuhXYCYXQfET-5uEy&key=AIzaSyBEUVRN522VqnGAxtZLtq9d9yYejaE05T8 HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
// AIzaSyBEUVRN522VqnGAxtZLtq9d9yYejaE05T8
// https://www.youtube.com/watch?v=id
