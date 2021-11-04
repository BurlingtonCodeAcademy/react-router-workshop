import { Link } from "react-router-dom"

import { styles } from "../styles/styles.js";

export default function Bed() {
 
    return(
        <>
        <div style = {styles.Theme}>
          <h1 style ={styles.Theme.header}>You realize you left it in yesterday's clothes, but they are in the bathroom.</h1>
          {/* use Link in place of a href to take back to the main page */}
          <Link to="/" style = {styles.Theme.buttons}>Back to front door</Link>
          </div>
        </>
        )
      
}
