import Button from './Button';
import { FaCalendarAlt, FaStar } from 'react-icons/fa';

const ServiceCard = ({ service, onBookService }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Service Image */}
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-48 object-cover"
        />
        
        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
            <FaStar className="mr-1 text-sm" />
            Popular
          </div>
        )}
      </div>

      {/* Service Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {service.name}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Includes:</h4>
          <ul className="space-y-1">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="text-emerald-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-emerald-600">
              {formatPrice(service.price)}
            </span>
            {service.duration && (
              <span className="text-gray-500 ml-2">/ {service.duration}</span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onBookService && onBookService(service)}
          fullWidth
          icon={<FaCalendarAlt />}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;