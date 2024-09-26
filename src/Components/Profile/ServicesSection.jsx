const ServicesSection = ({data}) => {

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Services</h2>
      <div className="mt-4">
        {data.map((svc) => (
          <div key={svc._id} className="border-[#E1E4E8] py-4 border-b">
            <h3 className="font-semibold text-[#32325D] text-xl">
              {svc.title}
            </h3>
            <p className="mt-1 text-[#4B4F56]">{svc.description}</p>
            <p className="mt-2 font-semibold text-[#32325D]">{svc.price} RS</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
