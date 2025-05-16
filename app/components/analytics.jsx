import { MoveUpRight } from 'lucide-react';

const Analytics = () => {
    return ( 
        <div className="mt-4">
            <div className="flex items-center gap-2 text-gray-800 mb-3">
                <h3 className="text-lg font-semibold">Analytics</h3>
            </div>
            
            {/* Responsive grid that adapts to different screen sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                
                {/* Card 1: Active Cards */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <h4 className="text-xs text-gray-500">Total Active Cards</h4>
                        <h4 className="text-xl font-bold text-gray-800">12,345</h4>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-green-500 bg-green-50 px-2 py-1 rounded">
                            <MoveUpRight className="w-3 h-3 mr-1" />
                            <span className="text-xs font-medium">+9%</span>
                        </div>
                        <span className="text-xs text-gray-500">this month</span>
                    </div>
                </div>
                
                {/* Card 2: Personalized Cards */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <h4 className="text-xs text-gray-500">Total Personalized Cards</h4>
                        <h4 className="text-xl font-bold text-gray-800">15,703</h4>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-green-500 bg-green-50 px-2 py-1 rounded">
                            <MoveUpRight className="w-3 h-3 mr-1" />
                            <span className="text-xs font-medium">+8.5%</span>
                        </div>
                        <span className="text-xs text-gray-500">this month</span>
                    </div>
                </div>
                
                {/* Card 3: Today's Revenue */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <h4 className="text-xs text-gray-500">Today's Revenue</h4>
                        <h4 className="text-xl font-bold text-gray-800">9.3M</h4>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-green-500 bg-green-50 px-2 py-1 rounded">
                            <MoveUpRight className="w-3 h-3 mr-1" />
                            <span className="text-xs font-medium">+6%</span>
                        </div>
                        <span className="text-xs text-gray-500">vs yesterday</span>
                    </div>
                </div>
                
                {/* Card 4: Pending Requests */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gold" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hourglass">
                                <path d="M5 22h14"/>
                                <path d="M5 2h14"/>
                                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/>
                                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <h4 className="text-xs text-gray-500">Pending request</h4>
                        <h4 className="text-xl font-bold text-gray-800">36</h4>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-yellow-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs font-medium">Requires attention</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Analytics;