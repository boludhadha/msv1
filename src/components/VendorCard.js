import Link from 'next/link';

export default function VendorCard({ vendor }) {
  return (
    <Link 
      href={`/vendor/${vendor.id}`} 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100"
    >
      <div className="h-36 bg-gray-200 relative">
        <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-1 rounded-full shadow-sm">
          {vendor.name.includes('fashion') ? 'Fashion' : 
           vendor.name.includes('beauty') ? 'Beauty' : 
           vendor.name.includes('handmade') ? 'Handmade' : 'Digital'}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm mb-1">{vendor.name}</h3>
        <div className="flex items-center text-xs text-gray-600">
          <span className="flex items-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {vendor.rating}
          </span>
          <span className="mx-2">•</span>
          <span>{vendor.reviews} reviews</span>
        </div>
      </div>
    </Link>
  );
}