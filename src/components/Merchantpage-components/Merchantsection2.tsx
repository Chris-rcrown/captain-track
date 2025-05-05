import React from 'react';

const MerchantSection2: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Age',
      desc:
        'Earn during evenings and weekends, or make more money by driving more frequently. It’s up to you.',
    },
    {
      number: '2',
      title: 'Vehicle',
      desc:
        'Earn during evenings and weekends, or make more money by driving more frequently. It’s up to you.',
    },
    {
      number: '3',
      title: 'Documentation',
      desc:
        'Earn during evenings and weekends, or make more money by driving more frequently. It’s up to you.',
    },
  ];

  return (
    <section
      className="
        relative
        bg-[#DF9900]
        bg-cover bg-center
        py-16
      "
    >
      {/* Heading */}
      <h2 className="text-white text-2xl md:text-4xl font-semibold text-center mb-12">
        Requirements
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        {/* Horizontal line behind the circles */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white opacity-50" />
          </div>

          {/* Steps */}
          <div className=" relative flex flex-col items-center space-y-12 md:flex-row md:space-y-0 md:space-x-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center px-4">
                {/* Circle */}
                <div
                  className={`
                    h-10 w-10 rounded-full bg-white flex items-center justify-center
                    ${step.number === '2' ? 'border-2 border-dashed border-white' : ''}
                  `}
                >
                  <span className="text-black font-semibold">{step.number}</span>
                </div>
                {/* Title */}
                <h3 className="mt-4 text-white font-medium">{step.title}</h3>
                {/* Description */}
                <p className="mt-2 text-sm text-white opacity-90">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantSection2;
