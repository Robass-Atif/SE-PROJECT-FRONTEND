import React from "react";

import AboutSection from "../Profile/AboutSection";
import SkillsSection from "../Profile/SkillsSection";
import LanguagesSection from "../Profile/LanguagesSection";
import LocationSection from "../Profile/LocationSection";
import ServicesSection from "../Profile/ServicesSection";
import BookingSection from "../Profile/BookingSection";
import PricingSection from "../Profile/PricingSection";
import FAQSection from "../Profile/FAQSection";
import PrivacySection from "../Profile/PrivacySection";
import MapSection from "../Profile/MapSection";
import CallbackButton from "../Profile/CallbackButton";
import PortfolioManager from "../Portfolio/PortfolioManager";
import ProfileHeader from "../Profile/ProfileHeader";

const ProfileRoutes = () => {
  return (
    <div className="bg-[#F7F9FC] p-6 min-h-screen text-[#333] transition-colors duration-300">
      <div className="border-[#E1E4E8] bg-white shadow-lg mx-auto p-6 border rounded-lg max-w-4xl">
        <ProfileHeader />
        <AboutSection />
        <SkillsSection />
        <LanguagesSection />
        <LocationSection />
        <ServicesSection />
        <BookingSection />
        <PortfolioManager />
        <PricingSection />
        <FAQSection />
        <PrivacySection />
        <CallbackButton />
        <MapSection />
      </div>
    </div>
  );
};

export default ProfileRoutes;
