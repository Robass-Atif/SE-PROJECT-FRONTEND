

const AboutSection = ({data}) => {
  
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">About Me</h2>
      <p className="mt-2 text-[#6B6B76]">
        {data.about || 'Enhance your profile with a compelling About section to attract more clients and boost your sales'}
      </p>
    </div>
  );
};

export default AboutSection;
