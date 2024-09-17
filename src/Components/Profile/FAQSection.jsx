const FAQSection = () => {
  const faqs = [
    {
      question: "What is your typical project turnaround time?",
      answer:
        "Typical projects take between 2 to 6 weeks depending on complexity and scope.",
    },
    {
      question: "Do you offer post-project support?",
      answer:
        "Yes, I provide a 30-day period for any adjustments or touch-ups needed.",
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">FAQs</h2>
      <div className="border-[#E1E4E8] mt-4 pt-4 border-t">
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-4">
            <h3 className="font-semibold text-[#32325D] text-xl">
              {faq.question}
            </h3>
            <p className="mt-1 text-[#4B4F56]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
