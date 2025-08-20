// Navbar Component
import Image from "next/image"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border border-white/20 text-white px-6 py-3 flex justify-between items-center shadow-lg rounded-4xl w-[95%] mx-auto mt-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/main.png"
          alt="CodePup Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-gray-800">CodePup</span>
      </div>
      
      {/* Links */}
      <ul className="hidden md:flex space-x-6">
        <li className="cursor-pointer text-gray-700 hover:text-gray-900 hover:font-semibold transition-all duration-200">Product</li>
        <li className="cursor-pointer text-gray-700 hover:text-gray-900 hover:font-semibold transition-all duration-200">Resources</li>
        <li className="cursor-pointer text-gray-700 hover:text-gray-900 hover:font-semibold transition-all duration-200">Pricing</li>
        <li className="cursor-pointer text-gray-700 hover:text-gray-900 hover:font-semibold transition-all duration-200">Enterprise</li>
      </ul>
      
      {/* Button */}
      <button className="bg-[hsl(79.6,89.1%,89.2%)] hover:bg-[hsl(80.9,88.5%,79.6%)] px-6 py-2 rounded-3xl text-gray-800 font-semibold cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg">
        Start building
      </button>
    </nav>
  )
}

export default Navbar