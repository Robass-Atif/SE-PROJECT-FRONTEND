const ServicesSection = () => {
  const services = [
    {
      service: "Custom Furniture Design",
      description: "Design and build custom furniture tailored to your needs.",
      price: "$800 - $2500",
    },
    {
      service: "Cabinet Installation",
      description: "Expert installation of kitchen and bathroom cabinets.",
      price: "$600 - $1500",
    },
    {
      service: "Home Renovations",
      description:
        "Comprehensive renovation services for any room in your home.",
      price: "$1200 - $5000",
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Services</h2>
      <div className="mt-4">
        {services.map((svc) => (
          <div key={svc.service} className="border-[#E1E4E8] py-4 border-b">
            <h3 className="font-semibold text-[#32325D] text-xl">
              {svc.service}
            </h3>
            <p className="mt-1 text-[#4B4F56]">{svc.description}</p>
            <p className="mt-2 font-semibold text-[#32325D]">{svc.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
