import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SecureCommunication from "@/app/components/SecureCommunication";
import Showcase from "@/app/components/Showcase";
import Section from "@/app/components/Section";
import Feature from "@/app/components/Feature";
import WhatWeDo from "@/app/components/WhatWeDo";
import UnderConstruction from "@/app/components/underconstruction";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SecureCommunication />
      <Showcase  />
      <Section  />
      <Feature  />
      <WhatWeDo />
      <UnderConstruction/>
    </>
  );
}
