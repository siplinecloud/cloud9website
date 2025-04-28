export default function ContactAddress() {
  return (
    <div className="rn-contact-top-area py-[120px]">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb-8 text-center">
              <span className="subtitle text-blue-600 uppercase tracking-wider text-sm font-medium">
              Product Reseller
              </span>
              <h2 className="title text-4xl font-bold mt-2 mb-4">
              SIPLINE Pty (LTD)
              </h2>
              {/* <p className="description text-gray-600 text-lg">
                Building No3, 1st Floor Sunninghill Office Park, Peiter Drive<br />
                Sunninghill Sandton, Johannesburg South Africa
              </p> */}
            </div>
          </div>
        </div>

        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Numbers */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rn-address dark:bg-bg-color-dark bg-gray-light p-8 rounded-lg shadow-md text-center">
              <div className="icon bg-blue-100 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div className="inner">
                <h4 className="title text-xl font-semibold mb-4">Contact Numbers</h4>
                <p className="mb-2">
                  <a href="tel:+27107454000" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +27 10 745 4000
                  </a>
                </p>
                <p className="mb-2">
                  <a href="tel:+27617072387" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +27 61 707 2387
                  </a>
                </p>
                <p>
                  <a 
                    href="https://wa.me/27617072387" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +27 61 707 2387 (WhatsApp)
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rn-address dark:bg-bg-color-dark bg-gray-light p-8 rounded-lg shadow-md text-center">
              <div className="icon bg-blue-100 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="inner">
                <h4 className="title text-xl font-semibold mb-4">Email Address</h4>
                <p>
                  <a href="mailto:mark@sipline.net" className="text-gray-600 hover:text-blue-600 transition-colors">
                    mark@sipline.net
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rn-address dark:bg-bg-color-dark bg-gray-light p-8 rounded-lg shadow-md text-center">
              <div className="icon bg-blue-100 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="inner">
                <h4 className="title text-xl font-semibold mb-4">Our Location</h4>
                <p className="text-gray-600">
                  Building No3, 1st Floor<br />
                  Sunninghill Office Park, Peiter Drive<br />
                  Sunninghill Sandton<br />
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}