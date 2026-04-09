 "use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/app/components/Container";

export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const hasOnlyLettersAndSpaces = (value) => /^[a-zA-Z\s]*$/.test(value);
  const trimmedEmail = email.trim();
  const trimmedFirstName = firstName.trim();

  const getNameError = () => {
    if (!trimmedFirstName) return "Please enter letters only";
    if (!hasOnlyLettersAndSpaces(firstName)) return "Please enter letters only";
    return "";
  };

  const getEmailError = () => {
    if (!trimmedEmail) return "Email is required.";
    if (!isValidEmail(trimmedEmail)) return "Please enter a valid email address";
    return "";
  };

  const emailError = getEmailError();
  const nameError = getNameError();
  const shouldShowNameError = submitAttempted || nameTouched;
  const shouldShowEmailError = submitAttempted || emailTouched;

  const handleNameChange = (event) => {
    const value = event.target.value;
    if (hasOnlyLettersAndSpaces(value)) {
      setFirstName(value);
      if (successMessage) setSuccessMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitAttempted(true);
    setNameTouched(true);
    setEmailTouched(true);

    setSuccessMessage("");
    if (nameError) {
      setNameErrorMessage(nameError);
      return;
    }
    setNameErrorMessage("");

    if (emailError) {
      setErrorMessage(emailError);
      return;
    }
    setErrorMessage("");

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFirstName("");
      setEmail("");
      setSuccessMessage("You're subscribed");
      setNameTouched(false);
      setEmailTouched(false);
      setSubmitAttempted(false);
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
                value={firstName}
                onChange={handleNameChange}
                onBlur={() => {
                  setNameTouched(true);
                  setNameErrorMessage(getNameError());
                }}
                aria-invalid={Boolean(shouldShowNameError && nameError)}
                className={`
                  w-full
                  bg-transparent
                  border-b
                  ${shouldShowNameError && nameError ? "border-red-300" : "border-white/80"}
                  text-white
                  text-[18px]
                  outline-none
                  pb-3
                  truncate
                  overflow-hidden
                  whitespace-nowrap
                  focus:border-white
                  transition-colors
                `}
              />
              {shouldShowNameError && nameError && (
                <p className="mt-3 text-[14px] font-montserrat text-red-200">
                  {nameErrorMessage || nameError}
                </p>
              )}
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
                    if (successMessage) setSuccessMessage("");
                  }}
                  onBlur={() => {
                    setEmailTouched(true);
                    setErrorMessage(getEmailError());
                  }}
                  aria-invalid={Boolean(shouldShowEmailError && emailError)}
                  aria-describedby="newsletter-feedback"
                  className={`
                    w-full
                    bg-transparent
                    border-b
                    ${shouldShowEmailError && emailError ? "border-red-300" : "border-white/80"}
                    text-white
                    text-[18px]
                    outline-none
                    pb-3
                    pr-10
                    focus:border-white
                    transition-colors
                  `}
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
                  shouldShowEmailError && emailError ? "text-red-200" : "text-white/90"
                }`}
              >
                {(shouldShowEmailError && emailError) || errorMessage || successMessage}
              </p>
            </div>

          </form>
        </div>

      </Container>
    </section>
  );
}