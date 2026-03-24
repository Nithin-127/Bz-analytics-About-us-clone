import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBtn = () => {
  return (
    <div className="fixed z-40 right-5 bottom-5">
      <button className="p-3 bg-black text-primary rounded-full shadow-lg shadow-gray-300">
        <FaWhatsapp size={30} />
      </button>
    </div>
  );
};

export default WhatsAppBtn;
