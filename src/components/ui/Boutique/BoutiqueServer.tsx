'use server';

import BoutiqueClient from './BoutiqueClient';

const locations = [
  {
    title: 'Breitling Boutique Coimbatore',
    address: 'ZIMSON TIMES PVT LTD 8/4 SIEMA BUILDING RACE COURSE ROAD COIMBATORE',
    phone: '+917200317667',
    image: 'https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/jV33sLDHfZ6nS3NCFoG0FiXjjxNUEUk7mnLaoEbgHf8/1920x583.jpg?imwidth=500&format=auto',
  },
  {
    title: 'Breitling Boutique Gurgaon',
    address: 'UNIT NO. B-07 EMAAR CAPITAL TOWER 2 CITY OF TIME, M G ROAD GURGAON',
    phone: '+919211310964',
    image: 'https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/jV33sLDHfZ6nS3NCFoG0FiXjjxNUEUk7mnLaoEbgHf8/1920x583.jpg?imwidth=500&format=auto',
  },
  {
    title: 'Breitling Boutique Pune',
    address: 'UG 29 , MALL OF MILLENNIUM WAKAD , PIMPRI-CHINCHWAD PUNE',
    phone: '+919773684966',
    image: 'https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/jV33sLDHfZ6nS3NCFoG0FiXjjxNUEUk7mnLaoEbgHf8/1920x583.jpg?imwidth=500&format=auto',
  },
];

export default async function BoutiqueServer() {
  return <BoutiqueClient locations={locations} />;
}