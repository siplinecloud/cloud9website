import React from "react";

const ApiDocumentationPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-36 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Sidebar */}
          <aside className="w-full px-4 sm:w-1/4 lg:w-1/5">
            <nav className="sticky top-10 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                API Documentation
              </h3>
              <ul className="space-y-3">
                <li>
                    <a
                        href="#introduction"
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                    >
                        Introduction
                    </a>
                </li>
                <li>
                  <a
                    href="#base-url"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                  >
                    Base URL
                  </a>
                </li>
                <li>
                  <a
                    href="#authentication"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                  >
                    Authentication
                  </a>
                </li>
                <li>
                  <a
                    href="#campaign-management"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                  >
                    Campaign Management
                  </a>
                </li>
                <li>
                  <a
                    href="#leads-management"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                  >
                    Leads Management
                  </a>
                </li>
                <li>
                  <a
                    href="#error-handling"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                  >
                    Error Handling
                  </a>
                </li>
                <li>
                  <a
                    href="#integration-workflow"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                  >
                    Integration Workflow
                  </a>
                </li>
                <li>
                  <a
                    href="#development-notes"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-400 hover:text-black dark:text-gray-300 dark:hover:bg-amber-500"
                  >
                    Development Notes
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="w-full px-4 sm:w-3/4 lg:w-4/5">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">

                <section id="introduction" className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                    Introduction
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                    Welcome to the Cloud9 API documentation. This API allows you
                    to integrate with our platform and access various
                    functionalities programmatically.
                    </p>
                </section>

              {/* Base URL */}
              <section id="base-url" className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Base URL
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the following base URL for API requests:
                </p>
                <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  Production: https://system_url/api <br />
                  All requests: Require Content-Type: application/json.
                </pre>
              </section>

              {/* Authentication */}
              <section id="authentication" className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Authentication and Token Management
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the endpoints below to authenticate users and manage tokens.
                </p>

                {/* User Login */}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    1. User Login
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Generates an access token and refresh token for authentication.
                  </p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    Endpoint: /login{"\n"}
                    Method: POST{"\n"}
                    Headers: None
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Example Body:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "email": "user@example.com",
  "password": "password123"
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Success):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "token_type": "Bearer",
  "expires_in": 1800,
  "access_token": "your_access_token_here",
  "refresh_token": "your_refresh_token_here"
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Failure):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "error": "Invalid credentials"
}`}
                  </pre>
                </div>

                {/* Refresh Token */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    2. Refresh Token
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Generates a new access token using a valid refresh token.
                  </p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    Endpoint: /refresh-token{"\n"}
                    Method: POST{"\n"}
                    Headers: None
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Example Body:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "refresh_token": "your_refresh_token_here"
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Success):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "token_type": "Bearer",
  "expires_in": 1800,
  "access_token": "new_access_token_here",
  "refresh_token": "new_refresh_token_here"
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Failure):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "error": "Invalid refresh token"
}`}
                  </pre>
                </div>
              </section>

              {/* Other Sections */}
              <section id="campaign-management" className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Campaign Management
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the following endpoints to manage campaigns.
                </p>

                {/* List Campaigns*/}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    1. List Campaigns
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                   Fetches all campaigns along with their id and campaign_name.
                  </p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    Endpoint: /campaigns{"\n"}
                    Method: GET{"\n"}
                    Headers: 
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Makefile:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`
  Authorization: Bearer <access_token>
`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Success):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "message": "Campaigns retrieved successfully",
  "campaigns": [
   {
    "id": 1,
    "campaign_name": "Campaign A"
   },
   {
    "id": 2,
    "campaign_name": "Campaign B"
   }
  ]
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">•Response (Failure - Unauthenticated):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "error": "Unauthenticated."
}`}
                  </pre>
                </div>
              </section>

              <section id="leads-management" className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Leads Management
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the `/leads` endpoint to upload leads to specific campaigns.
                </p>

                {/* Upload Leads */}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    1. Upload Leads
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Uploads multiple leads to a specific campaign.
                  </p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    Endpoint: /leads{"\n"}
                    Method: GET{"\n"}
                    Headers: 
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">MAkefile:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`
  Authorization: Bearer <access_token>
