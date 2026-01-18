import { useState } from 'react';
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const starFilled = i < Math.floor(rating);
          const starHalf = i === Math.floor(rating) && rating % 1 !== 0;
          
          return (
            <span key={i} className="text-yellow-400">
              {starFilled ? <FaStar /> : starHalf ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
          );
        })}
        <span className="ml-1 text-sm text-gray-600">({product.reviews})</span>
      </div>
    );
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{product.discount}%
          </div>
        )}
        
        {/* Out of Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold">
              Out of Stock
            </span>
          </div>
        )}
        
        {/* Quick Actions */}
        {isHovered && product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => onAddToCart && onAddToCart(product)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-800 text-lg leading-tight">
            {product.name}
          </h3>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {renderRating(product.rating)}
        
        {/* Price Section */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-emerald-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {product.inStock ? (
            <button 
              onClick={() => onAddToCart && onAddToCart(product)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full transition-colors duration-200"
              aria-label="Add to cart"
            >
              <FaShoppingCart className="h-5 w-5" />
            </button>
          ) : (
            <span className="text-red-500 text-sm font-medium">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;