"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; 3
import Image from "next/image";


const faqs = [
  {
    question: "What is ",
    highlight: "Wibeit?",
    answer:
      "Wibeit is a secure messaging application designed to provide private, safe, and confidential communication. With end-to-end encryption, only you and the person you're communicating with can read your messages.",
  },
  {
    question: "How does Wibeit ensure ",
    highlight: "my messages are secure?",
    answer:
      "Wibeit uses strong end-to-end encryption combined with modern cryptographic standards, ensuring messages remain private and inaccessible to third parties.",
  },
  {
    question: "Does Wibeit collect ",
    highlight: "personal data?",
    answer:
      "Wibeit is designed with privacy-first principles. Minimal data is collected, and no unnecessary tracking is performed.",
  },
  {
    question: "Is Wibeit ",
    highlight: "free to use?",
    answer:
      "Yes, Wibeit is free to use with core features available at no cost.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative w-full py-24 min-h-[1000px] overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-cover"
        style={{
          backgroundImage: `url('/faq-bg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20">
        <h2 className="text-center font-montserrat text-white text-[32px] md:text-[40px] font-bold mb-20 tracking-[0.1em] uppercase">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-[1212px] mx-auto space-y-4 ">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#F0F8FF] border-b border-black/5 "
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left px-8 md:px-12 py-8"
                >
                  <span className="font-montserrat text-[20px] md:text-[23.93px] font-semibold text-[#141414]">
                    {faq.question}
                    <span className="text-[#FE5800]">{faq.highlight}</span>
                  </span>

                  {/* + / - ICON */}
                  <span className="flex items-center justify-center w-10 h-10 flex-shrink-0">
                    {isOpen ? (
                      <FiMinus size={28} className="text-black" />
                    ) : (
                      <FiPlus size={28} className="text-black" />
                    )}
                  </span>
                </button>


                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-10"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden px-8 md:px-12">
                    <p className="font-montserrat text-[15px] leading-[20.93px] text-[#696666] max-w-[992px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
