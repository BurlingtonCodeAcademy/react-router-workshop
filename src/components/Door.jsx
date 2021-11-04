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
    fetch("http://localhost:5000/api")
      .then((res) => {
        //turning the response from the server into a json object
        return res.json();
      })
      //setting our state to hold the json object
      .then((json) => {
        setWalletLoc(json);
      });
    //having this useEffect fire upon usage of setWalletLoc
  }, [setWalletLoc]);

  //creating a function to handle when the user hits the submit button
  const handleSubmit = (event) => {
    //prevents refresh of page
    event.preventDefault();

    //grabs the user input and sanitizes it
    let userInput = event.target.room.value.toLowerCase();

    //if the userInput matches a key in rooms and holds the value true
    if (walletLoc.rooms[userInput] === "true") {
      //set didFind to true to trigger door animation
      setDidFind(true);
      //conditionally set text of h3 element
      setH3Text("You're all ready to head to the Co-Op!");
    } else {
      setH3Text(
        "You didn't find it there... how are you going to buy your favorite local Vermont vegan cheesecake without your wallet?"
      );
    }
  };

  return (
    <>
      <div style={styles.Theme}>
        <h3 style={styles.Theme.header}>{h3Text}</h3>
        <DoorAnim didFind={didFind} setDidFind={setDidFind} />
        <p>
          You are about to head out to the grocery store and realize you don't
          know where your wallet is. Time to go look around your apartment for
          it...
        </p>
        <div style={styles.Theme.buttonBox}>
          {/* using Link from React Router to connect to our other pages  */}
          <Link to="/bedroom" style={styles.Theme.buttons}>
            Bedroom
          </Link>
          <Link to="/livingroom" style={styles.Theme.buttons}>
            Living
          </Link>

          <Link to="/bathroom" style={styles.Theme.buttons}>
            Bathroom
          </Link>
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