`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Body:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "leads": [
   {
    "campaign_id": 1,
    "fullname": "John Doe",
    "national_id": "123456789",
    "primary_number": "27123456789",
    "secondary_number": "27123456788",
    "physical_address": "123 Main Street",
    "email": "johndoe@example.com",
    "supplier": "Supplier A"
   },
   {
    "campaign_id": 1,
    "fullname": "Jane Smith",
    "national_id": "987654321",
    "primary_number": "27123456780",
    "secondary_number": "27123456781",
    "physical_address": "456 Elm Street",
    "email": "janesmith@example.com",
    "supplier": "Supplier B"
   }
  ]
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Success):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "message": "Leads processed successfully",
  "total_processed": 2,
  "total_inserted": 2,
  "total_skipped": 0
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Failure - Duplicate):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "message": "Leads processed successfully",
  "total_processed": 3,
  "total_inserted": 2,
  "total_skipped": 1
}`}
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• Response (Failure - Validation Error):</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "errors": {
   "leads.0.primary_number": [
   "The primary_number must start with \"27\" and not \"+27\"."
   ]
  }
}`}
                  </pre>
                </div>
              </section>

              <section id="error-handling" className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Error Handling
                </h2>
                <h3 className="mb-4 text-l font-semibold text-gray-700 dark:text-gray-300">
                  Common Error Responses
                </h3>
                
                <div className="mb-6">
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• 401 Unauthorized:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "error": "Unauthenticated."
}`}
                  </pre>
                  <p className="text-gray-600 dark:text-gray-400">
                    Occurs when the token is missing or invalid.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• 422 Unprocessable Entity:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "errors": {
   "field_name": ["Error message."]
  }
}`}
                  </pre>
                  <p className="text-gray-600 dark:text-gray-400">
                    Occurs when required fields are missing or invalid.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">• 400 Bad Request:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`{
  "error": "Invalid request data."
}`}
                  </pre>
                  <p className="text-gray-600 dark:text-gray-400">
                    Occurs when invalid or malformed data is sent to the server.
                  </p>
                  
                </div>
                
              </section>

              <section id="integration-workflow" className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Integration Workflow
                </h2>
                <h3 className="mb-4 text-l font-semibold text-gray-700 dark:text-gray-300">
                   1. Authenticate and Obtain Token
                </h3>
                <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                • Call /login to authenticate the user and obtain an access_token and refresh_token. <br />
                • Use the access_token to make subsequent API calls.
                </pre>
                <h3 className="mb-4 text-l font-semibold text-gray-700 dark:text-gray-300">
                   2. Fetch Campaigns
                </h3>
                <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  • Use /campaigns to list available campaigns and their IDs.
                </pre>
                <h3 className="mb-4 text-l font-semibold text-gray-700 dark:text-gray-300">
                   3. Upload Leads
                </h3>
                <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                • Use /leads to upload bulk leads, ensuring all leads are associated with a valid campaign_id.
                </pre>
                <h3 className="mb-4 text-l font-semibold text-gray-700 dark:text-gray-300">
                   4. Refresh Token
                </h3>
                <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                • Use /refresh-token to renew the access_token when it expires.
                </pre>
              </section>

              <section id="development-notes" className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Development Notes
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  1. <strong>Rate Limiting:</strong> Ensure you handle rate limits for API requests (configured per server settings).
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  2. <strong>Pagination:</strong> If listing campaigns grows large, pagination can be enabled by appending ?page=1 to /campaigns.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  3. <strong>Country Code Validation:</strong> The primary_number and secondary_number must start with 27 (not
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ApiDocumentationPage;
