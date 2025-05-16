const cardStatusData = [
  { name: 'Active', value: 1800, color: '#20B2AA' },
  { name: 'Expired', value: 350, color: '#FFC300' },
  { name: 'Inactive', value: 150, color: '#4169E1' },
  { name: 'Blocked', value: 100, color: '#8A2BE2' },
  { name: 'Lost', value: 50, color: '#FF6B6B' },
];

const DonutChart = ({ data, totalCards }) => {
  
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  

  let accumulatedOffset = 0;
  const segments = data.map(item => {
    const percentage = (item.value / totalCards);
    const dashArray = circumference * percentage;
    const dashOffset = circumference - dashArray;
    const segment = {
      ...item,
      dashArray,
      dashOffset: circumference - accumulatedOffset
    };
    accumulatedOffset += dashArray;
    return segment;
  });

  return (
    <div className="relative flex items-center justify-center h-64">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <g transform="translate(100, 100)">
          {segments.map((segment, i) => (
            <circle
              key={i}
              r={radius}
              cx="0"
              cy="0"
              fill="none"
              stroke={segment.color}
              strokeWidth="20"
              strokeDasharray={`${segment.dashArray} ${circumference - segment.dashArray}`}
              strokeDashoffset={segment.dashOffset}
              transform="rotate(-90)"
            />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-gray-500 text-sm">Total Cards</span>
        <span className="text-2xl font-bold text-[#121222]">{totalCards.toLocaleString()}</span>
      </div>
    </div>
  );
};
const CardStatus = () => {
    return ( 
        <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-[#121222]">Card Status Distribution</h4>
              </div>
              <div>
                <DonutChart data={cardStatusData} totalCards={2450} />
                <div className="flex justify-center mt-4 space-x-4">
                  {cardStatusData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
                </div>
        </div>
     );
}
 
export default CardStatus;