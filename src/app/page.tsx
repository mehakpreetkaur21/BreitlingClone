'use server';

import React from 'react';
import BreitlingStraps from '@/components/ui/BreitlingStraps/BreitlingStraps';
import Boutique from '@/components/ui/Boutique/BoutiqueServer';
import Discover from '@/components/ui/Discover/DiscoverServer';
import Features from '@/components/ui/Features/Features';
import Gallery from '@/components/ui/Gallery/Gallery';
import WatchShowcase from '@/components/ui/WatchShowcase/WatchShowcase';
import VideoCarouselWrapper from '@/components/ui/VideoCarousel/VideoCarouselWrapper';

interface ImageData {
  src: string;
  alt: string | null;
}

// Fetch images for Discover, Gallery, WatchShowcase
async function getMainImages(): Promise<ImageData[]> {
  const res = await fetch(
    'https://cdn77.api.userway.org/api/img-dscr/v2/WxoHuxQ8KD/1752791/GSZKN1rUeSAJMi91/alts.json?dto=%7B%22sorted%22%3A%5B%7B%22src%22%3A%22https%3A%2F%2Fcdn.cookielaw.org%2Flogos%2Fstatic%2Fot_company_logo.png%22%2C%22alt%22%3A%22Company%20Logo%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Fbreitling-140.svg%22%2C%22alt%22%3A%22breitling%20Logo%20in%20logo140%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2F_next%2Fstatic%2Fimages%2Finfo-badge.svg%22%2C%22alt%22%3A%22infoBadge%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F1TsNF6RfhWzvX7p04yfFbz%2Fb6e019a3b8e4bb6e6c942d07ed48e429%2Fc_g-sub-banner.jpg%22%2C%22alt%22%3A%22HP%20Sub%20banner%20-%20Cutler%20%26%20Gross%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2n7vMYbPpLZQqTw4Qml2ib%2Ff393ea70e19060a1660df50d19e0c5a9%2Fnavitimer.png%22%2C%22alt%22%3A%22collection%20-%20Navitimer%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F2pVwY1VARlHQ7i0VZgVSSJ%2F3ea579c72354fef7911518bb45751234%2FHP-women.jpg%22%2C%22alt%22%3A%22Actress%20Charlize%20Theron%20wears%20a%20Breilting%20watch%20on%20her%20wrist.%22%2C%22dir%22%3A%22RO%22%7D%5D%2C%22tier%22%3A%22PAID_QUOTA_TIER%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fin-en%2F%22%7D',
    { cache: 'no-store' }
  );
  const json = await res.json();
  return json.payload.missingAlts;
}

// Fetch images for Boutique and BreitlingStraps
async function getBoutiqueAndStrapsImages(): Promise<ImageData[]> {
  const res = await fetch(
    'https://cdn77.api.userway.org/api/img-dscr/v2/WxoHuxQ8KD/1752791/GSZKN1rUeSAJMi91/alts.json?dto=%7B%22sorted%22%3A%5B%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fa.mktgcdn.com%2Fp%2FjV33sLDHfZ6nS3NCFoG0FiXjjxNUEUk7mnLaoEbgHf8%2F1920x583.jpg%22%2C%22alt%22%3A%22BREITLING%20BOUTIQUE%20PUNE%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F1gG5P1CYo652jCQws0sEHn%2F810073117b6c6e74531288215ba8a155%2Fstrap_horizontal.png%22%2C%22alt%22%3A%22A%20bracelet%20set%20with%20different%20bracelets%20plus%20changing%20tool.%22%2C%22dir%22%3A%22RO%22%7D%5D%2C%22tier%22%3A%22PAID_QUOTA_TIER%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fin-en%2F%22%7D',
    { cache: 'no-store' }
  );
  const json = await res.json();
  return json.payload.missingAlts;
}

export default async function Page() {
  const mainImages = await getMainImages();
  const boutiqueStrapsImages = await getBoutiqueAndStrapsImages();

  return (
    <div>
      <VideoCarouselWrapper useClientSide={true} initialSlide={0} />
      <Gallery images={mainImages} />
      <WatchShowcase images={mainImages} />
      <Discover images={mainImages} />
      <BreitlingStraps images={boutiqueStrapsImages} />
      {/* <Boutique images={boutiqueStrapsImages} /> */}
    </div>
  );
}
