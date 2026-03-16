"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileNav() {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>
            <div className="logo-box">
                <Link href="/home" aria-label="logo image"><img src="/assets/bz/bq.png" width="85" alt="BzAnalytics logo" loading="lazy"/></Link>
            </div>
            
            <div className="mobile-nav__container"></div>
            
            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <Link href="/consult"><button className="ogency-btn px-3 py-2 ">Schedule a consultation</button></Link>
                </li>
                <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:hello@bzanalytics.ai">hello@bzanalytics.ai</a>
                </li>
            </ul>
            
            <div className="mobile-nav__social">
                <a href="https://www.linkedin.com/company/bzanalytics/"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/Bzanalytics_AI"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.facebook.com/BzAnalytics-Private-Limited-108397978722176"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/bzanalytics/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@bzanalytics8849"><i className="fab fa-youtube"></i></a>
            </div>
            
        </div>
        
    </div>
    </>
  );
}
