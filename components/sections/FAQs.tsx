"use client";

const faqs = [
  {
    question: "How can I add money to my account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "How is my document data stored/secured?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "I do not want to pay now, how can I proceed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "How do I get started with card payments?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "Can I get a standard card for free?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "I don't have the required documents, how can I proceed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
];

export default function FAQs() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            className="text-center mb-12" 
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[44px] text-slate-800">
              FAQs
            </h2>
          </div>

          {/* FAQs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-6" 
                data-aos="fade-up" 
                data-aos-delay={300 + index * 100}
                data-aos-duration="1000"
              >
                <h4 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h4>
                <p className="text-slate-500 text-base leading-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

