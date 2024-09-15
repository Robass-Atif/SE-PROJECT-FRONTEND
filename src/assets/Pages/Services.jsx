import React from 'react'
import ServicesCard from '../Components/Services/ServicesCard';

const services = [
    {
        id: 1,
        title: "Electrical Repair",
        description: "Expert electrical repair services to fix any issues in your home or office.",
        price: "$150",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
    {
        id: 2,
        title: "Plumbing",
        description: "Reliable plumbing services to handle all your pipe and fixture needs.",
        price: "$120",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
    {
        id: 3,
        title: "Gardening",
        description: "Comprehensive gardening services including planting, weeding, and lawn care.",
        price: "$80",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
    {
        id: 4,
        title: "House Cleaning",
        description: "Thorough cleaning services to keep your home sparkling and tidy.",
        price: "$100",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
    {
        id: 5,
        title: "Painting",
        description: "Professional painting services for both interior and exterior projects.",
        price: "$200",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
    {
        id: 6,
        title: "Carpentry",
        description: "Skilled carpentry services for custom furniture and home repairs.",
        price: "$250",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
    {
        id: 7,
        title: "Roofing",
        description: "Reliable roofing services for installations, repairs, and maintenance.",
        price: "$300",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
    {
        id: 8,
        title: "Pest Control",
        description: "Effective pest control services to keep your home free of unwanted guests.",
        price: "$90",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
    },
];



const Services = () => {
  return (
    <>
    <section className="py-10">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map(services => (
                    <ServicesCard
                        key={services.id}
                        title={services.title}
                        description={services.description}
                        price={services.price}
                        image={services.image}
                    />
                ))}
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Services
