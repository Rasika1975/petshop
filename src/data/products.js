export const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    category: "dog",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    description: "High-quality nutrition for active dogs",
    brand: "Happy Paws",
    inStock: true,
    discount: 17
  },
  {
    id: 2,
    name: "Organic Cat Treats",
    category: "cat",
    price: 12.99,
    originalPrice: 15.99,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
    description: "Natural treats your cat will love",
    brand: "Pure Whiskers",
    inStock: true,
    discount: 19
  },
  {
    id: 3,
    name: "Bird Seed Mix",
    category: "bird",
    price: 8.99,
    originalPrice: 10.99,
    image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 56,
    description: "Nutritious blend for colorful birds",
    brand: "Feather Friends",
    inStock: true,
    discount: 18
  },
  {
    id: 4,
    name: "Dog Grooming Kit",
    category: "dog",
    price: 34.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1516734212186-664564d13ddd?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 92,
    description: "Complete grooming essentials",
    brand: "Paw Spa",
    inStock: true,
    discount: 13
  },
  {
    id: 5,
    name: "Catnip Toys Set",
    category: "cat",
    price: 15.99,
    originalPrice: 18.99,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 67,
    description: "Set of 3 organic catnip toys",
    brand: "Playful Paws",
    inStock: true,
    discount: 16
  },
  {
    id: 6,
    name: "Hamster Exercise Wheel",
    category: "small-pet",
    price: 19.99,
    originalPrice: 24.99,
    image: "https://images.unsplash.com/photo-1551892374-800bac6998ef?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 43,
    description: "Silent running wheel for small pets",
    brand: "Tiny Treasures",
    inStock: true,
    discount: 20
  }
];

export const categories = [
  { id: "all", name: "All Products", iconType: "paw" },
  { id: "dog", name: "Dog Supplies", iconType: "dog" },
  { id: "cat", name: "Cat Essentials", iconType: "cat" },
  { id: "bird", name: "Bird Care", iconType: "feather" },
  { id: "small-pet", name: "Small Pets", iconType: "paw" }
];

export const brands = [
  "Happy Paws", "Pure Whiskers", "Feather Friends", "Paw Spa", "Playful Paws", "Tiny Treasures"
];