const AboutSection = ({data}) => {
  
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">About Me</h2>
      <p className="mt-2 text-[#6B6B76]">
        {data.about}
      </p>
    </div>
  );
};

export default AboutSection;
