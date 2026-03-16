"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FloatingElements() {
  return (
    <>
      <div className="custom-cursor__cursor"></div>\n<div className="custom-cursor__cursor-two"></div>\n<a href="https://wa.me/971545578355?text=Hi" className="float" target="_blank">
<i className="fa fa-whatsapp my-float"></i>
</a>\n<a href="#" className="scroll-top">
    <svg className="scroll-top__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
</a>
    </>
  );
}
