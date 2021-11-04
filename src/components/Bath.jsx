import { Link } from "react-router-dom";

import { styles } from "../styles/styles.js";

export default function Bath() {
  return (
    <>
      <div style = {styles.Theme}>
        <h1 style={styles.Theme.header}>
          You find your wallet in your pants from yesterday!
        </h1>
        {/* use Link in place of a href to take back to the main page */}
        <Link to="/" style = {styles.Theme.buttons}>Back to front door</Link>
      </div>
    </>
  );
}

