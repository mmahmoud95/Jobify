# Jobify Dashboard

## Overview
Jobify Dashboard is a full-stack job management application that allows users to manage job listings, track job statistics, and update their profiles. The project includes features such as user authentication, job filtering, and dynamic data visualization.

## Live Demo

Check out the live demo of the project here:
[Live Demo](http://jobifymz.up.railway.app/)

## Features

### 1. User Management
- **Register and Login:** Secure user authentication with registration and login pages.
- **Tester User:** A demo user account for testing and exploring the dashboard.

### 2. Job Statistics
- **Statistics Page:** Displays job-related statistics including:
  - Pending applications
  - Scheduled interviews
  - Declined jobs
  - Monthly job numbers with interactive charts.

### 3. Job Listings Management
- **All Jobs Page:** 
  - Displays job listings with pagination (10 jobs per page).
  - Search functionality to find specific jobs.
  - Filters for job status (interviewed, declined, pending) and job type (full-time, part-time, remote, internship).
  - Sorting options (latest, oldest, A-Z, Z-A).
  - Edit and delete job options.

### 4. Job Creation
- **Add Job Page:** 
  - Create new job listings with options to set job status (interviewed, declined, pending) and job type (full-time, part-time, remote, internship).

### 5. Profile Management
- **Profile Page:** 
  - Users can update their personal information, including name, email, last name, and location.

## Technologies Used
- **Frontend:** React, Context API, useReducer, Axios, styled-components, JavaScript, recharts
- **Backend:** Node.js, Express, MongoDB, bcryptjs, jsonwebtoken, mongoose

## Setup Instructions
```bash
git clone https://github.com/mmahmoud95/Jobify

install dependency for server
npm install

Set up environment variables:
Create a .env file in the server directory with your environment variables (e.g., database connection, JWT secret).

to install dependency for client
cd client
npm install

Start the Server and Client:
Open a command prompt in the root directory (where the server folder is located).

Run the following command to start both the server and client:
npm start