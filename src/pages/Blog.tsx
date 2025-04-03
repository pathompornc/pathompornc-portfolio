
import React from 'react';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCard from '@/components/blog/BlogCard';

// Blog data
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

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <BlogHeader 
          title="Travel Blog" 
          description="Apart from professional work, I also enjoy traveling, photography, and recently learning more about hiking since I moved to the Pacific Northwest, the evergreen state!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic mb-6">
            "The journey matters more than the destination."
          </p>
          <button className="btn-outline">
            More Adventures Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
