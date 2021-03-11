// import React from "react"
// import { Link } from "gatsby"




// export default function Home() {
//   return (
//     <div>
//     {/* <div style={{ color: `purple` }}> */}
//      <Link to="/contact/">Contact</Link>
     
//       <h1>Hello Gatsby!</h1>
//       <p>What a world.</p>
//       <img src="https://source.unsplash.com/random/400x200" alt="" />

      

//       {/* <PrimaryButton>Click me</PrimaryButton> */}
//       {/* <button class="primary-button">Click me</button> */}
//     </div>
//   )
// }



import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Layout>
      <Header/>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <Footer/>
    </Layout>
  )
}