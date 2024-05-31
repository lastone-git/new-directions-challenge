import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialCarousel from '../components/TestimonialSection';
import Footer from '../components/Footer';
import { Element } from 'react-scroll';
import JobSearch from '@/components/JobSearch';

const Home = () => {
  return (
    <>
      <Head>
        <title>New Directions</title>
        <meta name="description" content="Since 1994 New Directions has provided quality recruitment and training services, including education, social care, domicilary care, and pharmaceuticals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Element name="section1">
        <HeroSection />
      </Element>
      <Element name="section2">
        <JobSearch />
      </Element>
      <Element name="section3">
        <ServicesSection />
        <TestimonialCarousel />
      </Element>
      <Element name="section4">
        <Footer />
      </Element>
    </>
  );
};

export default Home;
