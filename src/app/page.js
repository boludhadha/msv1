import Link from 'next/link';

// We'll create these components next
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import HorizontalCategories from '@/components/HorizontalCategories';
import VendorCard from '@/components/VendorCard';

// Sample vendor data
const vendors = [
  { id: 1, name: 'fashion vendor', rating: 4.8, reviews: 43 },
  { id: 2, name: 'beauty shop', rating: 4.9, reviews: 127 },
  { id: 3, name: 'handmade crafts', rating: 4.7, reviews: 38 },
  { id: 4, name: 'digital prints', rating: 4.5, reviews: 65 }
];

// We'll create categories data next
const categories = [];

export default function Home() {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative px-4 pt-16 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gray-200 rounded-full opacity-40 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-300 rounded-full opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-400 rounded-full opacity-20 transform translate-x-1/4 translate-y-1/4"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 lowercase">
            find instagram vendors you can trust
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-10 lowercase">
            real reviews by real people, shop with confidence
          </p>
          
          {/* Search Bar */}
          <SearchBar />
          
          {/* Quick Action Button */}
          <div className="text-center mb-12">
            <Link 
              href="/write-review" 
              className="inline-flex items-center bg-white text-gray-800 border border-gray-300 rounded-full px-6 py-3 text-sm shadow-md hover:bg-gray-50 hover:border-gray-400 transition"
            >
              bought something recently? write a review
              <span className="ml-2 text-gray-600">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="px-4 mb-16">
        <div className="flex justify-between items-center mb-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold lowercase">browse categories</h2>
          <Link 
            href="/categories" 
            className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition"
          >
            view all
            <svg width="16" height="16" className="ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <HorizontalCategories categories={categories} />
      </div>
      
      {/* Popular Vendors Section */}
      <div className="px-4 mb-16">
        <div className="flex justify-between items-center mb-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold lowercase">popular vendors</h2>
          <Link 
            href="/vendors" 
            className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition"
          >
            view all
            <svg width="16" height="16" className="ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-5 max-w-md mx-auto">
          {vendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>
    </>
  )
}