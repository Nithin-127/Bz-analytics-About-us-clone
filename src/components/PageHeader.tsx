"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PageHeader() {
  return (
    <>
      <section className="page-header">
            <div className="page-header__bg"></div>
            
            <div className="page-header__overlay"></div>
            
            <div className="container">
                <ul className="page-header__breadcrumb list-unstyled">
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                </ul>
                
                <h2 className="page-header__title">About Us</h2>
                
            </div>
            
        </section>
    </>
  );
}
