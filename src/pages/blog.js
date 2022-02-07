import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogCard from '../components/BlogContent/BlogCard'

const Blog = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Blog" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog" 
            />
            <BlogCard />
            <Footer />
        </Layout>
    );
}

export default Blog;