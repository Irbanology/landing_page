 "use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/app/components/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    setSuccessMessage("");
    setErrorMessage("");

    if (!trimmedEmail) {
      setErrorMessage("Email is required.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEmail("");
      setSuccessMessage("You're subscribed!");
    } catch (error) {
      setErrorMessage("Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full h-auto lg:h-[480.78px] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #939393 0%, #808080 45%, #FE5800 100%)",
      }}
    >
      <Container className="h-full py-16 lg:py-[80px] flex flex-col lg:flex-row justify-between items-stretch">

        {/* LEFT CONTENT: Vertical space between Title and 'Stay Connected' */}
        <div className="flex flex-col justify-between w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="font-montserrat text-white text-[42px] md:text-[56px] lg:text-[64px] font-normal leading-[1.1] tracking-tight">
          Join our newsletter   <br />  for the latest updates
          </h2>

          <p className="font-montserrat text-white text-[18px] md:text-[20px] font-normal mt-10 lg:mt-0">
            Stay connected
          </p>
        </div>

        {/* RIGHT CONTENT: Form Aligned to the bottom right area */}
        <div className="w-full lg:w-[500px] xl:w-[600px] flex flex-col justify-end">
          <form className="w-full space-y-12" onSubmit={handleSubmit}>

            {/* First name field */}
            <div className="group">
              <label htmlFor="newsletter-firstname" className="block text-white text-[16px] mb-2 font-montserrat opacity-90">
                First name
              </label>
              <input
                id="newsletter-firstname"
                type="text"
                className="
                  w-full
                  bg-transparent
                  border-b border-white/80
                  text-white
                  text-[18px]
                  outline-none
                  pb-3
                  focus:border-white
                  transition-colors
                "
              />
            </div>

            {/* Email field with Arrow Icon */}
            <div className="group relative">
              <label htmlFor="newsletter-email" className="block text-white text-[16px] mb-2 font-montserrat opacity-90">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (errorMessage) setErrorMessage("");
                    if (successMessage) setSuccessMessage("");
                  }}
                  aria-invalid={Boolean(errorMessage)}
                  aria-describedby="newsletter-feedback"
                  className="
                    w-full
                    bg-transparent
                    border-b border-white/80
                    text-white
                    text-[18px]
                    outline-none
                    pb-3
                    pr-10
                    focus:border-white
                    transition-colors
                  "
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-0 pb-3 text-white transition-transform duration-300 hover:translate-x-1"
                >
                  {isSubmitting ? (
                    <span className="text-[14px] leading-none">Submitting...</span>
                  ) : (
                    <FiArrowRight size={28} strokeWidth={1.5} />
                  )}
                </button>
              </div>
              <p
                id="newsletter-feedback"
                className={`mt-3 text-[14px] font-montserrat ${
                  errorMessage ? "text-red-200" : "text-white/90"
                }`}
              >
                {errorMessage || successMessage}
              </p>
            </div>

          </form>
        </div>

      </Container>
    </section>
  );
}