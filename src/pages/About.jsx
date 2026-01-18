import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPaw, FaStar, FaHandHoldingHeart, FaMedal, FaUsers, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 flex items-center">
              About <span className="text-emerald-600 ml-2">PetShop<FaPaw className="ml-2 inline" /></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in pet care, serving the community with passion and dedication since 2015
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded by passionate pet lovers, PetShop began as a small neighborhood store with a big dream: to provide exceptional care and premium products for every pet and their family.
                </p>
                <p className="text-gray-600 mb-4">
                  What started with just a handful of customers has grown into a thriving community of pet parents who trust us with their beloved companions. Every day, we're reminded why we do what we do – because pets aren't just animals, they're family.
                </p>
                <p className="text-gray-600">
                  Today, we continue to uphold our founding principles: quality products, expert service, and genuine care for every pet that walks through our doors.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop" 
                  alt="Our pet store" 
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">9+</div>
                    <div className="text-gray-600">Years of Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Guiding principles that drive everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaStar className="text-4xl text-emerald-500" />,
                  title: 'Our Mission',
                  description: 'To enhance the lives of pets and strengthen the bond between pets and their families through exceptional products, services, and education.'
                },
                {
                  icon: <FaHandHoldingHeart className="text-4xl text-red-500" />,
                  title: 'Compassion First',
                  description: 'We believe every pet deserves gentle, loving care. Compassion guides every interaction, decision, and service we provide.'
                },
                {
                  icon: <FaMedal className="text-4xl text-blue-500" />,
                  title: 'Quality Excellence',
                  description: 'From products to services, we maintain the highest standards of quality, ensuring your pets receive only the best care possible.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate professionals dedicated to your pets' wellbeing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Dr. Sarah Mitchell',
                  role: 'Chief Veterinarian',
                  image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
                  bio: '15+ years of veterinary experience, specialized in small animal care'
                },
                {
                  name: 'Mike Johnson',
                  role: 'Grooming Specialist',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
                  bio: 'Professional groomer with expertise in breed-specific styling'
                },
                {
                  name: 'Lisa Chen',
                  role: 'Store Manager',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
                  bio: 'Pet nutrition specialist ensuring quality product selection'
                },
                {
                  name: 'Tom Wilson',
                  role: 'Training Director',
                  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
                  bio: 'Certified dog trainer with positive reinforcement methodology'
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '5000+', label: 'Happy Pets Served' },
                { number: '50+', label: 'Premium Brands' },
                { number: '15+', label: 'Expert Staff' },
                { number: '98%', label: 'Customer Satisfaction' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-emerald-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Giving Back to Our Community
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We believe in supporting pets and families in need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaUsers className="text-4xl text-blue-500" />,
                  title: 'Animal Shelter Partnerships',
                  description: 'Regular donations and volunteer support for local animal shelters'
                },
                {
                  icon: <FaStar className="text-4xl text-yellow-500" />,
                  title: 'Pet Education Programs',
                  description: 'Free workshops and educational resources for responsible pet ownership'
                },
                {
                  icon: <FaHandsHelping className="text-4xl text-green-500" />,
                  title: 'Community Rescue Support',
                  description: 'Assistance with medical care and supplies for rescued animals'
                }
              ].map((program, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md text-center">
                  <div className="text-4xl mb-4 flex justify-center">{program.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;