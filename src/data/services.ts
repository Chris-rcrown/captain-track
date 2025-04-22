import rideHailing from '../design/Image (1).png';
import carWash from '../design/Image (2).png';
import houseCleaning from '../design/Image (3).png';
import houseMoving from '../design/Image (4).png';
import gasDelivery from '../design/Image (5).png';
import dryCleaning from '../design/Image (6).png';
import towingServices from '../design/Image (7).png';
import earnMore from '../design/Frame 16.png';
import expandCus from '../design/Frame 16 (1).png';

// Type definitions for service and about items
export interface ServiceItem {
  pic: string;
  title: string;
  desc: string;
}

export interface AboutCapTrckItem {
  pic: string;
  title: string;
  desc: string;
}

export const serviceData: ServiceItem[] = [
  {
    pic: rideHailing,
    title: 'Ride-Hailing',
    desc: 'Book, track, and pay for essential services from ride-hailing to car washes all in one place.',
  },
  {
    pic: carWash,
    title: 'Car Wash',
    desc: 'Request a professional car wash at your location, with options for premium detailing services.',
  },
  {
    pic: houseCleaning,
    title: 'House Cleaning',
    desc: 'Book expert cleaners for your home or office and enjoy a spotless space with minimal effort.',
  },
  {
    pic: houseMoving,
    title: 'House Moving',
    desc: 'Easily hire movers with the right truck size to transport your belongings safely and efficiently.',
  },
  {
    pic: gasDelivery,
    title: 'Gas Delivery',
    desc: 'Order cooking gas from trusted suppliers and get it delivered to your doorstep hassle-free.',
  },
  {
    pic: dryCleaning,
    title: 'Dry Cleaning',
    desc: 'Schedule a pick-up for your laundry and have your clothes cleaned and delivered back to you.',
  },
  {
    pic: towingServices,
    title: 'Towing Services',
    desc: 'Get fast and reliable towing assistance whenever your vehicle breaks down.',
  },
];

export const AboutCapTrck: AboutCapTrckItem[] = [
  {
    pic: earnMore,
    title: 'Earn more with CaptainTrack',
    desc: "Become a CaptainTrack driver and gain access to a steady stream of customers. Whether you're a ride-hailing driver, tow truck operator, or service provider, our platform connects you with people who need your services",
  },
  {
    pic: expandCus,
    title: 'Expand your Customer Reach',
    desc: "Become a CaptainTrack driver and gain access to a steady stream of customers. Whether you're a ride-hailing driver, tow truck operator, or service provider, our platform connects you with people who need your services",
  },
];
