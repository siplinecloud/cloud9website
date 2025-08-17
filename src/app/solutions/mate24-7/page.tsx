// pages/solutions/mate247.js
import HeroSection from '@/components/solutions/HeroSection';
import { FaPhone, FaWhatsapp, FaChartBar, FaHeadset, FaCog, FaUsers } from 'react-icons/fa';
import ScreenshotGallery from '@/components/solutions/ScreenshotGallery';
import FeatureCard from '@/components/solutions/FeatureCard';
import ContactBanner from '@/components/solutions/ContactBanner';

const screenshots = [
  { id: 1, src: '/images/screenshots/dashboard.png', alt: 'Mate24/7 Dashboard' },
  { id: 2, src: '/images/screenshots/agent-performance.png', alt: 'Agent Performance' },
  { id: 3, src: '/images/screenshots/heatmap.png', alt: 'Reporting Dashboard' },
  { id: 4, src: '/images/screenshots/Screenshot 2025-08-11 154042.png', alt: 'Agent Performance Details' },
];

const features = [
  {
    icon: <FaHeadset className="text-2xl" />,
    title: "Call Management",
    items: [
      "Inbound & Outbound Campaigns",
      "IVR with Advanced Routing",
      "Call Backs"
    ],
    accentColor: "blue"
  },
  {
    icon: <FaPhone className="text-2xl" />,
    title: "Dialing Methods",
    items: [
      "Click-to-Dial",
      "Auto Dialer", 
      "Manual Dialing",
      "Local presence dialing"
    ],
    accentColor: "red"
  },
  {
    icon: <FaChartBar className="text-2xl" />,
    title: "Advanced Reporting",
    items: [
      "Live Call Monitoring (Call Whisper & Barge)",
      "Call Recordings",
      "Heatmaps",
      "Agent Performance Reports"
    ],
    accentColor: "green"
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Supervisor Tools",
    items: [
      "Real-time call monitoring",
      "Agent performance tracking",
      "Call intervention capabilities",
      "Quality assurance scoring"
    ],
    accentColor: "purple"
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    title: "Digital Channels",
    items: [
      "WhatsApp Business integration",
      "SMS campaign management",
      "Multi-channel customer history",
      "Automated responses"
    ],
    accentColor: "green"
  },
  {
    icon: <FaCog className="text-2xl" />,
    title: "Customization",
    items: [
      "Tailored IVR workflows",
      "Custom reporting",
      "API integrations",
      "White-label options"
    ],
    accentColor: "yellow"
  }
];
export default function Mate247Page() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <HeroSection />

      {/* Screenshot Gallery */}
      
      <ScreenshotGallery screenshots={screenshots} />
      

      {/* Features Section */}
       <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MATE24/7 combines cutting-edge technology with intuitive design to transform your call center operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              items={feature.items}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900">
            See All Features
            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
}