import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogPosts';
import { FaDog, FaCat, FaBird, FaRabbit, FaHeartbeat, FaTree } from 'react-icons/fa';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pet Care Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice, tips, and insights to help you provide the best care for your beloved pets
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All Posts' && searchTerm === '' && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full mr-3">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 font-medium">
                        Read More →
                      </span>
                      <span className="text-sm text-gray-500">
                        By {post.author}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'All Posts' ? 'Latest Articles' : selectedCategory}
            </h2>
            <span className="text-gray-600">
              {filteredPosts.length} articles
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.featured && (
                      <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full mr-3">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 font-medium text-sm">
                        Read Article →
                      </span>
                      <div className="text-sm text-gray-500">
                        <span>{post.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Posts');
                }}
                className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Pet Care Tips
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly pet care advice, product recommendations, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-emerald-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((category) => {
              const getIcon = () => {
                if (category.includes('Dog')) return <FaDog className="text-2xl text-emerald-500" />;
                if (category.includes('Cat')) return <FaCat className="text-2xl text-emerald-500" />;
                if (category.includes('Bird')) return <FaBird className="text-2xl text-emerald-500" />;
                if (category.includes('Small')) return <FaRabbit className="text-2xl text-emerald-500" />;
                if (category.includes('Health')) return <FaHeartbeat className="text-2xl text-emerald-500" />;
                return <FaTree className="text-2xl text-emerald-500" />;
              };
              
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchTerm('');
                  }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:border-emerald-500 border-2 border-transparent"
                >
                  <div className="mb-2 flex justify-center">
                    {getIcon()}
                  </div>
                  <div className="font-medium text-gray-800">
                    {category}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;