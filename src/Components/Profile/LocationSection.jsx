const LocationSection = ({ data }) => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Location</h2>
      {data.location ? (
        <p className="mt-2 text-[#6B6B76]">{data.location}</p>
      ) : (
        <p className="mt-2 text-[#6B6B76]">
          Location not specified. Adding your location can help clients find you more easily and improve your chances of getting hired.
        </p>
      )}
    </div>

  );
};

export default LocationSection;
