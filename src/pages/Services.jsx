import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { services, serviceCategories } from '../data/services';
import { FaUserMd, FaHeart, FaTrophy, FaClock } from 'react-icons/fa';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookingModal, setBookingModal] = useState(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => 
        service.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  const bookService = (service) => {
    setBookingModal(service);
  };

  const closeBookingModal = () => {
    setBookingModal(null);
  };

  const submitBooking = (e) => {
    e.preventDefault();
    // In a real app, this would submit the booking
    alert('Booking submitted successfully!');
    closeBookingModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pet Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional care for your beloved companions. From grooming to veterinary services, we've got you covered.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onBookService={bookService}
            />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with genuine care for your pets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUserMd className="text-4xl text-blue-500" />,
                title: 'Certified Professionals',
                description: 'All our staff are certified and experienced in pet care'
              },
              {
                icon: <FaHeart className="text-4xl text-red-500" />,
                title: 'Gentle Approach',
                description: 'We treat every pet with love, patience, and understanding'
              },
              {
                icon: <FaTrophy className="text-4xl text-yellow-500" />,
                title: 'Quality Guarantee',
                description: 'Satisfaction guaranteed or your money back'
              },
              {
                icon: <FaClock className="text-4xl text-green-500" />,
                title: 'Flexible Scheduling',
                description: 'Book appointments that work with your busy schedule'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      {bookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Book {bookingModal.name}
              </h3>
              <button 
                onClick={closeBookingModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={submitBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pet Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Small Pet</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Any special requirements or concerns..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;