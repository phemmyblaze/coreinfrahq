"use client"
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  AreaChart,
  Area, 
  ResponsiveContainer 
} from 'recharts';

const weeklyIncomeData = [
  { name: 'Mon', value: 45 },
  { name: 'Tue', value: 38 },
  { name: 'Wed', value: 18 },
  { name: 'Thu', value: 35 },
  { name: 'Fri', value: 58 },
  { name: 'Sat', value: 40 },
  { name: 'Sun', value: 75 },
];

const Income = () => {
  return ( 
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium text-[#121212]">This Week's Income</h4>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={weeklyIncomeData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#4caf50" 
              fill="rgba(76, 175, 80, 0.1)" 
              strokeWidth={2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
 
export default Income;