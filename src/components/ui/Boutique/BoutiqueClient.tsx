// app/boutique/BoutiqueClient.tsx
'use client';

import Image from 'next/image';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import './Boutique.css';

type Location = {
  title: string;
  address: string;
  phone: string;
  image: string;
};

type Props = {
  locations: Location[];
};

export default function BoutiqueClient({ locations }: Props) {
  return (
    <div className='mainCnt'>
      <div className="header">
        <h1 className="title">BREITLING BOUTIQUE</h1>
      </div>

      <div className="cnt">
        <div className="locationsGrid">
          {locations.map((location, index) => (
            <div key={index} className="locationCard">
              <div className="imageContainer">
                <Image src={location.image} alt={location.title} fill className="locationImage" />
              </div>
              <div className="locationContent">
                <h3>{location.title}</h3>
                <p><MapPin size={16} style={{ marginRight: 6 }} />{location.address}</p>
                <p><Phone size={16} style={{ marginRight: 6 }} />{location.phone}</p>
                <div className="links">
                  <a href="#">Get Directions</a>
                  <a href="#">View More <ArrowRight size={14} /></a>
                </div>
                <button className="appointmentBtn">Book an Appointment</button>
              </div>
            </div>
          ))}
        </div>

        <div className="sidePanel">
          <Image src="https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/45zUbWeNMcy0mPOOXuc4a5/d367c1cfebd65ac41960605849cd8e98/Group_1739325817.png?imwidth=500&format=auto" alt="Breitling Logo" width={300} height={200} />
          <p>
            Visit us in a Breitling boutique or at official retailers and convince yourself of our high-quality products. Discover new models, get individual advice and find the Breitling watch that suits you best.
          </p>
          <button className="findStoreBtn">Find a Store</button>
        </div>
      </div>
    </div>
  );
}