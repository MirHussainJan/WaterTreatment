import React from 'react'
import Header from '../components/Header'
import LeadingSolutions from '../components/LeadingSolutions'
import AdvancedTechnologies from '../components/AdvancedTechnologies'
import Certifications from '../components/Certifications'
import ProjectJourney from '../components/ProjectJourney'
import IndustriesServed from '../components/IndustriesServed'
import VideoSection from '../components/VideoSection'
import QualityProducts from '../components/QualityProducts'
import BlogSection from '../components/BlogSection'
import ClientTestimonials from '../components/Reviews'
import Clients from '../components/ClientTestimonials'
import Footer from '../components/Footer'
import HeroCarousel from '../components/HeroSection'
import BenefitsSection from '../components/BenefitsSection'
import Action from '../components/ui/Action'

const Home = () => {
    return (
        <div className="min-h-screen bg-white relative">
            <Header />
            <HeroCarousel />
            <LeadingSolutions />
            <AdvancedTechnologies />
            <Certifications />
            <ProjectJourney />
            <IndustriesServed />
            <VideoSection />
            <QualityProducts />
            <BlogSection />
            <BenefitsSection />
            <ClientTestimonials />
            <Clients />
            <Footer />
            <Action />
        </div>
    )
}

export default Home