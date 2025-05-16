
"use client";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const monthlyData = [
  { name: 'May', personalized: 15, instant: 35 },
  { name: 'Jun', personalized: 25, instant: 45 },
  { name: 'Jul', personalized: 10, instant: 25 },
  { name: 'Aug', personalized: 18, instant: 40 },
  { name: 'Sep', personalized: 14, instant: 34 },
  { name: 'Oct', personalized: 20, instant: 58 },
  { name: 'Nov', personalized: 22, instant: 48 },
];

const Issuance = () => {
    return ( 
         <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-[#121222]">Monthly Issuance</h4>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={monthlyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar 
                        dataKey="personalized" 
                        name="Personalized" 
                        stackId="a" 
                        fill="#104e8b" 
                        radius={[0, 0, 0, 0]} 
                    />
                    <Bar 
                        dataKey="instant" 
                        name="Instant" 
                        stackId="a" 
                        fill="#d1e6fa" 
                        radius={[4, 4, 0, 0]} 
                    />
                    <Legend
                        wrapperStyle={{
                        paddingTop: 20
                        }}
                    />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
     );
}
 
export default Issuance;