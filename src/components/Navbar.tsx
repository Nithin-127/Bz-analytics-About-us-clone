"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    label: "EN",
    flag: "/assets/images/resources/usa.png",
  });

  const languages = [
    { code: "en", label: "EN", flag: "/assets/images/resources/usa.png" },
    { code: "hi", label: "HI", flag: "/assets/images/resources/indiaflag.png" },
    { code: "ar", label: "AR", flag: "/assets/images/resources/uaeflag.png" },
  ];

  const handleLangToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLangOpen(!isLangOpen);
  };

  const handleLangSelect = (lang: typeof selectedLang, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  return (
    <>
      <header className="main-header main-header--with-border">
        <nav className="main-menu">
          <div className="container-fluid">

            {/* Logo */}
            <div className="main-menu__logo ml-[17px]">
              <Link href="/home">
                <img
                  src="/assets/bz/bq.png"
                  width="160"
                  alt="BzAnalytics logo"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="main-menu__nav">
              <ul className="main-menu__list flex items-center gap-3">

                <li className="dropdown">
                  <Link
                    href="/home"
                    className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                  >
                    Home
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="/about"
       className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                  >
                    About Us
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="/services"
                   className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                  >
                    Services
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="/portfolio"
                   className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                  >
                    Success Stories
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="/blogs"
                    className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                  >
                    Blogs
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="/careers"
                    className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                  >
                    Careers
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="/contact"
                   className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>

            {/* Google Translate */}
            <div id="google_translate_element"></div>

            {/* Language Selector */}
            <div className="select-container">
              <div className="custom-select-wrapper" onClick={handleLangToggle}>
                <div className={`custom-select ${isLangOpen ? "open" : ""}`}>
                  
                  <div className="custom-select__trigger notranslate">
                    <span id="selected-lang" className="flag-icon">
                      <img
                        src={selectedLang.flag}
                        alt={selectedLang.label}
                        className="flag-icon-img"
                        loading="lazy"
                      />{" "}
                      {selectedLang.label}
                    </span>
                    <div className="arrow1"></div>
                  </div>

                  <div
                    className="custom-options notranslate"
                    style={{ display: isLangOpen ? "block" : "none" }}
                  >
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className="custom-option"
                        onClick={(e) => handleLangSelect(lang, e)}
                        style={{
                          display:
                            selectedLang.code === lang.code ? "none" : "flex",
                        }}
                      >
                        <img
                          src={lang.flag}
                          alt={lang.label}
                          className="flag-icon-img"
                          loading="lazy"
                        />{" "}
                        {lang.label}
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              <select
                id="language-select"
                className="language-selector notranslate"
                style={{ display: "none" }}
                value={selectedLang.code}
                onChange={(e) => {
                  const lang = languages.find(
                    (l) => l.code === e.target.value
                  );
                  if (lang) handleLangSelect(lang);
                }}
              >
                <option value="en">EN</option>
                <option value="hi">HI</option>
                <option value="ar">AR</option>
              </select>
            </div>

            {/* Right Section */}
            <div className="main-menu__right">

              <Link href="/consult">
                <button className="schedule-consultation ogency-btn">
                  Schedule a consultation
                </button>
              </Link>

              <a href="#" className="main-menu__toggler mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>

            </div>

          </div>
        </nav>
      </header>

      {/* Sticky Header */}
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
}