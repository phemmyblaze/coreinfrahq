import { ChevronRight } from 'lucide-react';

const QuickAccess = () => {
    return ( 
        <div>
            <div className="mt-6 bg-white border rounded-lg shadow-sm p-4 text-[#121212] border-gray-50">
              <h3 className="font-bold mb-4">Your Quick Access</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium">Manage a Card</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-blue-500" />
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium">Issue Instant Card</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-blue-500" />
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium">Issue Personalized Card</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-blue-500" />
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium">Review Card Requests</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-blue-500" />
                </div>
              </div>
            </div>
        </div>
    
    );
}
 
export default QuickAccess;