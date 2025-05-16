import { Maximize2 } from 'lucide-react';


const CardRequest = () => {
    const recentRequests = [
  { branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Ready' },
  { branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'In Progress' },
  { branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'Acknowledged' },
  { branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Pending' },
];

const StatusBadge = ({ status }) => {
  const statusStyles = {
    'Pending': 'bg-gray-100 text-gray-600',
    'In Progress': 'bg-yellow-100 text-yellow-600',
    'Acknowledged': 'bg-blue-100 text-blue-600',
    'Complete': 'bg-green-100 text-green-600',
    'Ready': "text-[#067647] bg-[#ECFDF3]"
  };
  
  return (
    <span className={`px-2 py-1 rounded-full border text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
};
    return ( 
        <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-[#121222]">Recent Card Requests</h4>
                <button className="text-gray-400">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <div className="">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-gray-500 ">
                      <th className="pb-3 font-medium text-left">Branch</th>
                      <th className="pb-3 font-medium text-left">Card Type</th>
                      <th className="pb-3 font-medium text-left">Quantity</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRequests.map((request, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-3 text-sm text-[#121222]">
                          
                            {request.branch}
                         
                        </td>
                        <td className="py-3 text-sm text-[#121222]">{request.cardType}</td>
                        <td className="py-3 text-sm text-[#121222]">{request.quantity}</td>
                        <td className="py-3 text-sm text-center">
                            <StatusBadge status={request.status} />
                           
                          
                        </td>
                        <td>
                            <button className="text-blue-500 text-sm font-medium">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
     );
}
 
export default CardRequest;