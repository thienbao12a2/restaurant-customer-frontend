import React, { useEffect, useState } from "react";
import LayOut from "../layouts/LayOut";
import { CoverImage, Map, Fields } from "../components";
import Geocode from "react-geocode";

const Contact = () => {
  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    Geocode.setApiKey("AIzaSyD84H0mc-PGPheGdDMUOBziugm4KPqjN6k");
    Geocode.setRegion("us");
    Geocode.fromAddress("151 E 50th St, New York, NY 10022").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCoordinates([lat, lng]);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  return (
    <LayOut>
      <CoverImage />
      <div className="row text-center mx-0">
        <div className="col-lg-7 px-0 map">
          {coordinates.length > 0 && (
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD84H0mc-PGPheGdDMUOBziugm4KPqjN6k&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{ margin: `0 30px`, height: `450px`, width: `100%` }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
              coordinates={coordinates}
            />
          )}
        </div>
        <div className="col-lg-5 px-0 ">
          <div className="contact-detail">
            <h4 className="text-uppercase">
              We Are Located In Downtown New York
            </h4>
            <h6 className="text-uppercase">Address</h6>
            <p>151 E 50th St, New York, NY 10022</p>
            <h6 className="text-uppercase">Phone Number</h6>
            <p>678 409 0605</p>
            <h6 className="text-uppercase">Email</h6>
            <p>info@empiresteakhouse.com</p>
          </div>
        </div>
      </div>
      <Fields />
    </LayOut>
  );
};

export default Contact;
