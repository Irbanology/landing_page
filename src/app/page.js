import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SecureCommunication from "@/app/components/SecureCommunication";
import Showcase from "@/app/components/Showcase";
import Section from "@/app/components/Section";
import Feature from "@/app/components/Feature";
import WhatWeDo from "@/app/components/WhatWeDo";
import HowItWork from "@/app/components/HowItWork";
import ContactForm from "@/app/components/ContactForm";
import Blog from "@/app/components/Blog";
import FAQ from "@/app/components/FAQ";
import Newsletter from "@/app/components/Newsletter";
import Footer from "@/app/components/Footer";
// import ChildSafetyPolicy from "@/app/policies/child-safety/page";

import ScrollToTop from "@/app/components/ScrollToTop";
import UnderConstruction from "@/app/components/underconstruction";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SecureCommunication />
        <Showcase />
        <Section />
        <Feature />
        <WhatWeDo />
        <HowItWork />
        <ContactForm />
        <Blog />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      {/* <ChildSafetyPolicy /> */}
      {/* <ScrollToTop /> */}
      {/* <UnderConstruction /> */}
    </>
  );
}
