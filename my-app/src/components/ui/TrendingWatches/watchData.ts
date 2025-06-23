export interface WatchData {
  id: number;
  model: string;
  name: string;
  variant: string;
  price: string;
  currency: string;
  images: {
    default: string;
    hover: string;
    alt?: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
  };
  isNew: boolean;
  category: string;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  specifications?: {
    movement: string;
    caseDiameter: string;
    waterResistance: string;
    material: string;
  };
}
export interface TrendingWatchesResponse {
  watches: WatchData[];
  totalCount: number;
  lastUpdated: string;
}
// Mock data - In real app, this would come from database/API
export const mockWatchesData: WatchData[] = [
  {
    id: 1,
    model: "UB31121B1C1S1",
    name: "SUPEROCEAN HERITAGE B31 AUTOMATIC",
    variant: "64",
    price: "749,700.00",
    currency: "INR",
    images: {
      default: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ub3112161c1s1-soldier_5675be7d_thumbnail_1024.webp?imwidth=780&format=auto",
      hover: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ub3112161c1s1-three-quarter_573bb96c_thumbnail_1024.webp?imwidth=780&format=auto",
      alt: "Blue Superocean Heritage B31 Automatic Watch"
    },
    colors: {
      primary: "#1E3A8A",
      secondary: "#F59E0B",
      accent: "#0891B2"
    },
    isNew: true,
    category: "Heritage",
    availability: "in-stock",
    specifications: {
      movement: "Automatic",
      caseDiameter: "44mm",
      waterResistance: "200m",
      material: "Stainless Steel"
    }
  },
  {
    id: 2,
    model: "AB31112A1B1A1",
    name: "SUPEROCEAN HERITAGE B31 AUTOMATIC",
    variant: "42",
    price: "597,800.00",
    currency: "INR",
    images: {
      default: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab3111241b1a1-soldier_0510c73d_thumbnail_1024.webp?imwidth=384&format=auto",
      hover: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab3111241b1a1-three-quarter_7ad07f88_thumbnail_1024.webp?imwidth=780&format=auto",
      alt: "Black Superocean Heritage B31 Automatic Watch"
    },
    colors: {
      primary: "#000000",
      secondary: "#6B7280",
      accent: "#374151"
    },
    isNew: true,
    category: "Heritage",
    availability: "in-stock",
    specifications: {
      movement: "Automatic",
      caseDiameter: "42mm",
      waterResistance: "200m",
      material: "Stainless Steel"
    }
  },
  {
    id: 3,
    model: "AB31103B1L1S1",
    name: "SUPEROCEAN HERITAGE B31 AUTOMATIC",
    variant: "40",
    price: "568,400.00",
    currency: "INR",
    images: {
      default: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab3110361l1s1-soldier_b974f661_thumbnail_1024.webp?imwidth=780&format=auto",
      hover: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab3110361l1s1-three-quarter_7a322eaa_thumbnail_1024.webp?imwidth=780&format=auto",
      alt: "Green Superocean Heritage B31 Automatic Watch"
    },
    colors: {
      primary: "#166534",
      secondary: "#6B7280",
      accent: "#059669"
    },
    isNew: true,
    category: "Heritage",
    availability: "in-stock",
    specifications: {
      movement: "Automatic",
      caseDiameter: "40mm",
      waterResistance: "200m",
      material: "Stainless Steel"
    }
  },
  {
    id: 4,
    model: "AB31101A1C1S1",
    name: "SUPEROCEAN HERITAGE B31 AUTOMATIC",
    variant: "40 KELLY SLATER",
    price: "592,900.00",
    currency: "INR",
    images: {
      default: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab31101a1c1s1-soldier_1fb2c469_thumbnail_1024.webp?imwidth=780&format=auto",
      hover: "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab31101a1c1s1-three-quarter_105bb6b0_thumbnail_1024.webp?imwidth=780&format=auto",
      alt: "Kelly Slater Edition Superocean Heritage B31 Automatic Watch"
    },
    colors: {
      primary: "#1E40AF",
      secondary: "#6B7280",
      accent: "#3B82F6"
    },
    isNew: true,
    category: "Heritage",
    availability: "pre-order",
    specifications: {
      movement: "Automatic",
      caseDiameter: "40mm",
      waterResistance: "200m",
      material: "Stainless Steel"
    }
  }
];
// Server-side functions
export async function getTrendingWatches(): Promise<TrendingWatchesResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    watches: mockWatchesData,
    totalCount: mockWatchesData.length,
    lastUpdated: new Date().toISOString()
  };
}
export async function getWatchById(id: number): Promise<WatchData | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 50));
  const watch = mockWatchesData.find(w => w.id === id);
  return watch || null;
}
export async function getWatchesByCategory(category: string): Promise<WatchData[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockWatchesData.filter(w =>
    w.category.toLowerCase() === category.toLowerCase()
  );
}
// Utility functions for server-side processing
export function formatPrice(price: string, currency: string): string {
  return `${currency} ${parseFloat(price).toLocaleString()}`;
}
export function isWatchAvailable(watch: WatchData): boolean {
  return watch.availability === 'in-stock' || watch.availability === 'pre-order';
}
export function getWatchMetadata(watch: WatchData) {
  return {
    title: `${watch.name} ${watch.variant} - ${watch.model}`,
    description: `${watch.name} ${watch.variant} featuring ${watch.specifications?.movement} movement, ${watch.specifications?.caseDiameter} case diameter, and ${watch.specifications?.waterResistance} water resistance.`,
    price: formatPrice(watch.price, watch.currency),
    availability: watch.availability,
    category: watch.category
  };
}