<!-- PROJECT LOGO -->

<h3 align="center"> BookStop </h3>

  <p align="center">
    Book Library | Full-stack | Responsive
    <br />
    <br />
    <a href="https://bookspot-webapp.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/shpokas-io/bookstop-webapp/issues">Report Bug</a>
    ·
    <a href="https://github.com/shpokas-io/bookstop-webapp/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li>
      <a href="#left-to-do">Left To Do</a>
    </li>
    <li>
      <a href="#tought-process">Tought Process</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

BookStop is a full-stack application that provides users with a seamless experience for managing and discovering books. The project is built using ASP.NET Core for the backend and React with Vite for the frontend.

- Add, edit, delete, and view books.
- Easily find books using search filters.
- Mobile-friendly interface for an optimal user experience.
- Calculations coming from backend api

<img src="./public/dekstop.png" width="800px" /><br>
<img src="./public/figmadesign.png" width="500px" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

##### Back end

- ![ASP.NET Core][ASP.NET Core]
- ![Entity Framework Core][Entity Framework Core]

##### Front end

- ![React][React]
- ![Tailwind CSS][Tailwind CSS]
- ![Vite]
- ![NPM][NPM]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

##### Backend Setup

- Clone this repo:<br>
  `git clone https://github.com/shpokas-io/bookstop-webapp`
- Navigate to backend directory:<br>
  `cd bookstopAPI`
- Restore dependencys:<br>
  `dotnet restore`
- Build and run the application:<br>
  `dotnet run`

##### Frontend setup

- Navigate to frontend directory:<br>
  `cd frontend`
- Install dependencys:<br>
  `npm install`
- Run development server:<br>
  `npm run dev`

#### Tought Process

This section contains my main problems that i faced and were the hardest to debug, maybe for someone will be usefull, other than that skip this section 😄

##### Design:

Proccess for app design was pretty straight forward, layed simple layout of the page in my notebook , then transfered it to figma, and constructed the app by figma design
[text](https://www.figma.com/design/oqPbjto9dvjxVPzBOrAHRw/BookSpot-sketches?node-id=0-1&node-type=canvas&t=6Nf3ywBf66ehdanJ-0)

##### Key Problems Faced:

1. CORS Policy Errors: One of the biggest challenges you faced was ensuring the frontend (hosted on Netlify) could successfully communicate with the backend (hosted on Heroku). CORS issues emerged when the frontend tried to fetch data from the API. The error message clearly indicated that No 'Access-Control-Allow-Origin' header is present, which prevented cross-origin requests from being processed.

2. Deployment and Routing Issues: You encountered issues with the second page not loading correctly after deploying the frontend to Netlify. The error 404 (Not Found) showed up when trying to access specific pages like /reservations, indicating there were routing issues in handling direct access to non-root paths.

3. Inconsistent API Response: Along with CORS, there were moments where the API failed to fetch data from the backend properly, showing errors like net::ERR_FAILED. This suggested there was something going wrong either with the Heroku deployment or with API requests from the frontend.

4. Middleware and Pipeline Misconfiguration: Ensuring that the middleware (e.g., CORS policy) was correctly ordered in your backend codebase was a point of refinement. For instance, applying the CORS middleware had to happen before other middlewares like Authorization or HttpsRedirection to ensure requests were processed correctly.

5. Alot more that i gladly would talk about

##### Key Features of the Bookspot Project:

1. Backend Using ASP.NET Core with In-Memory Database: The backend API uses ASP.NET Core and Entity Framework to simulate a book database using an in-memory database. This is useful for development purposes, providing data without needing a persistent database. Also implemented a seeding mechanism to automatically populate the database with initial books like Harry Potter and The Lord of the Rings.

2. Book Management API: The backend provides a REST API that serves book-related data (e.g., fetching book information like title, year, and cover image). The endpoints allow the frontend to retrieve book data dynamically and display it to the user.

3. Dynamic Routing and API Fetching: Integrated features to fetch book information dynamically from the API. When the user interacts with the frontend, it sends a request to the API to retrieve the list of available books and displays them with their corresponding details like title, year, type (book or audiobook), and image.

4. CORS Setup for Frontend Integration: Defined a CORS policy that allows the frontend (hosted on Netlify) to communicate with the backend API. This ensures that the two environments can exchange data without cross-origin issues, allowing operations like fetching book data and sending requests.

5. Scalability Potential: Although the current database is in-memory, the structure is in place to switch to a persistent database (like SQL Server or PostgreSQL) in the future. This means the app can easily scale beyond development and be adapted to use real, long-term data storage.
<!-- CONTACT -->

##### Steps Taken to Solve Problems:

1. Adjusting CORS Policy: First addressed CORS errors by setting up a proper policy in the backend to allow requests from https://bookspot-webapp.netlify.app. Ensuring the AllowAnyHeader and AllowAnyMethod methods were part of the CORS configuration helped to make sure all types of requests were permitted from the frontend.

2. Reordering Middleware in the Backend: One key solution was reordering the middleware in the backend API. Esured that the CORS policy was applied early in the pipeline, before other middlewares like Authorization and HttpsRedirection. This prevented early blocking of requests.

3. Fixing Frontend Routes in Netlify: To resolve the issue of pages not loading directly (404 errors), needed to configure Netlify to handle frontend routing properly, ensuring that React’s client-side routing is supported by Netlify’s server settings.

4. Testing and Debugging Using Browser Tools: Made use of browser developer tools to debug and verify the API request and response cycle, checking the headers, status codes, and CORS errors. This helped you pinpoint the issue with missing Access-Control-Allow-Origin headers.

## Contact

Skirmantas Spakovskis - [@LinkedIn](https://www.linkedin.com/in/skirmantasspakovskis/) - skirm.spak@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links. -->

[NPM]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[Webpack]: https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black
[Vite]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[React]: https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[Parcel]: https://img.shields.io/badge/Parcel-%23B93C00.svg?style=for-the-badge&logo=parcel&logoColor=white
[SCSS]: https://img.shields.io/badge/SCSS-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white
[Webpack]: https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white
[ASP.NET Core]: https://img.shields.io/badge/ASP.NET%20Core-%230078D7.svg?style=for-the-badge&logo=aspnetcore&logoColor=white
[Tailwind CSS]: https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwindcss&logoColor=white
[Entity Framework Core]: https://img.shields.io/badge/Entity%20Framework%20Core-%23094E9C.svg?style=for-the-badge&logo=dotnet&logoColor=white
[product-screenshot]: public/images/prev.png
