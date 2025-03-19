
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "10 Outdoor Advertising Trends to Watch in 2023",
      excerpt: "Discover the latest innovations and trends shaping the outdoor advertising landscape this year.",
      category: "Outdoor Advertising",
      author: "Sarah Johnson",
      date: "May 15, 2023",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "How to Measure ROI for Experiential Marketing Campaigns",
      excerpt: "Learn effective methods to track and analyze the return on investment for your experiential marketing efforts.",
      category: "Marketing Strategy",
      author: "Michael Chen",
      date: "April 22, 2023",
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Building Brand Identity: A Step-by-Step Guide",
      excerpt: "A comprehensive approach to developing a memorable and effective brand identity from the ground up.",
      category: "Branding",
      author: "Jessica Williams",
      date: "March 10, 2023",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Event Planning in the Post-Pandemic Era",
      excerpt: "New considerations and opportunities for planning successful events in today's changing landscape.",
      category: "Event Planning",
      author: "David Rodriguez",
      date: "February 28, 2023",
      image: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Influencer Marketing: Authenticity vs. Reach",
      excerpt: "Exploring the balance between authentic partnerships and maximizing audience exposure in influencer campaigns.",
      category: "Influencer Marketing",
      author: "Amanda Lee",
      date: "January 15, 2023",
      image: "bg-gradient-to-br from-yellow-500 to-amber-600"
    },
    {
      id: 6,
      title: "The Psychology of Color in Advertising",
      excerpt: "How color choices impact consumer perception and behavior in advertising campaigns.",
      category: "Design",
      author: "Robert Martinez",
      date: "December 5, 2022",
      image: "bg-gradient-to-br from-red-500 to-rose-600"
    }
  ];

  const categories = [
    "all",
    ...Array.from(new Set(blogPosts.map(post => post.category)))
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Our Blog</h1>
              <p className="text-xl text-gray-600">
                Insights, trends, and expertise from the world of advertising and marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-brand-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? "All" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                    <div className={`h-48 ${post.image} flex items-center justify-center`}>
                      <h3 className="text-white text-xl font-bold text-center px-6">{post.title}</h3>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <Tag className="w-4 h-4 text-brand-blue mr-2" />
                        <span className="text-sm font-medium text-brand-blue">{post.category}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="inline-flex items-center text-brand-blue font-medium hover:text-brand-red transition-colors"
                      >
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
