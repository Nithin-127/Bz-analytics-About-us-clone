
"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import FloatingElements from '@/components/FloatingElements';
import ThemeToggle from '@/components/ThemeToggle';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // dynamically load the scripts
    const scriptLinks = [
      '/assets/vendors/jquery/jquery-3.5.1.min.js',
      '/assets/vendors/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/vendors/bootstrap-select/bootstrap-select.min.js',
      '/assets/vendors/jquery-ui/jquery-ui.js',
      '/assets/vendors/jarallax/jarallax.min.js',
      '/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js',
      '/assets/vendors/jquery-appear/jquery.appear.min.js',
      '/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js',
      '/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js',
      '/assets/vendors/jquery-validate/jquery.validate.min.js',
      '/assets/vendors/nouislider/nouislider.min.js',
      '/assets/vendors/odometer/odometer.min.js',
      '/assets/vendors/tiny-slider/tiny-slider.min.js',
      '/assets/vendors/owl-carousel/owl.carousel.min.js',
      '/assets/vendors/wnumb/wNumb.min.js',
      '/assets/vendors/jquery-circleType/jquery.circleType.js',
      '/assets/vendors/jquery-lettering/jquery.lettering.min.js',
      '/assets/vendors/wow/wow.js',
      '/assets/vendors/isotope/isotope.js',
      '/assets/vendors/countdown/countdown.min.js',
      '/assets/vendors/slick/slick.min.js',
      '/assets/js/ogency.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js',
      'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',
      '/assets/js/footer.js'
    ];

    let current = 0;
    function loadNext() {
      if (current >= scriptLinks.length) return;
      const s = document.createElement('script');
      s.src = scriptLinks[current];
      s.onload = loadNext;
      document.body.appendChild(s);
      current++;
    }
    loadNext();
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ThemeToggle />
      <div className="page-wrapper">
        <FloatingElements />
        
        <Navbar />
        <PageHeader />
        <AboutSection />
        <TeamSection />
        <TestimonialSection />
        <Footer />
        <MobileNav />
      </div>
    </>
  );
}

