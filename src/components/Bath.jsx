import { Link } from "react-router-dom"

export default function Bath() {
    return(
        <>
          <h1>You find your wallet in your pants from yesterday!</h1>
          {/* use Link in place of a href to take back to the main page */}
          <Link to="/">Back to front door</Link>
        </>
        )
      }
