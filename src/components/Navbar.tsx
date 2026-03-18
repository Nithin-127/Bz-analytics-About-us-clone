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

  const renderLanguageSelector = () => (
    <div className="select-container shrink-0">
      <div className="custom-select-wrapper" onClick={handleLangToggle}>
        <div className={`custom-select ${isLangOpen ? "open" : ""}`}>
          <div className="custom-select__trigger notranslate flex items-center justify-between gap-2 !px-3">
            <span id="selected-lang" className="flag-icon flex items-center gap-1">
              <img
                src={selectedLang.flag}
                alt={selectedLang.label}
                className="flag-icon-img"
                loading="lazy"
              />
              <span>{selectedLang.label}</span>
            </span>
            <div className="arrow1 ml-1 xl:ml-2 shrink-0"></div>
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
                  display: selectedLang.code === lang.code ? "none" : "flex",
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
          const lang = languages.find((l) => l.code === e.target.value);
          if (lang) handleLangSelect(lang);
        }}
      >
        <option value="en">EN</option>
        <option value="hi">HI</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );

  return (
    <>
      <header className="main-header main-header--with-border">
        <nav className="main-menu w-full relative">
          
          {/* 🔥 HEIGHT FIX APPLIED HERE */}
          <div className="container-fluid flex items-center justify-between w-full h-[60px] lg:h-[70px] py-[6px] !flex-nowrap">
            
            {/* LEFT */}
            <div className="flex-1 flex items-center justify-start shrink-0">
              <div className="main-menu__logo shrink-0 m-0">
                <Link href="/home">
                  <img
                    src="/assets/bz/bq.png"
                    width="160"
                    alt="BzAnalytics logo"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>

            {/* CENTER */}
            <div className="hidden min-[1200px]:flex items-center justify-center shrink-0 whitespace-nowrap z-[100] px-2 xl:px-4">
              <div className="main-menu__nav">
                <ul className="main-menu__list min-[1200px]:flex min-[1200px]:items-center min-[1200px]:justify-center min-[1200px]:gap-3 xl:gap-6 m-0 p-0">
                  
                  {["Home","About Us","Services","Success Stories","Blogs","Careers","Contact Us"].map((item, i) => (
                    <li key={i} className="dropdown min-[1200px]:shrink-0">
                      <Link
                        href={`/${item.toLowerCase().replace(/ /g, "")}`}
                        className="text-lg font-bold tracking-wide no-underline transition-all duration-300 hover:text-[#f5900d]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}

                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex items-center min-[1200px]:justify-between max-[1199px]:justify-end flex-nowrap shrink-0 max-[1199px]:gap-4">
              
              <div className="flex items-center shrink-0">
                <div id="google_translate_element" className="hidden sm:block shrink-0 mr-2 xl:mr-4"></div>
                {renderLanguageSelector()}
              </div>

              {/* 🔥 BUTTON HEIGHT FIX */}
              <div className="hidden min-[1200px]:flex main-menu__right items-center shrink-0">
                <Link href="/consult" className="shrink-0">
                  <button className="schedule-consultation ogency-btn px-10 lg:px-16 !h-[50px] lg:!h-[60px] !py-0 flex items-center justify-center text-[14px] lg:text-[17px] font-bold whitespace-nowrap tracking-wide">
                    Schedule a consultation
                  </button>
                </Link>
              </div>

              {/* MOBILE */}
              <a href="#" className="main-menu__toggler mobile-nav__toggler min-[1200px]:hidden ml-6 lg:ml-8 flex items-center justify-center shrink-0 h-[40px] w-[40px]">
                <i className="fa fa-bars text-3xl m-0 p-0 leading-none flex items-center"></i>
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