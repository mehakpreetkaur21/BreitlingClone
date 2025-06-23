import React from 'react';
import Image from 'next/image';

interface WatchCollectionProps {
  imageUrl: string;
  title: string;
  model: string;
  price: string;
  priceValue: string;
}

const WatchCollection: React.FC<WatchCollectionProps> = ({ imageUrl, title, model, price, priceValue }) => {
  return (
    <div className="collectionCardCnt">
      {imageUrl && (
        <div className="imageCnt">
          <Image
            src={imageUrl}
            width={100}
            height={100}
            alt={title || 'Watch Image'}
            className="watch-image"
          />
        </div>
      )}
      <div className="collectionCardDetails">
        helo
        <p className="collectionCardModel">{model}</p>
        <h3 className="collectionCardTitle">{title}</h3>
        <p className="collectionCardPrice">
          {price} {priceValue}
        </p>
      </div>
    </div>
  );
};

export default WatchCollection;
