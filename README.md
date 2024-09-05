README


This repository contains the development work for the Movies1 project, which was part of a technical challenge. The goal of the project was to build a movie-related web application that consumes data from The Movie Database (TMDB) API. The project consists of two versions:

Version 1: A custom implementation designed from scratch using React, Next.js, and NestJS.
Version 2: An attempt to replicate the provided challenge requirements using Next.js for the frontend and JavaScript for API handling and other functionalities.
Due to time constraints, the movie search functionality and other core features weren't fully completed, but significant progress was made in both versions.

Versions
Version 1: Custom Implementation
Built using React, Next.js, and NestJS.
This version was designed to reflect a movie discovery platform based on personal ideas and preferences.
Key features:
Display of popular movies.
Search functionality for movies.
Ability to add/remove favorite movies.
Dynamic rendering and responsive UI.
Version 2: Replicating the Challenge Requirements
This version aimed to meet the specific requirements outlined in the challenge, utilizing Next.js for the frontend and core JavaScript for additional functionality.
Significant progress was made, but due to time constraints, some features like movie search and pagination weren’t fully completed.
Project Setup
Version 1 Setup
Frontend (React & Next.js)

Navigate to the version1-frontend directory.
Install dependencies: npm install.
Start the development server: npm run dev.
Backend (NestJS)

Navigate to the version1-backend directory.
Install dependencies: npm install.
Start the backend server: npm run start:dev.
Version 2 Setup
Frontend (Next.js)
Navigate to the version2-frontend directory.
Install dependencies: npm install.
Start the development server: npm run dev.
API Key
Both versions use TMDB API for fetching movie data. Ensure that you have an API key from TMDB.

Create an .env file in the root directory of each version.
Add the following environment variable:
makefile
Copy code
NEXT_PUBLIC_API_KEY=your_tmdb_api_key
Key Functionalities (Pending Completion)
Full implementation of search functionality.
Pagination for movie lists.
Handling of user sessions and authentication.
Future Improvements
If more time was available, the following tasks would be prioritized:

Complete the search and filter functionality.
Implement full pagination support.
Refine the UI to ensure responsiveness and enhance user experience.
Add user authentication to allow for personal profiles and movie lists.
Conclusion
Although the project was not fully completed within the given time frame, both versions demonstrate a strong foundation for a movie discovery platform, with several core features implemented. Additional work would be required to meet all challenge specifications and polish the final product.

Thank you for the opportunity, and I look forward to further discussing the progress made and potential next steps!