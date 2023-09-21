# PrimeVistaEstate

## Real Estate Application

This is a real estate application that allows users to search for properties, view property details, save favorite properties, and contact property owners. The application provides a user-friendly interface and offers essential features for a real estate platform.

### Features

- **Homepage:** The homepage includes a hero section with a search bar where users can search for properties by title, city, or country. It also showcases featured properties in a slider component.

- **Property Listing:** The property listing page displays a list of property cards. Each card includes an image, title, price, address, and a "Save" button to add the property to the user's favorites. Users can click on a property card to view more details about the property.

- **Property Details:** The property details page provides comprehensive information about a specific property, including the property image, title, price, description, facilities, and address. It also includes a map component to show the property location. Users can book a property tour, save the property as a favorite, and contact the property owner.

- **Authentication:** The application uses Auth0 for user authentication. Users can log in using their credentials or sign up for a new account. Once logged in, users can access additional features such as saving favorite properties and booking property tours.

- **Favorite Properties:** Users can save properties as favorites by clicking on the heart icon on property cards or the property details page. Saved properties can be accessed from the user's profile or dashboard.

- **Contact Property Owner:** Users can easily contact the property owner by clicking on the "Contact" button on the property details page. This feature enables users to send messages or inquiries directly to the property owner.

### Technologies Used

- React: JavaScript library for building user interfaces
- React Router: Library for handling routing in a React application
- Auth0: Authentication and authorization platform
- Axios: Promise-based HTTP client for making API requests
- Swiper: JavaScript slider library for creating carousels and sliders
- Leaflet: Open-source JavaScript library for interactive maps
- Mantine: React UI library for building modern web applications

### Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/real-estate-app.git`

2. Install the dependencies: `npm install`

3. Set up Auth0 credentials by creating an account and obtaining the necessary credentials.

4. Configure the application with the Auth0 credentials.

5. Start the development server: `npm start`

6. Open the application in your browser at [http://localhost:3000](http://localhost:3000)

### Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

### Acknowledgements

- Auth0 for providing authentication and authorization services.
- Swiper for the slider component used in the application.
- Leaflet for the interactive map component.
- Mantine for the UI library used in the application.

---

## React + Vite Project Setup

This project is a React application set up with Vite, a fast build tool for modern web applications. It includes features like hot module reloading (HMR), ESLint rules, and two official Vite plugins for React.

### Project Structure

The project structure is as follows:

- `src/`: Contains the source code for the React application.
  - `main.jsx`: The entry point for the React application.
  - `pages/`: Contains the different pages of the application.
    - `homepage/`: Contains the homepage components.
      - `Homepage.jsx`: The main component for the homepage.
    - `propertys/`: Contains the property page components.
      - `Propertys.jsx`: The main component for the property page.
    - `property/`: Contains the individual property page components.
      - `Property.jsx`: The main component for the individual property page.
  - `components/`: Contains reusable components used across the application.
  - `context/`: Contains the context provider component for user details.
    - `Context.jsx`: Defines the UserDetailContext and UserDetailContextProvider.
  - `package.json`: Defines the project dependencies and scripts.
  - `package-lock.json`: Locks down dependency versions for reproducible builds.
  - `README.md`: Documentation for the project setup and key aspects.

### Dependencies

The project has the following dependencies:

- React: A JavaScript library for building user interfaces.
- ReactDOM: A package that provides DOM-specific methods for React.
- React Router DOM: A library for routing in React applications.
- Axios: A promise-based HTTP client for making API requests.
- Auth0 React: A library for integrating Auth0 authentication in React applications.
- Leaflet: A JavaScript library for interactive maps.
- React Leaflet: A React wrapper for Leaflet.
- Esri Leaflet Geocoder: A plugin for geocoding addresses using Esri services.
- React Icons: A library of icons for React applications.
- React Query: A library for data fetching and caching in React applications.
- Mantine: A set of React components and hooks for building UIs.
- Swiper: A library for creating responsive touch sliders.

### Scripts

The project includes the following scripts:

- `dev`: Starts the development server with hot module reloading.
- `build`: Builds the production-ready optimized bundle.
- `lint`: Runs ESLint to check for linting errors.
- `preview`: Serves the production build locally for previewing.

### Usage

To use this project, follow these steps:

1. Clone the repository: `git clone <repository-url>`

2. Install the dependencies: `npm install` or `yarn install`

3. Start the development server: `npm run dev` or `yarn dev`

4. Open the application in your browser at [http://localhost:3000](http://localhost:3000)

### Additional Documentation

For more information on the tools and technologies used in this project, refer to the following documentation:

- [React Documentation](https://reactjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [React Router DOM Documentation](https://reactrouter.com/web/guides/quick-start)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Auth0 React Documentation](https://auth0.com/docs/quickstart/spa/react)
- [Leaflet Documentation](https://leafletjs.com/reference-1.7.1.html)
- [React Leaflet Documentation](https://react-leaflet.js.org/docs/start-introduction)
- [Esri Leaflet Geocoder Documentation](https://github.com/Esri/esri-leaflet-geocoder)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)
- [React Query Documentation](https://react-query.tanstack.com/)
- [Mantine Documentation](https://mantine.dev/)
- [Swiper Documentation](https://swiperjs.com/api)

