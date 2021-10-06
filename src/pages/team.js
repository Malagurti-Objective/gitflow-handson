import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import TeamStyleOne from '../components/Team/TeamStyleOne'
 
const Team = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Membros" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Membros" 
            />
            <TeamStyleOne />
            <Footer />
        </Layout>
    );
}

export default Team