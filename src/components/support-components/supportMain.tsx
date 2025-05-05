import React from "react";
import CircleChevronRightIcon, { ChevronRightCircleIcon } from "lucide-react";

interface ContactBox {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  emoji: string;
}

const SupportMain = () => {
  const contactData: ContactBox[] = [
    {
      id: "general",
      title: "General Inquiries",
      description:
        "Got a question about Captain Track or just want to say hi? Reach out to our team, we're happy to help.",
      buttonText: "Contact Support",
      emoji: "😊",
    },

    {
      id: "drivers",
      title: "Driver Support",
      description:
        "Need help with tracking, account setup, or daily fees? Our driver support team is here for you.",
      buttonText: "Get Help",
      emoji: "😊",
    },
    {
      id: "merchants",
      title: "Merchants Support",
      description:
        "From setup to assigning drivers and tracking performance, we'll walk you through every step.",
      buttonText: "Get Help",
      emoji: "😊",
    },
    {
      id: "partnerships",
      title: "Partnerships & Business",
      description:
        "Looking to integrate Captain Track with your fleet or explore a partnership? Let's build something great together.",
      buttonText: "Schedule a Call",
      emoji: "😊",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {contactData.map((box) => (
          <div
            key={box.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-[#EFEFEF]"
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/src/design/general.svg"
                alt={box.title}
                className="w-6 h-6 rounded-full"
              />
              <h2 className="text-xl font-bold ">{box.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{box.description}</p>
            <button className="bg-[#F5A800] text-black font-bold px-4 py-2 rounded-md hover:bg-[#f5a700be] transition-colors flex items-center gap-2">
              {box.buttonText}
              <ChevronRightCircleIcon size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportMain;
