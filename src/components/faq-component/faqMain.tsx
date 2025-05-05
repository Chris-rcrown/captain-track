import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  customer: FAQItem[];
  drivers: FAQItem[];
  merchants: FAQItem[];
};

const FaqMain = () => {
  const [activeTab, setActiveTab] = useState<
    "customer" | "drivers" | "merchants"
  >("customer");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqData: FAQCategory = {
    customer: [
      {
        question: "What types of businesses can use Captain Track?",
        answer:
          "Captain Track is designed for all delivery and transportation businesses including food delivery, courier services, and ride-sharing.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply download our driver app, complete the registration process, and attend a short orientation session.",
      },
      {
        question: "Do I need any hardware or devices to use Captain Track?",
        answer:
          "You only need a smartphone with GPS capabilities. We provide optional in-vehicle tracking devices for enhanced features.",
      },
      {
        question: "How does the daily charge work for drivers?",
        answer:
          "Our daily charge is a simple, transparent fee structure designed with drivers in mind.",
      },
      {
        question: "Can I assign multiple drivers to a single vehicle?",
        answer: "Yes, our system fully supports multiple drivers per vehicle ",
      },
      {
        question: "Will I see real-time tracking of my drivers?",
        answer: "Yes, our system provides comprehensive real-time tracking ",
      },
    ],
    drivers: [
      {
        question: "What types of businesses can use Captain Track?",
        answer:
          "Captain Track is designed for all delivery and transportation businesses including food delivery, courier services, and ride-sharing.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply download our driver app, complete the registration process, and attend a short orientation session.",
      },
      {
        question: "Do I need any hardware or devices to use Captain Track?",
        answer:
          "You only need a smartphone with GPS capabilities. We provide optional in-vehicle tracking devices for enhanced features.",
      },
    ],
    merchants: [
      {
        question: "How do I integrate Captain Track with my online store?",
        answer:
          "We provide plugins for all major e-commerce platforms and a simple API for custom integrations.",
      },
      {
        question: "Can I set delivery zones for my business?",
        answer:
          "Yes, our merchant dashboard allows you to define custom delivery zones with different pricing rules.",
      },
      {
        question: "How do I manage multiple drivers?",
        answer:
          "Our merchant portal gives you a complete overview of all your drivers, with real-time tracking and performance metrics.",
      },
    ],
  };

  const currentFaqs = faqData[activeTab];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const changeTab = (tab: "customer" | "drivers" | "merchants") => {
    setActiveTab(tab);
    setExpandedIndex(null); // Collapse all when changing tabs
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 font-sans">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Frequently Asked Questions
      </h1>

      <div className="flex items-center justify-center border-gray-200 mb-6 overflow-x-auto">
        <button
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap focus:outline-none transition-colors ${
            activeTab === "customer"
              ? "text-[#F5A800] border-b-2 border-[#F5A800]"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => changeTab("customer")}
        >
          Customer
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap focus:outline-none transition-colors ${
            activeTab === "drivers"
              ? "text-[#F5A800] border-b-2 border-[#F5A800]"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => changeTab("drivers")}
        >
          Drivers
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap focus:outline-none transition-colors ${
            activeTab === "merchants"
              ? "text-[#F5A800] border-b-2 border-[#F5A800]"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => changeTab("merchants")}
        >
          Merchants
        </button>
      </div>

      <div className="space-y-3">
        {currentFaqs.length > 0 ? (
          currentFaqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all"
            >
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none bg-[#EFEFEF] hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-${activeTab}-${index}`}
              >
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 text-left">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-${activeTab}-${index}`}
                className={`px-4 py-3 bg-gray-50 transition-all duration-200 ${
                  expandedIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">
            No questions available for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default FaqMain;
