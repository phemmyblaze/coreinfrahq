import {  Bell, Search, User,  } from 'lucide-react';
const Navbar = () => {
    return ( 
        <div>
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#121212]">
                <span className="">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
            <h1 className="text-xl">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#121212]" />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#121212]" 
              />
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <User className="w-6 h-6" />
            </button>
          </div>
        </header>
        </div>
     );
}
 
export default Navbar;