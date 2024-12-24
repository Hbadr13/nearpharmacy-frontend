"use client"
import React, { useEffect } from 'react';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import RecherchePharmacie from '@/components/RecherchePharmacie';
import Services from '@/components/Services';

const Page = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className='mt-20'>
      <div id="home">
        <RecherchePharmacie />
      </div>
      <div className='py-20 mt-10' id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="about">
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;
