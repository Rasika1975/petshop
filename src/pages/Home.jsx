import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { products } from '../data/products';
import { services } from '../data/services';
import { testimonials, trustBadges } from '../data/testimonials';
import { FaPaw, FaStar, FaShoppingCart, FaCalendarAlt, FaDog, FaUsers, FaAward, FaTruck, FaUndo, FaLock } from 'react-icons/fa';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    // In a real app, you'd show a toast notification here
    console.log(`${product.name} added to cart!`);
  };

  const bookService = (service) => {
    // In a real app, this would redirect to booking page
    console.log(`Booking ${service.name}`);
  };

  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3);
  
  // Get popular services
  const popularServices = services.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Healthy Food, <br />
                  <span className="text-emerald-600 flex items-center">
                    Happy Pets <FaPaw className="ml-2 text-2xl" />
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Premium pet supplies and professional services to keep your furry friends healthy, happy, and loved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    as={Link} 
                    to="/products" 
                    size="large" 
                    icon={<FaShoppingCart />}
                  >
                    Shop Now
                  </Button>
                  <Button 
                    as={Link} 
                    to="/services" 
                    variant="outline" 
                    size="large" 
                    icon={<FaCalendarAlt />}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop" 
                    alt="Happy pets" 
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <FaDog className="text-2xl mr-2 text-emerald-600" />
                      <div>
                        <p className="font-bold text-gray-800">1000+</p>
                        <p className="text-sm text-gray-600">Happy Pets</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <FaStar className="text-2xl mr-2 text-yellow-500" />
                      <div>
                        <p className="font-bold text-gray-800">4.9/5</p>
                        <p className="text-sm text-gray-600">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustBadges.map((badge) => {
                const getIcon = () => {
                  switch(badge.iconType) {
                    case 'award': return <FaAward className="text-4xl text-emerald-500" />;
                    case 'truck': return <FaTruck className="text-4xl text-blue-500" />;
                    case 'undo': return <FaUndo className="text-4xl text-purple-500" />;
                    case 'lock': return <FaLock className="text-4xl text-green-500" />;
                    default: return <FaAward className="text-4xl text-emerald-500" />;
                  }
                };
                
                return (
                  <div key={badge.id} className="text-center">
                    <div className="mb-2 flex justify-center">{getIcon()}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">{badge.title}</h3>
                    <p className="text-gray-600 text-sm">{badge.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Best Selling Products
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our most popular pet supplies, loved by thousands of pet parents
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button as={Link} to="/products" variant="secondary" size="large">
                View All Products
              </Button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Professional Pet Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert care for your beloved companions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularServices.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onBookService={bookService}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button as={Link} to="/services" variant="secondary" size="large">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Pet Parents Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real stories from happy customers and their furry friends
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Give Your Pet the Best?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied pet parents who trust us for their pet's health and happiness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as={Link} 
                to="/products" 
                variant="secondary" 
                size="large"
                className="bg-white text-emerald-600 hover:bg-gray-100"
              >
                Shop Premium Products
              </Button>
              <Button 
                as={Link} 
                to="/contact" 
                variant="outline" 
                size="large"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
              >
                Visit Our Store
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;