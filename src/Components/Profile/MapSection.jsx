const MapSection = () => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">
        Map and Location
      </h2>
      <div className="border-[#E1E4E8] bg-[#F0F4F8] mt-4 p-4 border rounded-lg">
        <p className="text-[#4B4F56]">Here is my location:</p>
        <iframe
          width="100%"
          height="300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.377817095759!2d-122.41687908468167!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cc732eb7f%3A0x2621ccf16ec0e1e3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647959240822!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          className="shadow-lg rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
