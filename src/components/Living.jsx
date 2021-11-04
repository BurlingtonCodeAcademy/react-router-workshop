import { Link } from "react-router-dom"

export default function Living() {

    return(
        <>
          <h1>You know it's not here, but you waste time checking the couch cushions anyway.</h1>
          {/* use Link in place of a href to take back to the main page */}
          <Link to="/">Back to front door</Link>
        </>
        )
      
}