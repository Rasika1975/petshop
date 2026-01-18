import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          const starFilled = i < Math.floor(rating);
          const starHalf = i === Math.floor(rating) && rating % 1 !== 0;
          
          return (
            <span key={i} className="text-yellow-400">
              {starFilled ? <FaStar /> : starHalf ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Rating */}
      <div className="mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-4 italic">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm">
            {testimonial.pet}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;