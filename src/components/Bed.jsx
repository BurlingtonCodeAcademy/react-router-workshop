import { Link } from "react-router-dom"

export default function Bed() {
 
    return(
        <>
          <h1>You realize you left it in yesterday's clothes, but they are in the bathroom.</h1>
          {/* use Link in place of a href to take back to the main page */}
          <Link to="/">Back to front door</Link>
        </>
        )
      
}