import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

const TermsOfService = () => {
  return (
    <Layout>
      <Navbar />
      <PageBanner
        pageTitle="Terms of Service" 
        homePageText="Home" 
        homePageUrl="/" 
        activePageText="Terms of Service" 
      />
      <section className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="terms-of-service-content">
                Terms coming soon.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default TermsOfService;