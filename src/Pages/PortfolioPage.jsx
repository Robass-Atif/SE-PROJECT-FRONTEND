import React from "react";

import AboutSection from "../Components/Profile/AboutSection";
import SkillsSection from "../Components/Profile/SkillsSection";
import LanguagesSection from "../Components/Profile/LanguagesSection";
import LocationSection from "../Components/Profile/LocationSection";
import ServicesSection from "../Components/Profile/ServicesSection";
import BookingSection from "../Components/Profile/BookingSection";
import PricingSection from "../Components/Profile/PricingSection";
import FAQSection from "../Components/Profile/FAQSection";
import PrivacySection from "../Components/Profile/PrivacySection";
import MapSection from "../Components/Profile/MapSection";
import CallbackButton from "../Components/Profile/CallbackButton";
import PortfolioManager from "../Components/Portfolio/PortfolioManager";
import ProfileHeader from "../Components/Profile/ProfileHeader";

const ProfilePage = () => {
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

export default ProfilePage;
