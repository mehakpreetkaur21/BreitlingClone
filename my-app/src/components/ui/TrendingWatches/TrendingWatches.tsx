// TrendingWatches.tsx - Server Component
import { getTrendingWatches, formatPrice } from './watchData';
import WishlistButton from './WishlistButton';
import { Suspense } from 'react';
import './TrendingWatches.css'
// Server Component - handles data fetching
export default async function TrendingWatches() {
  // Fetch data on server
  const { watches, lastUpdated } = await getTrendingWatches();
  // Transform data for client component
  const clientWatches = watches.map(watch => ({
    id: watch.id,
    model: watch.model,
    name: watch.name,
    variant: watch.variant,
    price: formatPrice(watch.price, watch.currency),
    images: watch.images,
    colors: watch.colors,
    isNew: watch.isNew,
    availability: watch.availability
  }));
  return (
    <div className="trending-watches-container">
      <div className="trending-watches-client">
        <header className="trending-header">
          <h1 className="trending-title">TRENDING NOW</h1>
        </header>
        <div className="watches-container">
          <div className="watches-list">
            {clientWatches.map((watch) => (
              <article
                key={watch.id}
                className="watch-card"
              >
                <div className="watch-card-inner">
                  {/* Badges */}
                  {watch.isNew && (
                    <div className="new-badge">
                      <span>NEW</span>
                    </div>
                  )}
                  {watch.availability === 'pre-order' && (
                    <div className="availability-badge">
                      <span>PRE-ORDER</span>
                    </div>
                  )}
                  {/* Wishlist - Client Component */}
                  <div className="wishlist-container">
                    <Suspense fallback={<div className="wishlist-button-loading"></div>}>
                      <WishlistButton watchId={watch.id} />
                    </Suspense>
                  </div>
                  {/* Image */}
                  <div className="watch-image-container">
                    <img
                      src={watch.images.default}
                      alt={watch.images.alt || `${watch.name} ${watch.variant}`}
                      className="watch-image"
                    />
                  </div>
                  {/* Details */}
                  <div className="watch-details">
                    <div className="watch-model">{watch.model}</div>
                    <h2 className="watch-name">{watch.name}</h2>
                    <div className="watch-variant">{watch.variant}</div>
                    {/* Price */}
                    <div className="watch-price-discover-wrapper">
                      <div className="watch-price-container">
                        <div className="price-icon">₹</div>
                        <span className="watch-price">{watch.price || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// Loading component
function TrendingWatchesLoading() {
  return (
    <div className="trending-watches-loading">
      <div className="trending-header">
        <div className="loading-title">
          <div className="loading-shimmer"></div>
        </div>
      </div>
      <div className="watches-loading-container">
        <div className="watches-loading-list">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="watch-loading-card">
              <div className="watch-loading-image">
                <div className="loading-shimmer"></div>
              </div>
              <div className="watch-loading-details">
                <div className="loading-shimmer loading-text-sm"></div>
                <div className="loading-shimmer loading-text-md"></div>
                <div className="loading-shimmer loading-text-sm"></div>
                <div className="loading-shimmer loading-text-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Error Boundary Component
export function TrendingWatchesError({
  error,
  reset
}: {
  error: Error,
  reset: () => void
}) {
  return (
    <div className="trending-watches-error">
      <div className="error-content">
        <h2>Unable to load trending watches</h2>
        <p>We're having trouble loading the latest watch collection. Please try again.</p>
        <button
          onClick={reset}
          className="error-retry-button"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}