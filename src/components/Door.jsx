import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles/styles.js";
import DoorAnim from "./DoorAnim";

export default function Door() {
  const [walletLoc, setWalletLoc] = useState({});
  const [h3Text, setH3Text] = useState("");
  const [didFind, setDidFind] = useState(false);

  //setting up useEffect to fetch from our api
  useEffect(() => {
    //fetching from route set up on server
    //turning the response from the server into a json object
    //setting our state to hold the json object
  });

  //creating a function to handle when the user hits the submit button
  const handleSubmit = (event) => {
    //prevents refresh of page
    //grabs the user input and sanitizes it
    //if the userInput matches a key in rooms and holds the value true
    //set didFind to true to trigger door animation
    //conditionally set text of h3 element
  };

  return (
    <>
      <div style={styles.Theme}>
        <h3 style={styles.Theme.h3}>{h3Text}</h3>
        <DoorAnim didFind={didFind} setDidFind={setDidFind} />
        <p>
          You are about to head out to the grocery store and realize you don't
          know where your wallet is. Time to go look around your apartment for
          it...
        </p>{" "}
        <div style={styles.Theme.buttonBox}>
          {/* using Link from React Router to connect to our other pages  */}
        </div>
        <form onSubmit={handleSubmit}>
          <label style={{ textDecoration: "underline" }}>
            What room was your wallet in?
            <input type="text" name="room" style={{ marginLeft: ".5vw" }} />
          </label>

          <input type="submit" value="Submit" style={styles.Theme.submit} />
        </form>
      </div>
    </>
  );
}
