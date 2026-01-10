"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
      className="relative w-full h-[100%] bg-black py-24 min-h-[1000px] overflow-hidden"
    >
      {/* BACKGROUND TOPOGRAPHY PATTERN */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/topography.svg')`, // Ensure you have this pattern in your public folder
          backgroundSize: '800px',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* SECTION TITLE */}
        <h2 className="text-center font-montserrat text-white text-[32px] md:text-[40px] font-bold mb-20 tracking-[0.1em] uppercase">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* FAQ LIST - Exact 1212px width */}
        <div className="max-w-[1212px] mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={index}
                className="bg-[#F0F8FF] rounded-none transition-all duration-300 border-b border-black/5"
              >
                {/* QUESTION ROW */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left px-8 md:px-12 py-8"
                >
                  <span className="font-montserrat text-[20px] md:text-[23.93px] font-semibold text-[#141414] leading-[23.93px] tracking-tight">
                    {faq.question}
                    <span className="text-[#FE5800]">{faq.highlight}</span>
                  </span>

                  <span className="ml-4 text-black flex-shrink-0">
                    {isOpen ? (
                      <FiMinus size={28} strokeWidth={3} />
                    ) : (
                      <FiPlus size={28} strokeWidth={3} />
                    )}
                  </span>
                </button>

                {/* ANSWER ROW - Animated Expand/Collapse */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? "max-h-[300px] opacity-100 pb-10" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-8 md:px-12">
                    {/* Exact 992px width for answer text */}
                    <p className="font-montserrat text-[15px] leading-[20.93px] text-[#696666] max-w-[992px] font-normal">
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