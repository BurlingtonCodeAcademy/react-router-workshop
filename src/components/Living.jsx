import { Link } from "react-router-dom"

import { styles } from "../styles/styles.js";

export default function Living() {

    return(
        <>
        <div style = {styles.Theme}>
          <h1 style = {styles.Theme.header}>You know it's not here, but you waste time checking the couch cushions anyway.</h1>
          {/* use Link in place of a href to take back to the main page */}
          <Link to="/" style = {styles.Theme.buttons}>Back to front door</Link>
          </div>
        </>
        )
      
}