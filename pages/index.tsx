import Head from 'next/head';
import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import ServicesSection from '../app/components/ServicesSection';
import TestimonialCarousel from '../app/components/TestimonialCarousel';
import Footer from '../app/components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>New Directions</title>
        <meta name="description" content="Since 1994 New Directions has provided quality recruitment and training services, including education, social care, domicilary care, and pharmaceuticals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>New Directions homepage</h1>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};

export default Home;
