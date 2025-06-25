import React from "react";
import "./WatchCard.css";
import Image from "next/image";
import Link from "next/link";

function WatchCard({ watches }: any) {
  return (
    <div className="gridCnt">
      {watches.map((watch: any) => {

         const modelSlug = watch.node.name
          .toLowerCase()
          .replace(/[^a-z0-9 ]/g, '')
          .split(' ')
          .slice(0, 6)
          .join('-');

        return (
          <div key={watch.node.slug} className="mainCnt">
            <Link
              className="innerCnt"
              href={`/collections/${watch.node.collections[0].slug}/${modelSlug}/${watch.node.slug}`}
            >
              <div className="imgCnt">
                <Image
                  src={watch.node.thumbnail.url}
                  width={300}
                  height={300}
                  alt={watch.node.name}
                />
              </div>
              <div className="modelCnt">
                <p>{watch.node.slug}</p>
              </div>
              <div className="titleCnt">
                <p>{watch.node.name}</p>
              </div>
              <div className="priceCnt">
                <p>
                  {
                    watch.node.channelListings[48].pricing.priceRange.start
                      .gross.currency
                  }
                </p>
                <p>
                  {watch.node.channelListings[48].pricing.priceRange.start.gross.amount.toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
                </p>
                <div className="info-logo">
                  <Image
                    src="https://www.breitling.com/_next/static/images/info-badge.svg"
                    width={13}
                    height={13}
                    alt={watch.node.name}
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default WatchCard;
