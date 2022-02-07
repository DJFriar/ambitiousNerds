import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from "../components/Index/Banner"
import OurServices from "../components/Index/OurServices"
// import RecentProjects from "../components/Index/RecentProjects"
import Testimonials from "../components/Index/Testimonials"
// import Partner from "../components/Index/Partner"
import ProjectStartArea from "../components/Index/ProjectStartArea"
import OurBlog from "../components/Index/OurBlog"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <OurServices />
      {/* <RecentProjects /> */}
      <Testimonials />
      {/* <Partner /> */}
      <OurBlog />
      <ProjectStartArea />
      <Footer />
    </Layout>
  )
}

export default Home