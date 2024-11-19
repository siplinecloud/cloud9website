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

              {/* Campaign management */}
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
                </p><br />

                {/* Upload Leads */}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {`api/leads/$campaign_id`}
                  </h3>
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Endpoint Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The api/leads/campaign_id endpoint is used to upload multiple leads to a specific campaign. Developers must pass the campaign_id as a URL parameter and a list of leads as part of the request body. Where  $leads should be declared as an array to hold all the leads,  see example code snippets below.
                  </p><br />
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Endpoint Details
                  </h3>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  •
                  URL: POST /api/leads/campaign_id{"\n"}
                  •
                  Method: POST{"\n"}
                  •
                  Authentication: Requires a valid Bearer token in the Authorization header.{"\n"}
                  •
                  Headers:
                  </pre>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">plaintext:</p>
                  <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {`
  Authorization: Bearer <access_token>
  Content-Type: application/json
`}
                  </pre>
                  {/* <p className="mt-4 text-gray-600 dark:text-gray-400">Body:</p>
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
                  </pre> */}
                </div>
                <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
        Request Parameters
      </h2>

      {/* URL Parameters */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          URL Parameter
        </h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 p-2 text-left dark:border-gray-700">
                Name
              </th>
              <th className="border border-gray-300 p-2 text-left dark:border-gray-700">
                Type
              </th>
              <th className="border border-gray-300 p-2 text-left dark:border-gray-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                campaign_id
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                int
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                ID of the campaign to which the leads are being added.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Request Body */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Request Body
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          The request body should include a leads array, where each item
          represents a lead with the following fields:
        </p>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 p-2 text-left dark:border-gray-700">
                Field
              </th>
              <th className="border border-gray-300 p-2 text-left dark:border-gray-700">
                Type
              </th>
              <th className="border border-gray-300 p-2 text-left dark:border-gray-700">
                Required
              </th>
              <th className="border border-gray-300 p-2 text-left dark:border-gray-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                fullname
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                string
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Yes
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Full name of the lead.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                national_id
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                string
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Yes
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                National ID or identification number of the lead.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                primary_number
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                string
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Yes
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Primary contact number of the lead. Must start with one of the
                allowed country codes.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                secondary_number
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                string
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                No
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Secondary contact number of the lead. Must start with one of
                the allowed country codes if provided.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                physical_address
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                string
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                No
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Physical address of the lead.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                email
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                string
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Yes
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Email address of the lead.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                supplier
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                string
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                No
              </td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                Supplier or source of the lead.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
        Example Request
      </h2>

      {/* URL */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          URL
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          POST https://cloud9.sipline-cloud.com/api/leads/2
        </pre>
      </div>

      {/* Headers */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Headers
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          Authorization: Bearer your_access_token
          {"\n"}Content-Type: application/json
        </pre>
      </div>

      {/* Body */}
      <div>
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Body
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {`{
  "leads": [
    {
      "fullname": "John Doe",
      "national_id": "123456789",
      "primary_number": "27123456789",
      "secondary_number": "265987654321",
      "physical_address": "123 Main Street",
      "email": "johndoe@example.com",
      "supplier": "Supplier A"
    },
    {
      "fullname": "Jane Smith",
      "national_id": "987654321",
      "primary_number": "91234567890",
      "secondary_number": "27123456787",
      "physical_address": "456 Elm Street",
      "email": "janesmith@example.com",
      "supplier": "Supplier B"
    }
  ]
}`}
        </pre>
      </div><br />
      <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
        Response
      </h2>

      {/* Success Response */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Success
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {`{
  "message": "Leads processed successfully",
  "total_processed": 2,
  "total_inserted": 1,
  "total_skipped": 1
}`}
        </pre>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <strong>total_processed:</strong> Total number of leads received.
          </li>
          <li>
            <strong>total_inserted:</strong> Number of leads successfully added to the campaign.
          </li>
          <li>
            <strong>total_skipped:</strong> Number of leads skipped due to duplicates or validation issues.
          </li>
        </ul>
      </div>

      {/* Validation Error Response */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Validation Error
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {`{
  "errors": {
    "leads.1.primary_number": [
      "The primary_number must start with one of the following country codes: 27, 265, 91, 1."
    ]
  }
}`}
        </pre>
      </div>

      {/* Invalid Campaign ID */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Invalid Campaign ID
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {`{
  "error": "Invalid campaign_id"
}`}
        </pre>
      </div>

      {/* Unauthorized Response */}
      <div>
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          Unauthorized
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {`{
  "error": "Unauthenticated."
}`}
        </pre>
      </div>
      <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
        Integration Examples
      </h2>

      {/* PHP Example */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          1. PHP (Using cURL)
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200 overflow-x-auto">
          {`<?php
$campaignId = 2;
$url = "https://cloud9.sipline-cloud.com/api/leads/$campaignId";
$accessToken = 'your_access_token_here';
$leads = [
  [
    'fullname' => 'John Doe',
    'national_id' => '123456789',
    'primary_number' => '27123456789',
    'secondary_number' => '265987654321',
    'physical_address' => '123 Main Street',
    'email' => 'johndoe@example.com',
    'supplier' => 'Supplier A',
  ],
  [
    'fullname' => 'Jane Smith',
    'national_id' => '987654321',
    'primary_number' => '91234567890',
    'secondary_number' => '27123456787',
    'physical_address' => '456 Elm Street',
    'email' => 'janesmith@example.com',
    'supplier' => 'Supplier B',
  ],
];
$headers = [
  "Authorization: Bearer $accessToken",
  "Content-Type: application/json",
];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['leads' => $leads]));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
?>`}
        </pre>
      </div>
      {/* Python Example */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          2. Python (Using requests)
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200 overflow-x-auto">
          {`import requests

url = "https://cloud9.sipline-cloud.com/api/leads/2"
access_token = "your_access_token_here"
leads = [
  {
    "fullname": "John Doe",
    "national_id": "123456789",
    "primary_number": "27123456789",
    "secondary_number": "265987654321",
    "physical_address": "123 Main Street",
    "email": "johndoe@example.com",
    "supplier": "Supplier A",
  },
  {
    "fullname": "Jane Smith",
    "national_id": "987654321",
    "primary_number": "91234567890",
    "secondary_number": "27123456787",
    "physical_address": "456 Elm Street",
    "email": "janesmith@example.com",
    "supplier": "Supplier B",
  },
]

response = requests.post(
  url,
  json={"leads": leads},
  headers={
    "Authorization": f"Bearer {access_token}",
    "Content-Type": "application/json"
  }
)

print(response.status_code, response.json())`}
        </pre>
      </div>

      {/* JavaScript Example */}
      <div>
        <h3 className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
          3. JavaScript (Using Axios)
        </h3>
        <pre className="rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200 overflow-x-auto">
          {`const axios = require('axios');

const campaignId = 2;
const url = \`https://cloud9.sipline-cloud.com/api/leads/\${campaignId}\`;
const accessToken = 'your_access_token_here';

const leads = [
  {
    fullname: 'John Doe',
    national_id: '123456789',
    primary_number: '27123456789',
    secondary_number: '265987654321',
    physical_address: '123 Main Street',
    email: 'johndoe@example.com',
    supplier: 'Supplier A',
  },
  {
    fullname: 'Jane Smith',
    national_id: '987654321',
    primary_number: '91234567890',
    secondary_number: '27123456787',
    physical_address: '456 Elm Street',
    email: 'janesmith@example.com',
    supplier: 'Supplier B',
  },
];

axios
  .post(url, { leads }, {
    headers: {
      Authorization: \`Bearer \${accessToken}\`,
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error.response.status, error.response.data);
  });`}
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

            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ApiDocumentationPage;
