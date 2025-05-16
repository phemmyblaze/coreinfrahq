import { Calendar } from 'lucide-react';
import QuickAccess from './quickAccess';
import Analytics from './analytics';
import Issuance from "./issurance"
import CardRequest from './cardRequest';
import Income from "./income";
import CardStatus from './card';
const Dashboard = () => {
    return ( 
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-[#121212]">Hi Nazeer, what would you like to do today?</h2>
                    <p className="text-[#121212] text-sm">Last login: 26/11/2024 14:39:58</p>
                </div>
                <div className="flex items-center space-x-2 border border-[#d0d5dd] px-3 py-2 text-[#121212]">
                    <div className='flex gap-2'>
                        <Calendar/>
                        <button className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">Today</button>
                    </div>
                    
                    <span className="text-gray-500 text-sm">11 Nov 2024</span>
                </div>
            </div>

            <QuickAccess/>
            <Analytics/>
            <div className="grid grid-cols-2 gap-6 mb-6">
                <Issuance/>
                <CardRequest/>
                <Income/>
                <CardStatus/>

            </div>

        </div>
     );
}
 
export default Dashboard;