
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from 'lucide-react';
import BlogHeader from '@/components/blog/BlogHeader';

// Use the same blog data from Blog.tsx
// This would normally come from a database or API
const blogs = [
  {
    id: 1,
    title: "Olympic National Park: A Weekend in the Wilderness",
    cover: "/placeholder.svg",
    tldr: "A stunning weekend escape to one of Washington's most diverse natural landscapes.",
    duration: "3 days",
    cost: "$450",
    location: "Olympic Peninsula, WA",
    date: "August 2023",
    categories: ["Hiking", "Nature", "Photography"],
    description: "Exploring the diverse ecosystems of Olympic National Park from rainforests to beaches.",
    itinerary: [
      {
        day: "Day 1",
        activities: "Hoh Rainforest exploration, Hall of Mosses Trail, Staying at Lake Crescent Lodge",
        image: "/placeholder.svg"
      },
      {
        day: "Day 2",
        activities: "Hurricane Ridge hike, Wildlife spotting, Sunset at Rialto Beach",
        image: "/placeholder.svg"
      },
      {
        day: "Day 3",
        activities: "Sol Duc Falls trail, Hot springs relaxation, Scenic drive back to Seattle",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: 2,
    title: "Exploring the Columbia River Gorge",
    cover: "/placeholder.svg",
    tldr: "Chasing waterfalls and stunning vistas along the historic Columbia River Highway.",
    duration: "2 days",
    cost: "$320",
    location: "Columbia River Gorge, OR/WA",
    date: "June 2023",
    categories: ["Scenic Drives", "Waterfalls", "Hiking"],
    description: "A weekend journey along the stunning Columbia River Gorge with stops at famous waterfalls and viewpoints.",
    itinerary: [
      {
        day: "Day 1",
        activities: "Vista House, Multnomah Falls, Oneonta Gorge, Staying in Hood River",
        image: "/placeholder.svg"
      },
      {
        day: "Day 2",
        activities: "Mt. Hood drive, Timberline Lodge visit, Fruit loop scenic drive, Windsurfing viewpoints",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: 3,
    title: "San Juan Islands Kayaking Adventure",
    cover: "/placeholder.svg",
    tldr: "A peaceful kayaking weekend with orca sightings and island exploration.",
    duration: "3 days",
    cost: "$580",
    location: "San Juan Islands, WA",
    date: "July 2023",
    categories: ["Kayaking", "Wildlife", "Island Life"],
    description: "Exploring the beautiful San Juan Islands by kayak, watching for orcas and enjoying island culture.",
    itinerary: [
      {
        day: "Day 1",
        activities: "Ferry to Friday Harbor, Kayak orientation, Evening paddle, Staying at Roche Harbor",
        image: "/placeholder.svg"
      },
      {
        day: "Day 2",
        activities: "Full-day kayak tour, Lime Kiln Point State Park, Orca watching, Beach picnic",
        image: "/placeholder.svg"
      },
      {
        day: "Day 3",
        activities: "Morning paddle, San Juan Island exploration, Lavender farm visit, Ferry back",
        image: "/placeholder.svg"
      }
    ]
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || '1');
  
  // Find the blog post with the matching ID
  const blog = blogs.find(blog => blog.id === blogId);
  
  if (!blog) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-5xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center mb-8 text-evergreen-600 hover:text-evergreen-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all blog posts
        </Link>
        
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{blog.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{blog.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{blog.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {blog.categories.map((category, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="aspect-video w-full mb-10 rounded-xl overflow-hidden">
          <img 
            src={blog.cover} 
            alt={blog.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-medium text-xl">{blog.tldr}</p>
          <p>{blog.description}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Itinerary</h2>
          {blog.itinerary.map((day, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{day.day}</h3>
              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden">
                    <img src={day.image} alt={day.day} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p>{day.activities}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600 mb-1">Cost Estimate</div>
              <div className="font-semibold text-lg">{blog.cost}</div>
            </div>
            <Link to="/blog" className="btn-outline inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
