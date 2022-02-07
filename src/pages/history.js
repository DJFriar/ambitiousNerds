import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import OurHistoryContentOne from '../components/History/OurHistoryContentOne'
import OurHistoryContentTwo from '../components/History/OurHistoryContentTwo'

const History = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="History" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="History" 
            />
            <OurHistoryContentOne />
            <OurHistoryContentTwo />
            <Footer />
        </Layout>
    );
}

export default History