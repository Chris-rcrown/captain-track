import React from 'react';
import Drive from '../../design/drive.png';
import Transparent from '../../design/transparent.png';
import Single from '../../design/single.png';
import Phone from '../../design/merchantpagephone.png';

const MerchantSection1: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Why Drive with Captain Track --- */}
        <div className='flex flex-col items-center mb-16'>
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
            Why Drive With Captain Track
            </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              img: Drive,
              title: 'Drive and earn when you like',
              desc: "Earn during evenings and weekends, or make more money by driving more frequently. It's up to you.",
            },
            {
              img: Transparent,
              title: 'Transparent earnings & bonuses',
              desc: 'Earn more when you drive well, get clear, trackable bonuses based on your rating.',
            },
            {
              img: Single,
              title: 'Single Daily Tracking Fee',
              desc: 'No more deductions per trip, just one low fee per day no matter how many trips you take.',
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            >
              <img src={f.img} alt={f.title} className="w-12 h-12 mb-4" />
              <h5 className="font-semibold text-lg mb-2">{f.title}</h5>
              <p className="text-sm text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center mt-16 md:flex-row md:justify-center'>
                {/* --- Phone Screenshot --- */}
                <div className="mt-16 flex justify-center bg-[#FEF6E6]">
                <img
                    src={Phone}
                    alt="App screenshot on phone"
                    className="w-full max-w-sm object-contain"
                />
                </div>

                {/* --- How It Works --- */}
                <div className="mt-20 max-w-3xl mx-auto md:w-525px md:ml-667px">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4">
                        How It Works
                    </h2>
                    <p className="text-center md:text-left text-gray-800 mb-8">
                        No more deductions per trip, just one low fee per day no matter how many trips you take.
                    </p>

                    <ol className="space-y-6">
                        {[
                        {
                            step: '01',
                            title: 'Sign up & get verified',
                            desc: 'Create your account and complete a simple verification process.',
                        },
                        {
                            step: '02',
                            title: 'Accept a Ride',
                            desc: 'Get matched and accept your first ride or trip through the platform.',
                        },
                        {
                            step: '03',
                            title: 'Start Driving & Get Tracked',
                            desc: 'Your trips are tracked automatically with live updates.',
                        },
                        {
                            step: '04',
                            title: 'View Reports & Boost Trust',
                            desc: 'Access trip history, performance stats, and build credibility.',
                        },
                        {
                            step: '05',
                            title: 'Earn & Enjoy Daily Savings',
                            desc: 'Pay just once per day and qualify for bonuses based on your ratings.',
                        },
                        ].map((item) => (
                        <li key={item.step} className="flex items-start">
                            <div className="flex-shrink-0">
                            <div className="h-8 w-8 flex items-center justify-center bg-[#F5A800] text-white rounded-full ">
                                {item.step}
                            </div>
                            </div>
                            <div className="ml-4">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-700">{item.desc}</p>
                            </div>
                        </li>
                        ))}
                    </ol>
                </div>
        </div>

      </div>
    </section>
  );
};

export default MerchantSection1;
