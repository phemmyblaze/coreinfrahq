import {  MoveUpRight } from 'lucide-react';

const Analytics = () => {
    return ( 
        <div className="mt-5">
            <div className="flex gap-1 text-[#121212] ">
                <h3 className="font-bold mb-4">Analytics</h3>
                <hr/>
            </div>
            <div className="grid grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        </div>
                        
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h4 className="text-gray-500 text-sm">Total Active Cards</h4>
                            <h4 className="text-2xl font-bold text-[#121221]">12,345</h4>     
                        </div>
                        
                        <div className="flex items-center text-green-500">
                            <div className='bg-green-100 px-4 py-1 flex items-center gap-2'>
                                <MoveUpRight className="w-4 h-4" />
                                <span className="text-xs font-medium">+9%</span>
                            </div>
                           
                            <span className="text-xs text-gray-500 ml-1">this month</span>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        </div>
                        
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h4 className="text-gray-500 text-sm">Total Personalized Cards</h4>
                            <h4 className="text-2xl font-bold text-[#121221]">15,703</h4>     
                        </div>
                        
                        <div className="flex items-center text-green-500">
                            <div className='bg-green-100 px-4 py-1 flex items-center gap-2'>
                                <MoveUpRight className="w-4 h-4" />
                                <span className="text-xs font-medium">+8.5%</span>
                            </div>
                           
                            <span className="text-xs text-gray-500 ml-1">this month</span>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        </div>
                        
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h4 className="text-gray-500 text-sm">Today's Revenue</h4>
                            <h4 className="text-2xl font-bold text-[#121221]">9.3M</h4>     
                        </div>
                        
                        <div className="flex items-center text-green-500">
                            <div className='bg-green-100 px-4 py-1 flex items-center gap-2'>
                                <MoveUpRight className="w-4 h-4" />
                                <span className="text-xs font-medium">+6%</span>
                            </div>
                           
                            <span className="text-xs text-gray-500 ml-1">vs yesterday</span>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hourglass-icon lucide-hourglass"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
                        </div>
                        
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h4 className="text-gray-500 text-sm">Pending request</h4>
                            <h4 className="text-2xl font-bold text-[#121212]">36</h4>     
                        </div>
                        
                        <div className="flex items-center">
                            <div className=' px-4 py-1 flex items-center gap-2'>
                               <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                            </div>
                           
                            <div className="flex items-center text-yellow-500">
                  <span className="text-xs font-medium">Requires attention</span>
                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
             
        </div>
     );
}
 
export default Analytics
