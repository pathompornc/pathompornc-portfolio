
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogItem {
  id: number;
  title: string;
  cover: string;
  tldr: string;
  duration: string;
  cost: string;
  location: string;
  date: string;
  categories: string[];
  description: string;
  itinerary: {
    day: string;
    activities: string;
    image: string;
  }[];
}

interface BlogCardProps {
  blog: BlogItem;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <Link to={`/blog/${blog.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={blog.cover} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {blog.categories.map((category, index) => (
              <span key={index} className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-evergreen-600 transition-colors">{blog.title}</h3>
        </Link>
        
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{blog.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{blog.location}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">TLDR;</h4>
          <p className="text-gray-700">{blog.tldr}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-semibold">Estimated Cost:</span> {blog.cost}
          </div>
          <Link 
            to={`/blog/${blog.id}`} 
            className="text-evergreen-600 font-medium flex items-center hover:text-evergreen-700 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
