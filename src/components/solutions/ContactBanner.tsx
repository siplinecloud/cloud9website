export default function ContactBanner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full -ml-32 -mb-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Call Center?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team to discover how MATE24/7 can revolutionize your customer communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "South Africa",
              content: "+27 61 707 2387",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              )
            },
            {
              title: "Malawi",
              content: "+265 884 879 894",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              )
            },
            {
              title: "Email",
              content: "info@cloud9-mw.com",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              )
            },
            {
              title: "Website",
              content: "www.cloud9-mw.com",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              )
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white/20 rounded-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-blue-100 hover:text-white transition-colors">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="mailto:info@cloud9-mw.com" 
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Contact Us Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20">
          <p className="text-center text-blue-200 text-sm">
            <span className="opacity-80">Powered by</span> 
            <span className="font-semibold ml-1">Cloud9 Innovations</span>
          </p>
        </div>
      </div>
    </section>
  );
}