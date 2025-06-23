import Image from "next/image";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import './Boutique.css'

type BoutiqueProps = {
  images: { src: string; alt?: string | null }[];
};

const locations = [
  {
    title: "Breitling Boutique Coimbatore",
    address: "ZIMSON TIMES PVT LTD 8/4 SIEMA BUILDING RACE COURSE ROAD COIMBATORE",
    phone: "+917200317667",
  },
  {
    title: "Breitling Boutique Gurgaon",
    address: "UNIT NO. B-07 EMAAR CAPITAL TOWER 2 CITY OF TIME, M G ROAD GURGAON",
    phone: "+919211310964",
  },
  {
    title: "Breitling Boutique Pune",
    address: "UG 29 , MALL OF MILLENNIUM WAKAD , PIMPRI-CHINCHWAD PUNE",
    phone: "+919773684966",
  },
];

export default function Boutique({ images }: BoutiqueProps) {
  console.log("Images fetched for Boutique:");
  console.log(images);
  const selectedImages = [images[0], images[0], images[0]];

  return (
    <div className="mainCnt">
      <div className="header">
        <h1 className="title">BREITLING BOUTIQUE</h1>
      </div>

      <div className="cnt">
        <div className="locationsGrid">
          {locations.map((location, index) => (
            <div key={index} className="locationCard">
              <div className="imageContainer">
                {selectedImages[index]?.src ? (
                  <Image
                    src={selectedImages[index].src}
                    alt={selectedImages[index].alt || location.title}
                    fill
                    className="locationImage"
                  />
                ) : (
                  <div className="locationImage fallback">Image not available</div>
                )}
              </div>

              <div className="locationContent">
                <h3>{location.title}</h3>
                <p>
                  <MapPin size={16} style={{ marginRight: 6 }} />
                  {location.address}
                </p>
                <p>
                  <Phone size={16} style={{ marginRight: 6 }} />
                  {location.phone}
                </p>
                <div className="links">
                  <a href="#">Get Directions</a>
                  <a href="#">
                    View More <ArrowRight size={14} />
                  </a>
                </div>
                <button className="appointmentBtn">Book an Appointment</button>
              </div>
            </div>
          ))}
        </div>

        <div className="sidePanel">
          <Image
            src="https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/45zUbWeNMcy0mPOOXuc4a5/d367c1cfebd65ac41960605849cd8e98/Group_1739325817.png?imwidth=500&format=auto"
            alt="Breitling Logo"
            width={300}
            height={200}
          />
          <p>
            Visit us in a Breitling boutique or at official retailers and convince yourself of our high-quality products. Discover new models,
            get individual advice and find the Breitling watch that suits you best.
          </p>
          <button className="findStoreBtn">Find a Store</button>
        </div>
      </div>
    </div>
  );
}
