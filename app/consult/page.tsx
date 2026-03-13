import ConsultationForm from "@/components/ConsultationForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css"
import { GoDotFill } from "react-icons/go";

const page = () => {
  return (
    <>
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

       <div className="relative z-10 max-w-6xl mx-auto  w-full space-y-4 px-[15px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black dark:text-white text-[16px] md:text-[16px] font-medium hover:text-primary transition">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black dark:text-white text-sm md:text-lg font-medium">
                  Schedule a Consultation
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-black dark:text-white">
            Schedule a consultation
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      
    <section className="py-1 px-4 intro">
  <div className="max-w-4xl mx-auto text-center space-y-1 animate__animated animate__fadeInUp">
    
    {/* Dot */}
    <div className="flex justify-center text-primary text-sm">
      <GoDotFill />
    </div>

    {/* Subtitle */}
    <h4 className="text-muted-foreground text-sm md:text-lg font-semibold tracking-wider">
      CONSULT WITH BZ
    </h4>

    {/* Title */}
    <h2 className=" font-bold dark:text-white">
      Find a time to chat with Bz team
    </h2>

    {/* Description */}
    <p className="text-sm md:text-base text-black dark:text-gray-300 font-medium px-2 md:px-0">
      We’re ready to become your personal guide through the software
      experience as we bring your app or website to life. Use the form
      below to pick a time that works best for you.
    </p>

  </div>
</section>


      {/* forms */}
      <ConsultationForm />
    </>
  );
};

export default page;
