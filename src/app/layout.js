import './globals.css';

export const metadata = {
  title: 'MySafeVendors - Find Instagram Vendors You Can Trust',
  description: 'Real reviews by real people, shop with confidence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-mono text-gray-800 bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}