"use client";
import React from "react";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import AboutSection from "@/components/AboutSection";

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <section className="page-header relative min-h-[40vh] flex items-center bg-[#101010] py-20">
        <BreadcrumbWrapper />
      </section>
      <AboutSection />
    </main>
  );
};

export default Page;
