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
import { useQuery } from '@tanstack/react-query';
import Loader from "../loader";
import axios from 'axios';

const getUser = async (user_id) => {

  const response = await fetch(`https://backend-qyb4mybn.b4a.run/profile/user/${user_id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();

}

const getServices = async (user_id) => {
  try {
    const response = await axios.get(`https://backend-qyb4mybn.b4a.run/serviceProvider/get-user-services/${user_id}`);
    return response.data;

  } catch (error) {
    throw new Error('Error fetching services: ' + error.message);
  }
};

const ProfileRoutes = () => {
  const user_id = '66f2c46b560c53a133c31df9'
  const user_id2 = '66f3dcdf5d645bc64ce8534e' //For testing only

  const { data, error, isLoading } = useQuery({
    queryKey: ['user', user_id],
    queryFn: () => getUser(user_id),
  });

  const { data: servicesData, error: servicesError, isLoading: servicesLoading } = useQuery({
    queryKey: ['services', user_id2],
    queryFn: () => getServices(user_id2),
  });

  if (isLoading || servicesLoading) {
    return <Loader/>;
  }

  if (error || servicesError) {
    return <div>Error: {error.message || servicesError}</div>;
  }

  return (
    
    <div className="bg-[#F7F9FC] p-6 min-h-screen text-[#333] transition-colors duration-300">
      <div className="border-[#E1E4E8] bg-white shadow-lg mx-auto p-6 border rounded-lg max-w-4xl">
        <ProfileHeader data={{name:data.name , email:data.email , profile_image:data.profile_image}}/>
        <AboutSection data={{about:data.profile_description}}/>
        <SkillsSection data={{skills:data.skills}}/>
        <LanguagesSection data={{languages:data.language}}/>
        <LocationSection data={{location:data.location}}/>
        <ServicesSection data={servicesData}/>
        {/* <BookingSection />
        <PortfolioManager />
        <PricingSection />
        <FAQSection />
        <PrivacySection />
        <CallbackButton />
        <MapSection /> */}
      </div>
    </div>
  );
};

export default ProfileRoutes;
