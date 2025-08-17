// components/solutions/FeatureCard.tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  accentColor?: string;
}

export default function FeatureCard({ icon, title, items, accentColor = 'blue' }: FeatureCardProps) {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    red: 'text-red-600 dark:text-red-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
  };

  return (
    <div className="group relative h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${colorClasses[accentColor as keyof typeof colorClasses]} bg-opacity-10 dark:bg-opacity-20`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        
        <ul className="space-y-3 flex-grow">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className={`flex-shrink-0 w-5 h-5 mt-0.5 mr-2 ${colorClasses[accentColor as keyof typeof colorClasses]}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <div className={`text-sm font-medium ${colorClasses[accentColor as keyof typeof colorClasses]}`}>
            Learn more →
          </div>
        </div>
      </div>
    </div>
  );
}