import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Baelly<span className="text-red-500">.</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Track Package</a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Contact Us</a>
            <select className="text-gray-600 bg-transparent border-none outline-none">
              <option>EN</option>
              <option>FR</option>
              <option>RW</option>
            </select>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Your trusted
                <br />
                <span className="text-red-500">delivery</span> partner
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the fastest service with our professional DHL personnel.
                Everything delivered to your doorstep, whether shipping abroad from Rwanda
                or importing from international destinations.
              </p>
            </div>

            {/* Shipping Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📍 From
                  </label>
                  <input 
                    type="text" 
                    placeholder="Kigali, Rwanda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📍 To
                  </label>
                  <input 
                    type="text" 
                    placeholder="International Destination"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📦 Package Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none">
                  <option>Documents</option>
                  <option>Small Package</option>
                  <option>Large Package</option>
                  <option>Express</option>
                </select>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg">
                Check Price
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">500+</div>
                <div className="text-sm text-gray-600">Deliveries to Rwanda</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">24/7</div>
                <div className="text-sm text-gray-600">DHL Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/landing-img.png"
                alt="DHL Personnel delivering packages to Rwanda"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-red-500 rounded-lg transform rotate-12 opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-12 h-12 bg-red-300 rounded-full opacity-30"></div>
            <div className="absolute top-1/3 left-5 w-8 h-8 bg-red-400 rounded opacity-25"></div>
            
            {/* Floating cards */}
            <div className="absolute top-20 left-0 bg-white rounded-lg shadow-lg p-3 transform -rotate-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📦</span>
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Express to USA</div>
                  <div className="text-gray-500">2-3 days</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-32 right-5 bg-white rounded-lg shadow-lg p-3 transform rotate-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Delivered</div>
                  <div className="text-gray-500">Kigali, RW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Partners Section */}
      <section className="bg-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-600 font-medium mb-8">Our official DHL partners</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-red-600">DHL</div>
            <div className="text-lg font-semibold text-gray-700">Express</div>
            <div className="text-lg font-semibold text-gray-700">Rwanda Post</div>
            <div className="text-lg font-semibold text-gray-700">FedEx</div>
            <div className="text-lg font-semibold text-gray-700">UPS</div>
          </div>
        </div>
      </section>
    </div>
  );
}
