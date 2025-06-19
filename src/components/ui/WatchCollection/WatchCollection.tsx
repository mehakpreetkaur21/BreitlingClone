import React from 'react'
import Image from 'next/image';



function WatchCollection({imageUrl, title, model, price, priceValue}: any) {
  return (
    <div className='collectionCardCnt'>
        <div className='imageCnt'><Image src={imageUrl} width={100} height={100} alt={title}/></div>
        <div className='collectionCardDetails'>
          <p className='collectionCardModel'>{model}</p>
          <h3 className='collectionCardTitle'>{title}</h3>
          <p className='collectionCardPrice'>{price} {priceValue}</p>

          </div>
    </div>
  )
}

export default WatchCollection;