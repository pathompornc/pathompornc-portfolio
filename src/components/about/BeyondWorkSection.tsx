
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const BeyondWorkSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-warm-100 to-cream-100 rounded-xl p-10 text-center">
      <User className="h-10 w-10 mx-auto mb-6 text-warm-600" />
      <h2 className="text-2xl font-bold mb-4">Beyond Work</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
        When I'm not building products, I enjoy exploring hiking and photography. I always planning my next adventure 
        to experience new cultures and capture the beauty of our world. My travel blog is coming soon, stay tuned!
      </p>
      {/* <Link to="/blog" className="btn-outline">
        Read My Travel Blog
      </Link> */}
    </section>
  );
};

export default BeyondWorkSection;
