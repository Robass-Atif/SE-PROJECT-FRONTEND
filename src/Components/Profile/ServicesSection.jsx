const ServicesSection = ({ data }) => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Services</h2>
      <div className="mt-4">
        {data && data.length > 0 ? (
          data.map((svc) => (
            <div key={svc._id} className="border-[#E1E4E8] py-4 border-b">
              <h3 className="font-semibold text-[#32325D] text-xl">
                {svc.title}
              </h3>
              <p className="mt-1 text-[#4B4F56]">{svc.description}</p>
              <p className="mt-2 font-semibold text-[#32325D]">{svc.price} RS</p>
            </div>
          ))
        ) : (
          <p className="text-[#4B4F56]">
            No services available. Add your services to attract more clients.
          </p>
        )}
      </div>
      <button className="mt-4 px-4 py-2 bg-[#5C6BC0] text-white font-semibold rounded-lg hover:bg-[#3E4B83]">
        Add Service
      </button>
    </div>
  );
};

export default ServicesSection;

